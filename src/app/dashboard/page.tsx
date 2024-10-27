import UserLists from '@/components/dashboard/lists';
import DashboardOverview from '@/components/dashboard/overview';
import { auth } from '@/lib/session';

const DashboardPage = async () => {
  const session = await auth();
  const user = session?.user;

  return (
    <main className='min-h-screen space-y-16'>
      <DashboardOverview />
      <UserLists userId={user?.id!} />
    </main>
  );
};

export default DashboardPage;
