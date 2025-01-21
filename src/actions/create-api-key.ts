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
    const token = generateApiToken();

    const apiKey = await db.apiKey.create({
      data: {
        userId,
        token,
        ...isValid.data,
      },
    });

    revalidatePath('/dashboard/api');

    return apiKey
      ? { success: true, message: 'API Key created successfully!', token }
      : { success: false, message: 'Failed to create API key', key: null };
  } catch (error) {
    console.error('Error creating API key:', error);
    return { success: false, message: 'Failed to create API key', key: null };
  }
};

export default createApiKeyAction;
