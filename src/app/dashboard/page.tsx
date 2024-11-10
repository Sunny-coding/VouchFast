import { getUser } from '@/server/db/user';
import { getUserId } from '@/server/session';

import UserLists from '@/components/dashboard/lists';
import DashboardOverview from '@/components/dashboard/overview';

import type { User } from '@prisma/client';

const DashboardPage = async () => {
  const userId = (await getUserId()) as string;
  const user = (await getUser(userId)) as User;

  return (
    <main className='min-h-screen space-y-16'>
      <DashboardOverview user={user} />
      <UserLists userId={userId} />
    </main>
  );
};

export default DashboardPage;
