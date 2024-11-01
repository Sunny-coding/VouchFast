import { cache } from 'react';

import { auth } from '@/lib/session';

export const getServerSession = cache(async () => {
  return await auth();
});

export const getUserId = cache(async () => {
  const session = await getServerSession();

  if (!session || !session.user) return null;

  return session.user.id;
});
