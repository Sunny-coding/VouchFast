/* eslint-disable no-unused-vars */
import { NextResponse } from 'next/server';

import { checkApiAuthorization } from '@/lib/api-utils';
import { rateLimit } from '@/lib/ratelimit';

import type { NextRequest } from 'next/server';

type RouteParams = {
  [key: string]: string | string[] | undefined;
};

type RouteHandler<T extends RouteParams = RouteParams> = (
  request: NextRequest,
  context: { params: T },
) => Promise<NextResponse>;

export function withRateLimitAndAuth<T extends RouteParams = RouteParams>(
  handler: RouteHandler<T>,
): RouteHandler<T> {
  return async (request: NextRequest, context: { params: T }) => {
    try {
      // ? Rate limiting
      const limitReached = await rateLimit(request);
      if (!limitReached) {
        return NextResponse.json(
          { success: false, error: 'Rate limit exceeded. Try again later' },
          { status: 429 },
        );
      }

      // ? Authentication
      const authResponse = await checkApiAuthorization();
      if (authResponse instanceof NextResponse) return authResponse;

      // ? If rate limiting and authentication pass, call the original handler
      return handler(request, context);
    } catch (error) {
      return NextResponse.json(
        { success: false, error: 'An error occurred while processing your request' },
        { status: 500 },
      );
    }
  };
}
