'use client';

import { Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

import deleteListAction from '@/actions/delete-list';

import { useToast } from '@/components/hooks/use-toast';

import {
  AlertDialog,
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
  id: string;
}

const DeleteList = ({ id }: IProps) => {
  const { toast } = useToast();
  const router = useRouter();

  const deleteList = async (testimonialId: string) => {
    const result = await deleteListAction(testimonialId);

    toast({
      title: result.success ? '' : 'An error occurred!',
      description: result.message,
      variant: result.success ? 'default' : 'destructive',
    });

    result.success && router.push('/dashboard/lists');
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant='outline'
          className='text-destructive hover:bg-destructive hover:text-zinc-200'
          size='sm'
        >
          <Trash2 className='mr-2 h-4 w-4' />
          Delete List
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>

          <AlertDialogDescription>
            This action *<span className='font-bold'>cannot</span>* be undone. This
            will permanently delete the List and corresponding testimonials from our
            database.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>

          <Button size='sm' variant='destructive' onClick={() => deleteList(id)}>
            Delete
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteList;
