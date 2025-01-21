'use server';

import { revalidatePath } from 'next/cache';

import { apiKeySchema } from '@/schema/api-key-schema';

import { getUser } from '@/server/db/user';
import { getUserId } from '@/server/session';

import db from '@/lib/prisma';
import { formDataToObject } from '@/lib/utils';

const updateApiKeyAction = async (id: string, formData: FormData) => {
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

    const apiKey = await db.apiKey.update({
      where: { id },
      data: {
        name: isValid.data.name,
      },
    });

    revalidatePath('/dashboard/api');

    return apiKey
      ? { success: true, message: 'API Key updated successfully' }
      : { success: false, message: 'Failed to update API key' };
  } catch (error) {
    console.error('Error creating API key:', error);
    return { success: false, message: 'Failed to update API key' };
  }
};

export default updateApiKeyAction;
