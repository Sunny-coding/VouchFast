import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

import { getTestimonialsFromList } from '@/server/db/user';

import { verifyApiKey } from '@/lib/api-utils';

import type { NextRequest } from 'next/server';

export async function GET(
  _request: NextRequest,
  { params }: { params: { listId: string } },
) {
  try {
    // TODO: Rate Limit this endpoint

    // Authentication
    const headersList = headers();
    const authHeader = headersList.get('Api-Key');

    if (!authHeader) {
      return NextResponse.json(
        { success: false, error: 'API Key is required' },
        { status: 401 },
      );
    }

    const isValid = await verifyApiKey(authHeader);

    if (!isValid.success) {
      return NextResponse.json(
        { success: isValid.success, error: isValid.error },
        { status: isValid.status },
      );
    }

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
