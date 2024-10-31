import OverviewCard from '@/components/cards/overview-card';
import Heading from '@/components/DashboardHeading';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { getUser } from '@/server/db/user';

import { Plus } from 'lucide-react';
import Link from 'next/link';

interface IProps {
  userId: string;
  className?: string;
}

const CreateListButton = () => {
  return (
    <Link href='/dashboard/lists/new'>
      <Button className='mt-4 flex gap-3 rounded'>
        <Plus /> Create new List
      </Button>
    </Link>
  );
};

const UserLists = async ({ userId, className }: IProps) => {
  const user = await getUser(userId);

  const userLists = user?.lists || [];
  const noLists = userLists.length === 0;

  return (
    <>
      <div className='flex justify-between'>
        <Heading text='Lists' />
        {!noLists && <CreateListButton />}
      </div>

      {noLists && (
        <div className='flex w-full flex-col items-center justify-center'>
          You don't have any lists yet.
          <CreateListButton />
        </div>
      )}

      <div className={cn('mt-16 grid gap-6 lg:grid-cols-3', className)}>
        {userLists.map(list => (
          <OverviewCard
            key={list.id}
            title={list.name}
            link={`/dashboard/lists/${list.id}`}
          >
            Items: {(list.testimonials && list.testimonials.length) || 0}
          </OverviewCard>
        ))}
      </div>
    </>
  );
};

export default UserLists;
