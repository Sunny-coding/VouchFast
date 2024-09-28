import React from 'react';

import Tabs from '@/components/Tabs';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const accountTabs = [
    { name: 'Profile', url: '/account' },
    { name: 'Settings', url: '/account/settings' },
    { name: 'Billing', url: '/account/billing' },
  ];

  return (
    <>
      <Tabs tabs={accountTabs} />
      {children}
    </>
  );
}
