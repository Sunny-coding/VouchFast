import { grotesque } from './font/grotesque';
import { Button } from './ui/button';

import { cn } from '@/lib/utils';

import Link from 'next/link';

import type { Session } from 'next-auth';

interface ViewTestimonialsProps {
  session: Session;
}

const ViewTestimonials = ({ session }: ViewTestimonialsProps) => {
  return (
    <div className='mt-2 grid min-h-64 place-content-center rounded-sm border-2 border-dashed border-ring bg-accent'>
      <h4 className={cn('text-xl text-gray-200', grotesque.className)}>
        No testimonials yet?
      </h4>

      <Link href='/dashboard/create-invite' className='mx-auto mt-1'>
        <Button
          className='mx-auto mt-1 w-min rounded border-2 border-black bg-black hover:bg-zinc-900'
          size='sm'
          variant='secondary'
        >
          Invite
        </Button>
      </Link>
    </div>
  );
};

export default ViewTestimonials;
