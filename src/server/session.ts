import { cache } from 'react';

import db from '@/lib/prisma';
import { auth } from '@/lib/session';

import type { Plan, User as PrismaUser } from '@prisma/client';
import type { Session, User } from 'next-auth';

export const getServerSession = cache(async (): Promise<Session | null> => {
  return await auth();
});

export const getUserSession = cache(async (): Promise<User | null> => {
  const session = await getServerSession();
  return session?.user ?? null;
});

export const getUserId = cache(async (): Promise<string | null> => {
  const session = await getServerSession();
  return session?.user?.id ?? null;
});

export const getUserPlanFromUserId = cache(async (userId: string): Promise<Plan> => {
  let user: PrismaUser | null = null;

  try {
    user = (await db.user.findUnique({
      where: { id: userId },
      select: { plan: true },
    })) as PrismaUser;
  } catch (error) {
    console.error(error);
  }

  return user?.plan ?? 'FREE';
});
