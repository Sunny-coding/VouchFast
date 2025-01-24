import { NextResponse } from 'next/server';

import { getListsFromUser } from '@/server/db/user';

import { checkApiAuthorization } from '@/lib/api-utils';
import { withRateLimitAndAuth } from '@/lib/api-wrapper';

import { VerifyApiKeyResponse } from '@/types/api-response';

// * This route returns all the `lists` owned by an user

const handleGet = async () => {
  try {
    const authResponse = (await checkApiAuthorization()) as VerifyApiKeyResponse;
    const lists = await getListsFromUser(authResponse.user?.id!);

    if (lists) {
      return NextResponse.json({ success: true, data: lists }, { status: 200 });
    }

    return NextResponse.json(
      { success: false, error: 'Lists not found' },
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
