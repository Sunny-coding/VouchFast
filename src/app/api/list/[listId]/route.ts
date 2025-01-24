import { NextResponse } from 'next/server';

import { getTestimonialsFromList } from '@/server/db/user';

import { withRateLimitAndAuth } from '@/lib/api-wrapper';

import type { NextRequest } from 'next/server';

//  * This route returns all testimonials stored inside a list
//  * The `listId` is required to fetch the testimonials

const handleGet = async (
  _request: NextRequest,
  { params }: { params: { listId: string } },
) => {
  try {
    const testimonials = await getTestimonialsFromList(params.listId);

    if (testimonials) {
      return NextResponse.json(
        { success: true, data: testimonials },
        { status: 200 },
      );
    }

    return NextResponse.json(
      { success: false, error: 'Testimonials not found' },
      { status: 404 },
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch testimonials from list' },
      { status: 500 },
    );
  }
};

export const GET = withRateLimitAndAuth(handleGet);
