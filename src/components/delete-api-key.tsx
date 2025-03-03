'use client';

import { Trash2 } from 'lucide-react';

import deleteApiKeyAction from '@/actions/delete-api-key';

import { useToast } from '@/components/hooks/use-toast';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

interface IProps {
  apiKeyId: string;
}

const DeleteApiKey = ({ apiKeyId }: IProps) => {
  const { toast } = useToast();

  const handleDelete = async () => {
    const res = await deleteApiKeyAction(apiKeyId);

    toast({
      title: res.success ? 'Success' : 'Error',
      description: res.message,
      variant: res.success ? 'default' : 'destructive',
    });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant='ghost' className='px-2'>
          <Trash2 size={20} className='cursor-pointer text-destructive' />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>

          <AlertDialogDescription>
            This will permanently delete the API Key.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            className='bg-destructive hover:bg-destructive/80'
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteApiKey;
