import { notFound } from 'next/navigation';

import { getList, getUserFromList } from '@/server/db/user';

import SubmitTestimonialDialog from '@/components/submit-testimonial-dialog';

interface SubmitTestimonialProps {
  params: { listId: string };
}

const SubmitTestimonial = async ({ params: { listId } }: SubmitTestimonialProps) => {
  const list = await getList(listId);
  const user = await getUserFromList(listId);

  if (!list) notFound();

  return (
    <div className='layout grid min-h-screen place-content-center'>
      <div className='mx-auto flex max-w-2xl flex-col items-center justify-center'>
        <h1 className='text-5xl font-bold'>{list.headerTitle}</h1>

        <p className='mt-16 text-xl text-gray-400'>{list.headerDesc}</p>

        <section className='mt-16 w-full max-w-2xl text-nowrap text-start'>
          <h2 className='text-4xl font-bold'>Questions</h2>

          <ul className='mt-8'>
            {list.questions.map((item, index) => (
              <li key={index} className='mt-2 text-xl text-gray-300'>
                <p>— {item}</p>
              </li>
            ))}
          </ul>
        </section>

        <SubmitTestimonialDialog list={list} user={user!} />
      </div>
    </div>
  );
};

export default SubmitTestimonial;
