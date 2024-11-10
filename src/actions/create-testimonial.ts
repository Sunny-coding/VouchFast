'use server';

import { Plan } from '@prisma/client';

import { testimonialSchema } from '@/schema/testimonial-schema';

import { getTestimonialCount, getUserFromList } from '@/server/db/user';

import db from '@/lib/prisma';
import { PrettyZodErrors } from '@/lib/utils';

const MAX_FREE_TESTIMONIALS = 3;

const createTestimonialAction = async (listId: string, formData: FormData) => {
  const entries = Object.fromEntries(formData.entries());

  // Server side validation
  const isValid = testimonialSchema.safeParse(entries);
  if (!isValid.success) {
    return {
      success: false,
      errors: PrettyZodErrors(isValid.error),
      data: isValid.data,
    };
  }

  // Check if user exists
  const user = await getUserFromList(listId);
  if (!user) {
    return { success: false, message: 'Could not submit the testimonial!' };
  }

  // Check if user is premium and has reached the limit of free testimonials
  const isFreePlan = user.plan === Plan.FREE;
  const testimonialCount = await getTestimonialCount(listId);

  if (isFreePlan && testimonialCount >= MAX_FREE_TESTIMONIALS) {
    return {
      success: false,
      message: 'User has reached the maximum number of testimonials',
    };
  }

  // Finally add the testimonial to the List
  const testimonial = await db.testimonial.create({
    data: {
      listId,
      userId: user.id,
      ...isValid.data,
    },
  });

  return testimonial
    ? { success: true, message: 'Testimonial created successfully!' }
    : { success: false, message: 'Failed to create testimonial' };
};

export default createTestimonialAction;
