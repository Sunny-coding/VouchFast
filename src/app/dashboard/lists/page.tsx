import OverviewCard from '@/components/cards/overview-card';
import Heading from '@/components/DashboardHeading';
import { auth } from '@/lib/session';
import { getUserLists } from '@/server/db/user';

const InvitePage = async () => {
  const session = await auth();
  const user = session?.user!;

  const userLists = await getUserLists(user.id!);

  return (
    <main className=''>
      <Heading text='Lists' />

      <div className='mt-8 grid grid-cols-3'>
        {userLists.map(list => (
          <OverviewCard
            key={list.id}
            title={list.name}
            link={`/dashboard/lists/${list.id}`}
          >
            Items: {(list.testimonials && list.testimonials.length) || 0}
          </OverviewCard>
        ))}
      </div>
    </main>
  );
};

export default InvitePage;
