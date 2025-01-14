'use client';

import { EllipsisVertical } from 'lucide-react';

import DeleteApiKey from '@/components/delete-api-key';
import EditApiKey from '@/components/edit-api-key-btn';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import type { ApiKey } from '@prisma/client';

interface IProps {
  apiKey: ApiKey;
}

const ApiKeyDropdown = ({ apiKey }: IProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button className='px-1' size='sm' variant='ghost'>
          <EllipsisVertical size={20} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='rounded' align='end'>
        {/*
          Clicking the button automatically closes the Edit API Dialog.
          We override this behaviour by not letting the component unmount.
          https://stackoverflow.com/questions/77185827/shadcn-dialog-inside-of-dropdown-closes-automatically
        */}
        <DropdownMenuItem onSelect={e => e.preventDefault()} className='rounded'>
          <EditApiKey {...apiKey} />
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem onSelect={e => e.preventDefault()} className='rounded'>
          <DeleteApiKey apiKeyId={apiKey.id} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ApiKeyDropdown;
