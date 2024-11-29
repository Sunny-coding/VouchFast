import { Trash2 } from 'lucide-react';

import deleteTestimonialAction from '@/actions/delete-testimonial';

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

const DeleteTestimonial = ({ id }: IProps) => {
  const { toast } = useToast();

  const deleteTestimonial = async (testimonialId: string) => {
    const result = await deleteTestimonialAction(testimonialId);

    toast({
      title: result.success ? '' : 'An error occurred!',
      description: result.message,
      variant: result.success ? 'default' : 'destructive',
    });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant='ghost' size='icon' className='text-red-600'>
          <Trash2 className='h-5 w-5' />
          <span className='sr-only'>Delete testimonial</span>
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>

          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the
            testimonial from our database.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>

          <Button
            size='sm'
            variant='destructive'
            onClick={() => deleteTestimonial(id)}
          >
            Delete
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteTestimonial;
