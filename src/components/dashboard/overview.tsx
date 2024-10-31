import OverviewCard from '@/components/cards/overview-card';
import Heading from '@/components/DashboardHeading';
import { cn } from '@/lib/utils';
import { getUser } from '@/server/db/user';
import { getUserId } from '@/server/session';

interface DashboardOverviewProps {
  className?: string;
}

const DashboardOverview = async ({
  className,
}: DashboardOverviewProps) => {
  const userId = await getUserId();
  const user = await getUser(userId);

  if (!user) return null;

  return (
    <>
      <Heading text='Overview' />

      <div className={cn('mt-16 grid gap-6 lg:grid-cols-3', className)}>
        <OverviewCard title='Testimonials'>2/3</OverviewCard>
        <OverviewCard title='Plan' link='/pricing'>
          {user.plan}
        </OverviewCard>
        <OverviewCard title='Lists' link='/dashboard/lists'>
          {user.lists.length || 0}
        </OverviewCard>
      </div>
    </>
  );
};

export default DashboardOverview;
