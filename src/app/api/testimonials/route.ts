import { NextResponse } from 'next/server';

import { getTestimonialsFromUser } from '@/server/db/user';

import { checkApiAuthorization } from '@/lib/api-utils';
import { withRateLimitAndAuth } from '@/lib/api-wrapper';

import type { VerifyApiKeyResponse } from '@/types/api-response';

const handleGet = async () => {
  try {
    const authResponse = (await checkApiAuthorization()) as VerifyApiKeyResponse;
    const testimonials = await getTestimonialsFromUser(authResponse.user?.id!);

    if (testimonials) {
      return NextResponse.json(
        { success: true, data: testimonials },
        { status: 200 },
      );
    }

    // Handle case when testimonial is not found
    return NextResponse.json(
      { success: false, error: 'Testimonial not found' },
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
