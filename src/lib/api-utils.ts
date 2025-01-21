import db from '@/lib/prisma';

const API_KEY_REGEX = /^vf_[a-zA-Z0-9]{30}$/;

interface VerifyApiKeyResponse {
  success: boolean;
  error?: string;
  status: number;
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

    return { success: true, status: 200 };
  } catch (error) {
    return { success: false, error: 'Failed to verify API Key', status: 500 };
  }
};
