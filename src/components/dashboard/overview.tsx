import OverviewCard from '@/components/cards/overview-card';
import Heading from '@/components/DashboardHeading';
import { cn } from '@/lib/utils';
import {
  getListCount,
  getTestimonialCount,
  getUser,
} from '@/server/db/user';
import { getUserId } from '@/server/session';

import { Plan } from '@prisma/client';

interface IProps {
  className?: string;
}

const DashboardOverview = async ({ className }: IProps) => {
  const userId = await getUserId();
  const user = await getUser(userId);

  const isPremimum = user!.plan === Plan.PAID;
  const listCount = await getListCount(userId);
  const testimonialCount = await getTestimonialCount(userId, 'user');

  if (!user) return null;

  const testQuota = isPremimum
    ? `${testimonialCount}/∞`
    : `${testimonialCount}/3`;
  const listQuota = isPremimum ? `${listCount}/15` : `${listCount}/1`;

  return (
    <>
      <Heading text='Overview' />

      <div className={cn('mt-16 grid gap-6 lg:grid-cols-3', className)}>
        <OverviewCard title='Testimonials'>{testQuota}</OverviewCard>
        <OverviewCard title='Plan' link='/pricing'>
          {user.plan}
        </OverviewCard>
        <OverviewCard title='Lists' link='/dashboard/lists'>
          {listQuota}
        </OverviewCard>
      </div>
    </>
  );
};

export default DashboardOverview;
