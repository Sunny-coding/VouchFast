'use client';

import { allDocs } from 'content-collections';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

interface IProps {
  className?: string;
}

type TabType = {
  name: string;
  url: string;
};

const Tab = ({ name, url }: TabType) => {
  const pathname = usePathname();
  const isActive = pathname === url;

  return (
    <Link
      href={url}
      className={cn(
        'flex max-w-48 items-center gap-5 rounded px-2 py-1 text-base text-gray-400',
        isActive && 'bg-accent text-primary',
      )}
    >
      {name}
    </Link>
  );
};

const DocsSidebar = ({ className }: IProps) => {
  const sidebarContents: TabType[] = allDocs.map(doc => ({
    name: doc.title,
    url: doc.slug,
  }));

  return (
    <div className={cn('sticky top-24 h-min', className)}>
      <ul className='flex flex-col gap-2 text-xl font-medium text-white'>
        {sidebarContents.map(tab => {
          return <Tab key={tab.name} {...tab} />;
        })}
      </ul>
    </div>
  );
};

export default DocsSidebar;
