import OverviewCard from '@/components/cards/overview-card';
import Heading from '@/components/DashboardHeading';
import { cn } from '@/lib/utils';

interface DashboardOverviewProps {
  className?: string;
}

const DashboardOverview = ({ className }: DashboardOverviewProps) => {
  return (
    <>
      <Heading text='Overview' />

      <div className={cn('mt-16 grid gap-6 lg:grid-cols-3', className)}>
        <OverviewCard title='Testimonials'>2/3</OverviewCard>
        <OverviewCard title='Plan'>FREE</OverviewCard>
        <OverviewCard title='Lists' link='/dashboard/lists'>
          1
        </OverviewCard>
      </div>
    </>
  );
};

export default DashboardOverview;
