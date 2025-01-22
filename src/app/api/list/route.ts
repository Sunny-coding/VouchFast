import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

import { getListsFromUser } from '@/server/db/user';

import { verifyApiKey } from '@/lib/api-utils';

// * This route returns all the `lists` owned by an user

export async function GET() {
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

    if (!isValid.success || !isValid.user) {
      return NextResponse.json(
        { success: isValid.success, error: isValid.error },
        { status: isValid.status },
      );
    }

    const lists = await getListsFromUser(isValid.user.id);

    return NextResponse.json({ success: true, data: lists }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch testimonials from list' },
      { status: 500 },
    );
  }
}
