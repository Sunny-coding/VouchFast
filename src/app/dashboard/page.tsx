import { grotesque } from '@/components/font/grotesque';
import ViewTestimonials from '@/components/ViewTestimonials';
import { auth } from '@/lib/session';
import { cn } from '@/lib/utils';

const DashboardPage = async () => {
  const session = await auth();

  return (
    <main className='min-h-screen'>
      <h2 className={cn('text-4xl font-bold', grotesque.className)}>
        Dashboard
      </h2>

      <ViewTestimonials session={session!} />
    </main>
  );
};

export default DashboardPage;
