import { redirect } from 'next/navigation';

import { getApiKeys } from '@/server/db/user';
import { getServerSession } from '@/server/session';

import CreateApiKey from '@/components/create-api-key-btn';
import DashboardHeading from '@/components/DashboardHeading';

import type { User } from '@prisma/client';

const APIKeys = async () => {
  const session = await getServerSession();
  if (!session) redirect('/login');

  const user: User = session.user;

  const apiKeys = await getApiKeys(user.id);

  const noApiKeys = !apiKeys || apiKeys.length === 0;

  return (
    <>
      <div className='flex items-center justify-between'>
        <DashboardHeading text='API Keys' />
        {!noApiKeys && <CreateApiKey />}
      </div>

      {!noApiKeys && (
        <div className=''>
          You don&apos;t have any API keys yet.
          <CreateApiKey />
        </div>
      )}
    </>
  );
};

export default APIKeys;
