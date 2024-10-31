import { auth } from '@/lib/session';

export const getUserId = async () => {
  const session = await auth();

  return session?.user?.id;
};
