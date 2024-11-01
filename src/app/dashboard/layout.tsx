import { redirect } from 'next/navigation';

import { getServerSession } from '@/server/session';

import Sidebar from '@/components/Sidebar';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  if (!session) redirect('/login');

  return (
    <div className='layout mt-8 flex'>
      <Sidebar className='w-1/4' />
      <div className='w-3/4'>{children}</div>
    </div>
  );
}
