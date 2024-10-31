import db from '@/lib/prisma';

export const getUser = async (userId: string) => {
  const user = await db.user.findUnique({
    where: { id: userId },
  });

  return user;
};

export const getUserFromList = async (listId: string) => {
  const list = await db.list.findUnique({
    where: { id: listId },
    include: { User: { select: { id: true, name: true, plan: true } } },
  });

  if (!list || !list.User) return null;

  return {
    id: list.User.id,
    name: list.User.name,
    plan: list.User.plan,
  };
};

export const getList = async (listId: string) => {
  const list = await db.list.findUnique({
    where: { id: listId },
  });

  return list;
};

export const getListsFromUser = async (userId: string) => {
  const lists = await db.list.findMany({
    where: {
      userId,
    },
  });

  return lists;
};

export const getListCount = async (userId: string) => {
  const count = await db.list.count({
    where: { userId },
  });

  return count || 0;
};

type countType = 'lists' | 'user';

export const getTestimonialCount = async (
  id: string,
  counter: countType = 'lists',
) => {
  let count: number;

  if (counter === 'lists') {
    count = await db.testimonial.count({
      where: { listId: id },
    });
  } else {
    count = await db.testimonial.count({
      where: {
        list: {
          userId: id,
        },
      },
    });
  }

  return count;
};

export const getTestimonialsFromList = async (listId: string) => {
  const testimonials = await db.testimonial.findMany({
    where: { listId },
  });

  return testimonials;
};
