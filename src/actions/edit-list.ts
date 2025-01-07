'use server';

import { revalidatePath } from 'next/cache';

import { listSchema } from '@/schema/list-schema';

import { getUser } from '@/server/db/user';
import { getUserId } from '@/server/session';

import db from '@/lib/prisma';
import { formDataToObject } from '@/lib/utils';

const editListAction = async (formData: FormData, listId: string) => {
  try {
    // * Authentication stuff
    const userId = await getUserId();
    if (!userId) {
      return { success: false, message: 'User not authenticated' };
    }

    const user = await getUser(userId);
    if (!user) return { success: false, message: 'User not found' };

    // * Validate List Schema
    const rawInput = formDataToObject(formData);
    const isValid = listSchema.safeParse({
      ...rawInput,
      // questions was sent as stringified JSON object
      questions: JSON.parse(rawInput.questions),
    });

    if (!isValid.success) {
      return { success: false, message: 'Invalid form data' };
    }

    // * Update the List
    const list = await db.list.update({
      data: {
        ...isValid.data,
        userId,
      },
      where: {
        id: listId,
      },
    });

    revalidatePath('/dashboard/lists');

    return list
      ? { success: true, message: 'List update successfully!' }
      : { success: false, message: 'Failed to update list' };
  } catch (error) {
    console.error('Error creating list:', error);
    return { success: false, message: 'Failed to update list' };
  }
};

export default editListAction;
