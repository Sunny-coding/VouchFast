import DocsSidebar from '@/components/docs-sidebar';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='layout mt-8 flex'>
      <DocsSidebar className='w-1/4' />
      <div className='w-3/4'>{children}</div>
    </div>
  );
}
