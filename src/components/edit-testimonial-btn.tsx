'use client';

import { useState } from 'react';

import { Edit } from 'lucide-react';

import editTestimonialAction from '@/actions/edit-testimonial';

import { useToast } from '@/components/hooks/use-toast';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface IProps {
  id: string;
  message: string;
}

const EditTestimonialButton = ({ id, message }: IProps) => {
  const [text, setText] = useState(message);
  const { toast } = useToast();

  const updateTestimonial = async (testimonialId: string) => {
    const result = await editTestimonialAction(testimonialId, text);

    toast({
      title: result.success ? '' : 'An error occurred!',
      description: result.message,
      variant: result.success ? 'default' : 'destructive',
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant='secondary'
          size='sm'
          className='text-zinc-400 hover:text-zinc-300'
        >
          <Edit className='mr-2 h-4 w-4' />
          Edit
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Testimonial</DialogTitle>

          <DialogDescription className='flex flex-col'>
            <textarea
              className='mt-4 w-full bg-zinc-950 p-4 text-zinc-100'
              rows={5}
              defaultValue={text}
              onChange={e => setText(e.target.value)}
            />

            <Button
              size='sm'
              className='ml-auto mt-4'
              onClick={() => updateTestimonial(id)}
            >
              Update
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default EditTestimonialButton;
