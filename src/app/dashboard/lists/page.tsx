import { getListCount, getListsFromUser } from '@/server/db/user';
import { getUserId } from '@/server/session';

import CreateListButton from '@/components/create-list-btn';
import Heading from '@/components/dashboard-heading';
import RenderLists from '@/components/render-lists';

const InvitePage = async () => {
  const userID = (await getUserId()) as string;
  const userLists = await getListsFromUser(userID);
  const noLists = (await getListCount(userID)) === 0;

  return (
    <>
      <div className='flex justify-between'>
        <Heading text='Lists' />
        {!noLists && <CreateListButton />}
      </div>

      {noLists && (
        <div className='flex flex-col items-center justify-center'>
          You don&apos;t have any lists yet.
          <CreateListButton />
        </div>
      )}

      {!noLists && <RenderLists lists={userLists} className='mt-8' />}
    </>
  );
};

export default InvitePage;
