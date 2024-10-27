import prisma from './prisma';

export const getUserLists = async (userId: string) => {
  return await prisma.list.findMany({
    where: {
      userId,
    },
  });
};
