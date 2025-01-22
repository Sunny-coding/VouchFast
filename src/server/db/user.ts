import db from '@/lib/prisma';

import type { ApiKey, List, Testimonial, User } from '@prisma/client';

// * User-related functions
export async function getUser(userId: string): Promise<User | null> {
  return db.user.findUnique({ where: { id: userId } });
}

export async function getUserFromList(
  listId: string,
): Promise<Partial<User> | null> {
  const list = await db.list.findUnique({
    where: { id: listId },
    select: { user: { select: { id: true, name: true, plan: true } } },
  });

  return list!.user ?? null;
}

// * List-related functions

export async function getList(listId: string): Promise<List | null> {
  return db.list.findUnique({ where: { id: listId } });
}

type ListWithoutUserId = Omit<List, 'userId'>;

export async function getListsFromUser(
  userId: string,
): Promise<ListWithoutUserId[]> {
  return db.list.findMany({ where: { userId }, omit: { userId: true } });
}

export async function getListCount(userId: string): Promise<number> {
  return db.list.count({ where: { userId } });
}

// * Testimonial-related functions

export async function getTestimonialsFromUser(
  userId: string,
): Promise<TestimonialWithoutUserId[]> {
  return db.testimonial.findMany({ where: { userId }, omit: { userId: true } });
}

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

type TestimonialWithoutUserId = Omit<Testimonial, 'userId'>;

export async function getTestimonialsFromList(
  listId: string,
): Promise<TestimonialWithoutUserId[]> {
  return db.testimonial.findMany({ where: { listId }, omit: { userId: true } });
}

// * API key related functions

export const getApiKeys = async (userId: string): Promise<Array<ApiKey> | null> => {
  const user = await db.user.findUnique({
    where: { id: userId },
    select: { apikeys: true },
  });

  return user?.apikeys ?? null;
};
