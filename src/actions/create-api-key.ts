'use server';

import { revalidatePath } from 'next/cache';

import { apiKeySchema } from '@/schema/api-key-schema';

import { getUser } from '@/server/db/user';
import { getUserId } from '@/server/session';

import db from '@/lib/prisma';
import { generateApiToken } from '@/lib/token';
import { formDataToObject } from '@/lib/utils';

const createApiKeyAction = async (formData: FormData) => {
  try {
    // * Authentication stuff
    const userId = await getUserId();
    if (!userId) {
      return { success: false, message: 'User not authenticated' };
    }

    const user = await getUser(userId);
    if (!user) return { success: false, message: 'User not found' };

    // * Validate Schema
    const rawInput = formDataToObject(formData);
    const isValid = apiKeySchema.safeParse({ ...rawInput });

    if (!isValid.success) {
      return { success: false, message: 'Invalid form data' };
    }

    // * Create API Key
    const apiKeyToken = generateApiToken();

    const apiKey = await db.apiKey.create({
      data: {
        userId,
        key: apiKeyToken,
        ...isValid.data,
      },
    });

    revalidatePath('/dashboard/api');

    return apiKey
      ? { success: true, message: 'API Key created successfully!', apiKeyToken }
      : { success: false, message: 'Failed to create API key', key: null };
  } catch (error) {
    return { success: false, message: 'Failed to create API key', key: null };
  }
};

export default createApiKeyAction;
