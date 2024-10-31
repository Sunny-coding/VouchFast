import Heading from '@/components/DashboardHeading';
import RenderLists from '@/components/render-lists';
import { Button } from '@/components/ui/button';
import { getListsFromUser, getUser } from '@/server/db/user';

import { Plus } from 'lucide-react';
import Link from 'next/link';

interface IProps {
  userId: string;
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

const UserLists = async ({ userId }: IProps) => {
  const user = await getUser(userId);
  const userLists = await getListsFromUser(user!.id);

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

      {!noLists && <RenderLists lists={userLists} />}
    </>
  );
};

export default UserLists;
