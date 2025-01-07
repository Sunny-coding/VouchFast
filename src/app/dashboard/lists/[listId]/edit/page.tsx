import { notFound } from 'next/navigation';

import EditListForm from './form';

import { getList } from '@/server/db/user';

interface IProps {
  params: {
    listId: string;
  };
}

const EditList = async ({ params: { listId } }: IProps) => {
  const list = await getList(listId);

  if (!list) return notFound();

  return (
    <div className='min-h-screen bg-background p-4 text-foreground'>
      <EditListForm list={list} />
    </div>
  );
};

export default EditList;
