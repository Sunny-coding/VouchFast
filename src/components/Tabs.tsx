'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Tab = {
  name: string;
  url: string;
};

interface TabsProps {
  tabs: Tab[];
}

const Tabs = ({ tabs }: TabsProps) => {
  const pathname = usePathname();

  return (
    <div className='sticky top-[5.2rem] z-10 mx-auto my-5 flex w-min gap-5 rounded-sm bg-accent px-5 py-2'>
      {tabs.map(tab => {
        const isActive = pathname === tab.url.toLowerCase();

        return (
          <Link
            key={tab.url}
            href={tab.url.toLowerCase()}
            className={isActive ? 'text-primary' : ''}
          >
            {tab.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Tabs;
