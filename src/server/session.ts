import { auth } from '@/lib/session';

export const getUserId = async () => {
  const session = await auth();

  if (!session || !session.user) return null;

  return session.user.id;
};
