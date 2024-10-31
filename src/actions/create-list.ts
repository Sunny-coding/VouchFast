'use server';

import db from '@/lib/prisma';
import { formDataToObject } from '@/lib/utils';
import { getUser } from '@/server/db/user';
import { getUserId } from '@/server/session';

import { Plan } from '@prisma/client';

const MAX_FREE_LISTS = 1;
const MAX_PAID_LISTS = 15;

const createListAction = async (formData: FormData) => {
  // Authentication stuff
  const userId = await getUserId();
  if (!userId) {
    return { success: false, message: 'User not authenticated' };
  }

  const user = await getUser(userId);
  if (!user) return { success: false, message: 'User not found' };

  // Check if user is premium and has reached the limit of free lists
  const isPremium = user.plan === Plan.PAID;
  const listCount = user.lists.length;

  // Check list limits based on user plan below
  // FREE Users -> 1
  // PAID Users -> 15

  if (
    (!isPremium && listCount >= MAX_FREE_LISTS) ||
    listCount >= MAX_PAID_LISTS
  ) {
    const message = isPremium
      ? 'You have reached the maximum number of lists'
      : 'Upgrade to premium to create more lists';

    return { success: false, message };
  }

  // Create List
  const { name, headerTitle, headerDesc, questions } =
    formDataToObject(formData);

  const list = await db.list.create({
    data: {
      name,
      headerTitle,
      headerDesc,
      // questions was passed as JSOn string, so we need to parse it
      questions: JSON.parse(questions),
      userId,
    },
  });

  return list
    ? { success: true, message: 'List created successfully!' }
    : { success: false, message: 'Failed to create list' };
};

export default createListAction;
