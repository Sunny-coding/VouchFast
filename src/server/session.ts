import { cache } from 'react';

import { auth } from '@/lib/session';

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
