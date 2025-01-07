import { headers } from 'next/headers';
import Link from 'next/link';

import AuthMenu from './AuthMenu';
import MainNav from './MainNav';
import MobileNav from './mobile';

import { getServerSession } from '@/server/session';

import { cn } from '@/lib/utils';

import { grotesque } from '@/components/font/grotesque';

const Navbar = async () => {
  const headersList = headers();
  const pathname = headersList.get('x-invoke-path') || '';

  const session = await getServerSession();

  return (
    <nav className='sticky top-0 z-[100] bg-background'>
      <div className='layout relative flex h-16 items-center justify-between text-lg'>
        <h1 className='text-xl'>
          <Link
            href={'/'}
            className={cn('text-xl font-black lg:text-3xl', grotesque.className)}
          >
            VouchFast
          </Link>
        </h1>

        {pathname === '/' && <MainNav />}

        <div className={cn('flex items-center gap-2', !session && 'lg:hidden')}>
          <AuthMenu />
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
