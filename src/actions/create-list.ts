'use server';

import { Plan } from '@prisma/client';
import { revalidatePath } from 'next/cache';

import { listSchema } from '@/schema/list-schema';

import { getListCount, getUser } from '@/server/db/user';
import { getUserId } from '@/server/session';

import db from '@/lib/prisma';
import { formDataToObject } from '@/lib/utils';

const MAX_FREE_LISTS = 1;
const MAX_PAID_LISTS = 15;

const createListAction = async (formData: FormData) => {
  try {
    // * Authentication stuff
    const userId = await getUserId();
    if (!userId) {
      return { success: false, message: 'User not authenticated' };
    }

    const user = await getUser(userId);
    if (!user) return { success: false, message: 'User not found' };

    //*  Check if user is premium and has reached the limit of free lists

    const isPremium = user.plan === Plan.PAID;
    const listCount = await getListCount(userId);

    // ! Check list limits based on user plan below
    // FREE Users -> 1
    // PAID Users -> 15

    if ((!isPremium && listCount >= MAX_FREE_LISTS) || listCount >= MAX_PAID_LISTS) {
      const message = isPremium
        ? 'You have reached the maximum number of lists'
        : 'Upgrade to premium to create more lists';

      return { success: false, message };
    }

    // * Create List
    const rawInput = formDataToObject(formData);
    const isValid = listSchema.safeParse({
      ...rawInput,
      // questions was sent as stringified JSON object
      questions: JSON.parse(rawInput.questions),
    });

    if (!isValid.success) {
      return { success: false, message: 'Invalid form data' };
    }

    const list = await db.list.create({
      data: {
        ...isValid.data,
        userId,
      },
    });

    revalidatePath('/dashboard/lists');

    return list
      ? { success: true, message: 'List created successfully!' }
      : { success: false, message: 'Failed to create list' };
  } catch (error) {
    console.error('Error creating list:', error);
    return { success: false, message: 'Failed to create list' };
  }
};

export default createListAction;
