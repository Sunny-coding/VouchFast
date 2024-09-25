import { grotesque } from '../font/grotesque';
import MainNav from './MainNav';
import MobileNav from './mobile';

import { cn } from '@/lib/utils';

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-50 bg-background'>
      <div className='container relative mx-auto flex items-center justify-between px-5 py-4 text-lg lg:px-0'>
        <h1 className='text-xl'>
          <Link
            href={'/'}
            className={cn(
              'text-xl font-black lg:text-3xl',
              grotesque.className,
            )}
          >
            VouchFast
          </Link>
        </h1>

        <MainNav />
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
