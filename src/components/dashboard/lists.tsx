import { getListCount, getListsFromUser } from '@/server/db/user';

import CreateListButton from '@/components/create-list-btn';
import Heading from '@/components/DashboardHeading';
import RenderLists from '@/components/render-lists';

interface IProps {
  userId: string;
}

const UserLists = async ({ userId }: IProps) => {
  const userLists = await getListsFromUser(userId);
  const noLists = (await getListCount(userId)) === 0;

  return (
    <>
      <div className='flex justify-between'>
        <Heading text='Lists' />
        {!noLists && <CreateListButton />}
      </div>

      {noLists && (
        <div className='flex w-full flex-col items-center justify-center'>
          You don&apos;t have any lists yet.
          <CreateListButton />
        </div>
      )}

      {!noLists && <RenderLists lists={userLists} />}
    </>
  );
};

export default UserLists;
