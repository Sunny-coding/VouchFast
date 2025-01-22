import { getTestimonialsFromList } from '@/server/db/user';

import TestimonialCard from '@/components/cards/testimonial';
import ListHeader from '@/components/list-header';

interface ListPageProps {
  params: {
    listId: string;
  };
}

const ListPage = async ({ params: { listId } }: ListPageProps) => {
  const testimonials = await getTestimonialsFromList(listId);

  return (
    <>
      <ListHeader listId={listId} />

      <div className='mt-8 grid gap-6'>
        {testimonials.map(testimonial => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>

      {testimonials.length === 0 && <p>No testimonials found!</p>}
    </>
  );
};

export default ListPage;
