import { grotesque } from './font/grotesque';

import { cn } from '@/lib/utils';

import type { Session } from 'next-auth';

interface PendingTestimonialsProps {
  session: Session;
}

const PendingTestimonials = ({ session }: PendingTestimonialsProps) => {
  return (
    <div className='mt-2 grid min-h-64 place-content-center rounded-sm border-2 border-dashed border-ring bg-accent'>
      <h4 className={cn('text-xl text-gray-200', grotesque.className)}>
        No Pending Testimonials
      </h4>
    </div>
  );
};

export default PendingTestimonials;
