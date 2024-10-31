import Heading from '@/components/DashboardHeading';
import RenderLists from '@/components/render-lists';
import { getListsFromUser } from '@/server/db/user';
import { getUserId } from '@/server/session';

const InvitePage = async () => {
  const userID = await getUserId();
  const userLists = await getListsFromUser(userID);

  return (
    <>
      <Heading text='Lists' />
      <RenderLists lists={userLists} className='mt-8' />
    </>
  );
};

export default InvitePage;
