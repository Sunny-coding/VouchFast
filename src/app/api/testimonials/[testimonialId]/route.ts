import { NextResponse } from 'next/server';

import { getTestimonialFromId } from '@/server/db/user';

import { withRateLimitAndAuth } from '@/lib/api-wrapper';

import type { NextRequest } from 'next/server';

// * This route returns a single `testimonial`

const handleGet = async (
  _request: NextRequest,
  { params }: { params: { testimonialId: string } },
) => {
  const testimonial = await getTestimonialFromId(params.testimonialId);

  if (testimonial) {
    return NextResponse.json({ success: true, data: testimonial }, { status: 200 });
  }

  return NextResponse.json(
    { success: false, error: 'Testimonial not found' },
    { status: 404 },
  );
};

export const GET = withRateLimitAndAuth(handleGet);
