'use client';

import { grotesque } from '@/components/font/grotesque';
import AccountForm from '@/components/forms/dashboard/Account';
import AddressForm from '@/components/forms/dashboard/Address';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

import { useSession } from 'next-auth/react';

const ProfilePage = () => {
  const { data: session } = useSession();

  if (!session) {
    // redirect('/login');
    return null;
  }

  const initials = session.user?.name?.split(' ').map(n => n[0]);

  return (
    <div className='mx-auto min-h-screen max-w-2xl px-5 lg:px-0'>
      <div>
        <h2 className={cn('text-4xl font-bold', grotesque.className)}>
          My Profile
        </h2>

        <Avatar className='mx-auto h-32 w-32 border-2'>
          <AvatarImage src={session.user?.image ?? ''} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>

        <AccountForm session={session} />
        <AddressForm session={session} />
      </div>
    </div>
  );
};

export default ProfilePage;
