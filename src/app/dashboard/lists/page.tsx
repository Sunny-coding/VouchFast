import OverviewCard from '@/components/cards/overview-card';
import Heading from '@/components/DashboardHeading';
import { getUserLists } from '@/lib/db';
import { auth } from '@/lib/session';

const InvitePage = async () => {
  const session = await auth();
  const user = session?.user!;

  const userLists = await getUserLists(user.id!);

  return (
    <main className=''>
      <Heading text='Lists' />

      <div className='mt-8 grid grid-cols-3'>
        <OverviewCard title='Testimonials'>Items: 0</OverviewCard>
        {userLists.map(list => (
          <OverviewCard
            key={list.id}
            title={list.name}
            link={`/dashboard/lists/${list.id}`}
          />
        ))}
      </div>
    </main>
  );
};

export default InvitePage;
