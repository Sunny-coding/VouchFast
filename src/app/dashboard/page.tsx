import Heading from '@/components/DashboardHeading';
import { grotesque } from '@/components/font/grotesque';
import PendingTestimonials from '@/components/PendingTestimonials';
import ViewTestimonials from '@/components/ViewTestimonials';
import { auth } from '@/lib/session';
import { cn } from '@/lib/utils';

const DashboardPage = async () => {
  const session = await auth();

  return (
    <main className='min-h-screen space-y-16'>
      <div className='space-y-3'>
        <Heading text='Dashboard' />

        <ViewTestimonials session={session!} />
      </div>

      <div className='space-y-3'>
        <h2 className={cn('text-4xl font-bold', grotesque.className)}>
          Pending Testimonials
        </h2>
        <PendingTestimonials session={session!} />
      </div>
    </main>
  );
};

export default DashboardPage;
