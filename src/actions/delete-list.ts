'use server';

import { revalidatePath } from 'next/cache';

import { getUserSession } from '@/server/session';

import db from '@/lib/prisma';

const deleteListAction = async (listId: string) => {
  try {
    // * Authenticate the user
    const user = await getUserSession();
    if (!user) {
      return { success: false, message: 'You must be logged in' };
    }

    // Find the List
    const list = await db.list.findUnique({
      where: { id: listId },
      include: { user: true },
    });

    if (!list) {
      return { success: false, message: 'List not found.' };
    }

    // Check if the user is the owner of the List
    if (list.user!.email !== user.email) {
      return {
        success: false,
        message: "You don't have permission to delete this List.",
      };
    }

    await db.list.delete({
      where: { id: listId },
    });

    revalidatePath('/dashboard/lists');
    return { success: true, message: 'List deleted successfully.' };
  } catch (error) {
    return { success: false, message: 'An error occurred.' };
  }
};

export default deleteListAction;
