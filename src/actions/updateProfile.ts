'use server';

import { revalidatePath } from 'next/cache';

import { profileSchema } from '@/schema/profile-schema';

import { getUserSession } from '@/server/session';

import db from '@/lib/prisma';

const updateProfile = async (formData: FormData) => {
  try {
    // * Authenticate the user
    const user = await getUserSession();
    if (!user) {
      return { success: false, message: 'You must be logged in' };
    }

    // * Validate Data
    const entries = Object.fromEntries(formData.entries());
    const isValid = profileSchema.safeParse(entries);

    if (!isValid.success) {
      return { success: false, message: isValid.error.message };
    }

    const data = isValid.data;

    // * Update the profile
    const userUpdated = await db.user.update({
      where: { id: user.id },
      data: {
        name: data.name,
        email: data.email,
      },
    });

    revalidatePath('/dashboard/profile');

    return userUpdated
      ? { success: true, message: 'Profile updated successfully!' }
      : { success: false, message: 'Failed to update' };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'An error occurred' };
  }
};

export default updateProfile;
