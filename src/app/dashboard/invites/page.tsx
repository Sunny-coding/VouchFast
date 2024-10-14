import Heading from '@/components/DashboardHeading';
import CreateInvite from '@/components/forms/ClientInvite';

const InvitePage = () => {
  return (
    <main className='grid gap-6'>
      <Heading text='Invite' />
      <CreateInvite />
    </main>
  );
};

export default InvitePage;
