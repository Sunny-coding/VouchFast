import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

import { config } from '@/config/config';

import { getTestimonialFromId } from '@/server/db/user';

import { verifyApiKey } from '@/lib/api-utils';

import type { NextRequest } from 'next/server';

// * This route returns a single `testimonial`

export async function GET(
  _req: NextRequest,
  { params }: { params: { testimonialId: string } },
) {
  try {
    // TODO: Rate Limit this endpoint

    // Authentication
    const headersList = headers();
    const authHeader = headersList.get(config.apiKeyTokenName);

    if (!authHeader) {
      return NextResponse.json(
        { success: false, error: 'API Key is required' },
        { status: 401 },
      );
    }

    const isValid = await verifyApiKey(authHeader);

    if (!isValid.success || !isValid.user) {
      return NextResponse.json(
        { success: isValid.success, error: isValid.error },
        { status: isValid.status },
      );
    }

    const testimonials = await getTestimonialFromId(params.testimonialId);

    return NextResponse.json({ success: true, data: testimonials }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch testimonials' },
      { status: 500 },
    );
  }
}
