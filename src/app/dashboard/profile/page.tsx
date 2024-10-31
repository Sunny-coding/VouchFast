'use client';

import Heading from '@/components/DashboardHeading';
import AccountForm from '@/components/forms/dashboard/Account';
import AddressForm from '@/components/forms/dashboard/Address';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
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
        <Heading text='My Profile' className='mb-8 text-center' />

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
    <Card className='mx-auto w-full max-w-2xl border-none bg-black text-white'>
      <CardHeader>
        <Skeleton className='mx-auto h-8 w-32 bg-gray-700' />
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='flex justify-center'>
          <Skeleton className='h-24 w-24 rounded-full bg-gray-700' />
        </div>
        <Skeleton className='h-6 w-40 bg-gray-700' />
        <div className='space-y-4'>
          <Skeleton className='h-4 w-full bg-gray-700' />
          <Skeleton className='h-4 w-full bg-gray-700' />
          <Skeleton className='h-4 w-full bg-gray-700' />
          <Skeleton className='h-4 w-full bg-gray-700' />
        </div>
      </CardContent>
      <CardFooter className='flex justify-end'>
        <Skeleton className='h-10 w-32 bg-gray-700' />
      </CardFooter>
    </Card>
  );
};

export default ProfilePage;
