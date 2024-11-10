'use server';

import { getUserSession } from '@/server/session';

import db from '@/lib/prisma';

const deleteTestimonialAction = async (testimonialId: string) => {
  // * Authenticate the user
  const userClient = await getUserSession();
  if (!userClient) {
    return { success: false, message: 'User not authenticated' };
  }

  // * Check if testimonial belongs to the user
  const testimonial = await db.testimonial.findUnique({
    where: { id: testimonialId, userId: userClient.id },
  });

  console.log(testimonial);
};
