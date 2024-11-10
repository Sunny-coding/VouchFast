import { redirect } from 'next/navigation';

import { getServerSession } from '@/server/session';

import Heading from '@/components/DashboardHeading';
import AccountForm from '@/components/forms/dashboard/Account';
import AddressForm from '@/components/forms/dashboard/Address';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import type { User } from 'next-auth';

const ProfilePage = async () => {
  const session = await getServerSession();
  if (!session) redirect('/login');

  const user = session.user as User;

  return (
    <div className='mx-auto min-h-screen max-w-2xl px-5 lg:px-0'>
      <div>
        <Heading text='My Profile' className='mb-8 text-center' />

        <Avatar className='mx-auto h-32 w-32 border-2 border-primary'>
          <AvatarImage src={user.image!} />
          <AvatarFallback className='text-4xl'>
            {/* Zeeshan Ali -> ZA */}
            {user.name!.split(' ').map(n => n[0])}
          </AvatarFallback>
        </Avatar>

        <AccountForm user={user} />
        <AddressForm user={user} />
      </div>
    </div>
  );
};

export default ProfilePage;
