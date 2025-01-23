import { NextResponse } from 'next/server';

import { getTestimonialsFromUser } from '@/server/db/user';

import { checkApiAuthorization } from '@/lib/api-utils';
import { rateLimit } from '@/lib/ratelimit';

import type { NextRequest } from 'next/server';

// * This route returns all the `testimonials` owned by an user

export async function GET(request: NextRequest) {
  try {
    // ! Rate limiting
    const limitReached = await rateLimit(request);
    if (!limitReached) {
      return NextResponse.json(
        { success: false, error: 'Rate limit exceeded. Try again later' },
        { status: 429 },
      );
    }

    // * Authentication
    const response = await checkApiAuthorization();
    if (response instanceof NextResponse) return response;

    const testimonials = await getTestimonialsFromUser(response.user?.id!);

    return NextResponse.json({ success: true, data: testimonials }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch testimonials' },
      { status: 500 },
    );
  }
}
