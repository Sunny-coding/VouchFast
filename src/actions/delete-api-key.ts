'use server';

import { revalidatePath } from 'next/cache';

import { getUserSession } from '@/server/session';

import db from '@/lib/prisma';

const deleteApiKeyAction = async (apiKeyID: string) => {
  try {
    // * Authenticate the user
    const user = await getUserSession();
    if (!user) {
      return { success: false, message: 'You must be logged in' };
    }

    // Find the API Key
    const apiKey = await db.apiKey.findUnique({
      where: { id: apiKeyID },
      include: { user: true },
    });

    if (!apiKey) {
      return { success: false, message: 'API Key not found.' };
    }

    // Check if the user is the owner of the List
    if (apiKey.user!.email !== user.email) {
      return {
        success: false,
        message: "You don't have permission to delete this List.",
      };
    }

    await db.apiKey.delete({ where: { id: apiKeyID } });

    revalidatePath('/dashboard/api');
    return { success: true, message: 'API Key deleted successfully.' };
  } catch (error) {
    return { success: false, message: 'An error occurred.' };
  }
};

export default deleteApiKeyAction;
