import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

import { siteConfig as config } from '@/config/config';

import db from '@/lib/prisma';

import type { VerifyApiKeyResponse } from '@/types/api-response';

const { API_KEY_REGEX, API_KEY_TOKEN_NAME } = config;

export const verifyApiKey = async (token: string): Promise<VerifyApiKeyResponse> => {
  if (!API_KEY_REGEX.test(token))
    return { success: false, error: 'API Key not valid', status: 401 };

  try {
    const result = await db.apiKey.findFirst({
      where: { token: token },
      select: { user: true },
    });

    if (!result || !result.user) {
      return {
        success: false,
        error: 'Invalid API Key',
        status: 401,
      };
    }

    return { success: true, status: 200, user: result.user };
  } catch (error) {
    return { success: false, error: 'Failed to verify API Key', status: 500 };
  }
};

export const getApiKey = () => {
  const headersList = headers();
  return headersList.get(API_KEY_TOKEN_NAME);
};

// HOA to check API Auth in all API routes
export const checkApiAuthorization = async () => {
  const authHeader = getApiKey();

  if (!authHeader) {
    return NextResponse.json(
      { success: false, error: 'API Key is required' },
      { status: 401 },
    );
  }

  const isValid = await verifyApiKey(authHeader);

  if (!isValid || !isValid.success || !isValid.user) {
    return NextResponse.json(
      { success: isValid.success, error: isValid.error },
      { status: isValid.status },
    );
  }

  // ? Response (VerifyApiKeyResponse)  -> Authorized
  // ? Response (NextResponse)          -> Unauthorized

  return isValid as VerifyApiKeyResponse;
};
