import { NextResponse } from 'next/server';

import { getTestimonialsFromUser } from '@/server/db/user';

import { checkApiAuthorization } from '@/lib/api-utils';

// * This route returns all the `testimonials` owned by an user

export async function GET() {
  try {
    // TODO: Rate Limit this endpoint

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
