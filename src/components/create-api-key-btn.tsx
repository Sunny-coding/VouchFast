import { memo } from 'react';

import { Plus } from 'lucide-react';

import { cn } from '@/lib/utils';

import ApiKeyForm from '@/components/forms/api-key';

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
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={cn('flex gap-3 rounded', className)}>
          <Plus /> Create API Key
        </Button>
      </DialogTrigger>

      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Add API Key</DialogTitle>
        </DialogHeader>

        <ApiKeyForm />
      </DialogContent>
    </Dialog>
  );
};

export default memo(CreateApiKey);
