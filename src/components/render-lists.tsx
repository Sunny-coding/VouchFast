import { List } from '@prisma/client';

import { Button } from './ui/button';

import { getTestimonialCount } from '@/server/db/user';

import { cn } from '@/lib/utils';

import OverviewCard from '@/components/cards/overview-card';

interface IProps {
  lists: List[];
  className?: string;
}

const RenderLists = ({ lists, className }: IProps) => {
  return (
    <div className={cn('grid gap-6 lg:grid-cols-3', className)}>
      {lists.map(async list => {
        const count = await getTestimonialCount(list.id);

        return (
          <OverviewCard
            key={list.id}
            title={list.name}
            link={`/dashboard/lists/${list.id}`}
          >
            <div className='flex h-min items-center justify-between'>
              Items: {count}
              <Button size='sm' className='z-50'>
                View
              </Button>
            </div>
          </OverviewCard>
        );
      })}
    </div>
  );
};

export default RenderLists;
