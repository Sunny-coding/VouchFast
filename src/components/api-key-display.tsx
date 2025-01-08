'use client';

import React from 'react';

import { Copy } from 'lucide-react';

import { useCopyToClipboard } from '@/components/hooks/use-clipboard';

import { Button } from '@/components/ui/button';
import { DialogClose, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface ApiKeyDisplayProps {
  apiKey: string;
}

const ApiKeyDisplay: React.FC<ApiKeyDisplayProps> = ({ apiKey }) => {
  const handleCopy = useCopyToClipboard();

  return (
    <>
      <div className='flex items-center space-x-2'>
        <div className='grid flex-1 gap-2'>
          <Label htmlFor='key' className='sr-only'>
            API Key
          </Label>
          <Input id='key' defaultValue={apiKey} readOnly className='text-xs' />
        </div>

        <Button
          onClick={() => handleCopy(apiKey)}
          type='button'
          variant='ghost'
          className='hover:bg-transparent'
        >
          <span className='sr-only'>Copy</span>
          <Copy />
        </Button>
      </div>

      <DialogFooter>
        <DialogClose asChild>
          <Button type='button' variant='default' size='sm' className='mr-auto'>
            Done
          </Button>
        </DialogClose>
      </DialogFooter>
    </>
  );
};

export default React.memo(ApiKeyDisplay);
