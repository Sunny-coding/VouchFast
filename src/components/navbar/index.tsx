import Link from 'next/link';

import AuthenticatedNavActions from './authenticated-navactions';
import HomepageLinks from './HomepageLinks';

import { cn } from '@/lib/utils';

import { grotesque } from '@/components/font/grotesque';

const Navbar = () => {
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

        <HomepageLinks />
        <AuthenticatedNavActions />
      </div>
    </nav>
  );
};

export default Navbar;
