import { List, User } from '@prisma/client';

import SubmitTestimonialForm from './forms/submit-testimonial';

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
  list: List;
  user: Partial<User>;
}

const SubmitTestimonialDialog = ({ list, user }: IProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='mt-16 w-full max-w-2xl'>
          Write a Testimonial
        </Button>
      </DialogTrigger>
      <DialogContent className=''>
        <DialogHeader>
          <DialogTitle className='text-xl font-semibold'>
            Testimonial to {user.name}
          </DialogTitle>
          <DialogDescription>{list.headerDesc}</DialogDescription>
        </DialogHeader>

        <SubmitTestimonialForm listId={list.id} />
      </DialogContent>
    </Dialog>
  );
};

export default SubmitTestimonialDialog;
