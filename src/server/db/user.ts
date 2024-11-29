import db from '@/lib/prisma';

import type { List, Testimonial, User } from '@prisma/client';

// * User-related functions
export async function getUser(userId: string): Promise<User | null> {
  return db.user.findUnique({ where: { id: userId } });
}

export async function getUserFromList(
  listId: string,
): Promise<Partial<User> | null> {
  const list = await db.list.findUnique({
    where: { id: listId },
    select: { User: { select: { id: true, name: true, plan: true } } },
  });

  return list?.User ?? null;
}

// * List-related functions
export async function getList(listId: string): Promise<List | null> {
  return db.list.findUnique({ where: { id: listId } });
}

export async function getListsFromUser(userId: string): Promise<List[]> {
  return db.list.findMany({ where: { userId } });
}

export async function getListCount(userId: string): Promise<number> {
  return db.list.count({ where: { userId } });
}

// * Testimonial-related functions

export const getTestimonialFromId = async (
  id: string,
): Promise<Testimonial | null> => {
  return db.testimonial.findUnique({ where: { id } });
};

type CountType = 'lists' | 'user';

export async function getTestimonialCount(
  id: string,
  countType: CountType = 'lists',
): Promise<number> {
  const whereClause =
    countType === 'lists' ? { listId: id } : { list: { userId: id } };

  return db.testimonial.count({ where: whereClause });
}

export async function getTestimonialsFromList(
  listId: string,
): Promise<Testimonial[]> {
  return db.testimonial.findMany({ where: { listId } });
}
