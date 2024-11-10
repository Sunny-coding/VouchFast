import { notFound } from 'next/navigation';

import { getList, getTestimonialsFromList } from '@/server/db/user';

import TestimonialCard from '@/components/cards/testimonial';
import DashboardHeading from '@/components/DashboardHeading';

interface ListPageProps {
  params: {
    listId: string;
  };
}

const ListPage = async ({ params: { listId } }: ListPageProps) => {
  const list = await getList(listId);

  if (!list) return notFound();

  const testimonials = await getTestimonialsFromList(listId);

  return (
    <div>
      <DashboardHeading text={list.name} />
      <div className='mt-8 grid gap-6'>
        {testimonials.map(testimonial => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>

      {testimonials.length === 0 && <p>No testimonials found!</p>}
    </div>
  );
};

export default ListPage;
