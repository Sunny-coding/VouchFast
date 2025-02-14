import AuthMenuDropdown from './auth-menu-dropdown';
import MobileNav from './mobile';

import { getServerSession } from '@/server/session';

import { cn } from '@/lib/utils';

const AuthenticatedNavActions = async () => {
  const session = await getServerSession();

  return (
    <div className={cn('flex items-center gap-2', !session && 'lg:hidden')}>
      <AuthMenuDropdown />
      <MobileNav />
    </div>
  );
};

export default AuthenticatedNavActions;
