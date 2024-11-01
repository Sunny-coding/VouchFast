import { getUserId } from '@/server/session';

import UserLists from '@/components/dashboard/lists';
import DashboardOverview from '@/components/dashboard/overview';

const DashboardPage = async () => {
  const userId = await getUserId();

  return (
    <main className='min-h-screen space-y-16'>
      <DashboardOverview />
      <UserLists userId={userId} />
    </main>
  );
};

export default DashboardPage;
