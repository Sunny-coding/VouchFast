'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import authMenu from '@/config/authMenuLinks';

import { cn } from '@/lib/utils';

import type { LucideIcon } from 'lucide-react';
import type { IconType } from 'react-icons';

interface SidebarProps {
  className?: string;
}

type TabType = {
  name: string;
  icon: IconType | LucideIcon;
  url: string;
};

const Tab = ({ name, icon, url }: TabType) => {
  const pathname = usePathname();

  const Icon = icon;
  const isActive = pathname === url;

  return (
    <Link
      href={url}
      className={cn(
        'flex max-w-48 items-center gap-5 rounded px-4 py-2 text-base text-gray-400',
        isActive && 'bg-accent text-white',
      )}
    >
      <Icon className='text-xl text-primary' />
      {name}
    </Link>
  );
};

const Sidebar = ({ className }: SidebarProps) => {
  return (
    <div className={cn('sticky top-24 h-min', className)}>
      <ul className='flex flex-col gap-2 text-xl font-medium text-white'>
        {authMenu.map(tab => (
          <div key={tab.url}>
            <Tab {...tab} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
