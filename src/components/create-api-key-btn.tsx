'use client';

import { memo } from 'react';

import { Plus } from 'lucide-react';

import ApiKeyDisplay from './api-key-display';

import { cn } from '@/lib/utils';

import ApiKeyForm from '@/components/forms/api-key';
import { useApiKeyForm } from '@/components/hooks/use-api-form';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface CreateApiKeyProps {
  className?: string;
}

const CreateApiKey: React.FC<CreateApiKeyProps> = ({ className }) => {
  const { apiKey } = useApiKeyForm();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={cn('flex gap-3 rounded', className)}>
          <Plus /> Create API Key
        </Button>
      </DialogTrigger>

      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>{apiKey ? 'API Key' : 'Add API Key'}</DialogTitle>
        </DialogHeader>

        {!apiKey && <ApiKeyForm />}
        {apiKey && <ApiKeyDisplay apiKey={apiKey} />}
      </DialogContent>
    </Dialog>
  );
};

export default memo(CreateApiKey);
