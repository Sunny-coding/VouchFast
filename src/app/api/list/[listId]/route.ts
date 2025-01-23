import { NextResponse } from 'next/server';

import { getTestimonialsFromList } from '@/server/db/user';

import { checkApiAuthorization } from '@/lib/api-utils';
import { rateLimit } from '@/lib/ratelimit';

import type { NextRequest } from 'next/server';

//  * This route returns all testimonials stored inside a list
//  * The `listId` is required to fetch the testimonials

export async function GET(
  request: NextRequest,
  { params }: { params: { listId: string } },
) {
  try {
    // ! Rate limiting
    const limitReached = await rateLimit(request);
    if (!limitReached) {
      return NextResponse.json(
        { success: false, error: 'Rate limit exceeded. Try again later' },
        { status: 429 },
      );
    }

    // Authentication
    const response = await checkApiAuthorization();
    if (response instanceof NextResponse) return response;

    // Get testimonials from list
    const testimonials = await getTestimonialsFromList(params.listId);

    return NextResponse.json({ success: true, data: testimonials }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch testimonials from list' },
      { status: 500 },
    );
  }
}
