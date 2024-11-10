import { cache } from 'react';

import { auth } from '@/lib/session';

import type { Session, User } from 'next-auth';

type OptionalSession = Session | null;
type OptionalUser = User | null;
type OptionalUserId = string | null;

export const getServerSession = cache(async (): Promise<OptionalSession> => {
  return await auth();
});

export const getUserSession = cache(async (): Promise<OptionalUser> => {
  const session = await getServerSession();
  return session?.user ?? null;
});

export const getUserId = cache(async (): Promise<OptionalUserId> => {
  const session = await getServerSession();
  return session?.user?.id ?? null;
});
