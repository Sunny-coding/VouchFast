'use client';

import { allDocs } from 'content-collections';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

interface IProps {
  className?: string;
}

type TabType = {
  title: string;
  slug: string;
};

const Tab = ({ title, slug }: TabType) => {
  const pathname = usePathname();
  const href = slug === '/docs/get-started' ? '/docs' : slug;
  const isActive =
    pathname === slug || (slug === '/docs/get-started' && pathname === '/docs');

  return (
    <Link
      href={href}
      className={cn(
        'flex max-w-48 items-center gap-5 rounded px-2 py-1 text-base text-gray-400',
        isActive && 'bg-accent text-primary',
      )}
    >
      {title}
    </Link>
  );
};

const DocsSidebar = ({ className }: IProps) => {
  const getStarted = allDocs.find(doc => doc.slug === '/docs/get-started');
  const docs = allDocs.filter(doc => doc.slug !== '/docs/get-started');

  return (
    <div className={cn('sticky top-24 h-min', className)}>
      <ul className='flex flex-col gap-2 text-xl font-medium text-white'>
        {getStarted && <Tab {...getStarted} />}
        {docs.map(tab => {
          return <Tab key={tab.slug} {...tab} />;
        })}
      </ul>
    </div>
  );
};

export default DocsSidebar;
