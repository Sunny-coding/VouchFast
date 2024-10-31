import UserLists from '@/components/dashboard/lists';
import DashboardOverview from '@/components/dashboard/overview';
import { getUserId } from '@/server/session';

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
