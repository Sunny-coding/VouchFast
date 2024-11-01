import logout from '@/actions/logout';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import authMenu from '@/config/authMenuLinks';
import { auth } from '@/lib/session';
import { getServerSession } from '@/server/session';

import { User } from '@prisma/client';
import { LogOut } from 'lucide-react';
import Link from 'next/link';

const AuthMenu = async () => {
  const session = await getServerSession();

  if (!session) return;

  const user = session.user as User;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className='border-2'>
          <AvatarImage src={user.image || undefined} />
          <AvatarFallback>{user.name?.[0]}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='mt-1 rounded' align='end'>
        <div className='flex items-center justify-start gap-2 p-2'>
          <div className='flex flex-col space-y-1 leading-none'>
            {user.name && <p className='font-medium'>{user.name}</p>}
            {user.email && (
              <p className='w-[200px] truncate text-sm text-muted-foreground'>
                {user.email}
              </p>
            )}
          </div>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuLabel>My Account</DropdownMenuLabel>

        <DropdownMenuGroup className='mt-2'>
          {authMenu.map(tab => {
            const Icon = tab.icon;
            return (
              <Link href={tab.url} key={tab.url}>
                <DropdownMenuItem>
                  <Icon className='ml-1 mr-2 text-primary' />
                  {tab.name}
                </DropdownMenuItem>
              </Link>
            );
          })}
        </DropdownMenuGroup>

        <form action={logout}>
          <Button
            variant='destructive'
            className='mt-4 w-full rounded text-sm'
          >
            <LogOut size={15} className='mr-2' />
            Logout
          </Button>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AuthMenu;
