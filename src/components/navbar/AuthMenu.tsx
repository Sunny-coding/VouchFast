import { Button } from '../ui/button';

import logout from '@/actions/logout';
import { auth } from '@/lib/session';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Landmark, LogOut, Settings, User } from 'lucide-react';
import Link from 'next/link';

const AuthMenu = async () => {
  const session = await auth();

  if (!session) {
    return;
  }

  const user = session.user;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className='border-2'>
          <AvatarImage src={session.user?.image as string | undefined} />
          <AvatarFallback>{session.user?.name?.[0]}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='mt-1 rounded' align='end'>
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {user!.name && <p className="font-medium">{user!.name}</p>}
            {user!.email && (
              <p className="w-[200px] truncate text-sm text-muted-foreground">
                {user!.email}
              </p>
            )}
          </div>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuLabel>My Account</DropdownMenuLabel>

        <DropdownMenuGroup className='mt-2'>
          <Link href='/account'>
            <DropdownMenuItem>
              <User className='ml-1 mr-2 text-primary' />
              Profile
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem>
            <Landmark className='ml-1 mr-2 text-primary' />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className='ml-1 mr-2 text-primary' />
            Settings
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <form action={logout}>
          <Button variant='destructive' className='mt-4 w-full text-sm rounded'>
            <LogOut size={15} className='mr-2' />
            Logout
          </Button>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AuthMenu;
