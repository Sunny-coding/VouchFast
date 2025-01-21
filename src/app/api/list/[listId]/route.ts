import { NextResponse } from 'next/server';

import { getTestimonialsFromList } from '@/server/db/user';

import type { NextRequest } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { listId: string } },
) {
  try {
    // await rateLimit(req)

    // Get testimonials from list
    const testimonials = await getTestimonialsFromList(params.listId);

    return NextResponse.json({ success: true, data: testimonials });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch testimonials from list' },
      { status: 500 },
    );
  }
}
