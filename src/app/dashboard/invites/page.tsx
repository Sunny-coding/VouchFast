import Heading from '@/components/DashboardHeading';
import CreateInvite from '@/components/forms/ClientInvite';
import PendingInvites from '@/components/PendingInvites';

const InvitePage = () => {
  return (
    <main className='grid gap-6'>
      <Heading text='Invite' />
      <CreateInvite />
      {/* <PendingInvites /> */}
    </main>
  );
};

export default InvitePage;
