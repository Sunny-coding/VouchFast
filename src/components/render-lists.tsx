import OverviewCard from '@/components/cards/overview-card';
import { cn } from '@/lib/utils';
import { getTestimonialCount } from '@/server/db/user';

import { List } from '@prisma/client';

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
            Items: {count}
          </OverviewCard>
        );
      })}
    </div>
  );
};

export default RenderLists;
