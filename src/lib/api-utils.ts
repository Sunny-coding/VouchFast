import { User } from '@prisma/client';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

import { config } from '@/config/config';

import db from '@/lib/prisma';

const API_KEY_REGEX = /^vf_[a-zA-Z0-9]{30}$/;

interface VerifyApiKeyResponse {
  success: boolean;
  error?: string;
  status: number;
  user?: User;
}

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

export const checkApiAuthorization = async () => {
  const headersList = headers();
  const authHeader = headersList.get(config.apiKeyTokenName);

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

  return isValid;
};
