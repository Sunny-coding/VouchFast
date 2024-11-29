'use server';

import { revalidatePath } from 'next/cache';

import { getUserSession } from '@/server/session';

import db from '@/lib/prisma';

const editTestimonialAction = async (testimonialId: string, newText: string) => {
  try {
    // * Authenticate the user
    const user = await getUserSession();
    if (!user) {
      return { success: false, message: 'You must be logged in' };
    }

    // Find the testimonial
    const testimonial = await db.testimonial.findUnique({
      where: { id: testimonialId },
      include: { user: true },
    });

    if (!testimonial) {
      return { success: false, message: 'Testimonial not found.' };
    }

    // Check if the user is the owner of the testimonial
    if (testimonial.user?.email !== user.email) {
      return {
        success: false,
        message: "You don't have permission to update this testimonial.",
      };
    }

    await db.testimonial.update({
      where: { id: testimonialId },
      data: { message: newText },
    });

    revalidatePath('/dashboard/lists/[listId]');
    return { success: true, message: 'Testimonial updated successfully.' };
  } catch (error) {
    return { success: false, message: 'An error occurred.' };
  }
};

export default editTestimonialAction;
