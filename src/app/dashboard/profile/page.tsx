'use client';

import Heading from '@/components/DashboardHeading';
import AccountForm from '@/components/forms/dashboard/Account';
import AddressForm from '@/components/forms/dashboard/Address';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const ProfilePage = () => {
  const { data: session, status } = useSession();

  // Redirect if no session and loading screen if session is loading
  if (status === 'loading') return <LoadingSkeleton />;
  if (!session) redirect('/login');

  const initials = session.user?.name?.split(' ').map((n: string) => n[0]);

  return (
    <div className='mx-auto min-h-screen max-w-2xl px-5 lg:px-0'>
      <div>
        <Heading text='My Profile' />

        <Avatar className='mx-auto h-32 w-32 border-2 border-primary'>
          <AvatarImage src={session.user?.image!} />
          <AvatarFallback className='text-4xl'>{initials}</AvatarFallback>
        </Avatar>

        <AccountForm session={session} />
        <AddressForm session={session} />
      </div>
    </div>
  );
};

const LoadingSkeleton = () => {
  return (
    <div className='flex items-center gap-4'>
      <Skeleton className='h-36 w-36 rounded-full' />
      <div className='space-y-5'>
        <Skeleton className='h-8 w-[300px]' />
        <Skeleton className='h-8 w-[300px]' />
      </div>
    </div>
  );
};

export default ProfilePage;
