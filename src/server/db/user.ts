import db from '@/lib/prisma';

export const getUser = async (userId: string) => {
  const user = await db.user.findUnique({
    where: { id: userId },
    include: { lists: true },
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

export const getTestimonialCount = async (listId: string) => {
  const count = await db.testimonial.count({
    where: { listId },
  });
  return count;
};

export const getTestimonialsFromList = async (listId: string) => {
  const testimonials = await db.testimonial.findMany({
    where: { listId },
  });

  return testimonials;
};

export const getUserLists = async (userId: string) => {
  const lists = await db.list.findMany({
    where: {
      userId,
    },
  });

  return lists;
};
