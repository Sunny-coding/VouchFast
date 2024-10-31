import React from 'react';

import { getList } from '@/server/db/user';

interface ListPageProps {
  params: {
    listId: string;
  };
}

const ListPage = async ({ params: { listId } }: ListPageProps) => {
  const list = await getList(listId);

  return <div>{JSON.stringify(list)}</div>;
};

export default ListPage;
