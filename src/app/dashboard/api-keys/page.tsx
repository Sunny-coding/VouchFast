import { getApiKeys } from '@/server/db/user';
import { getServerSession } from '@/server/session';

import ApiKeyTable from '@/components/api-key-table';
import CreateApiKey from '@/components/create-api-key-btn';
import DashboardHeading from '@/components/dashboard-heading';

const APIKeys = async () => {
  const session = await getServerSession();

  const apiKeys = await getApiKeys(session?.user.id);
  const hasApiKeys = apiKeys && apiKeys.length > 0;

  return (
    <>
      <div className='flex items-center justify-between'>
        <DashboardHeading text='API Keys' />
        {hasApiKeys && <CreateApiKey />}
      </div>

      {hasApiKeys ? (
        <ApiKeyTable apiKeys={apiKeys} />
      ) : (
        <div className='mt-5'>
          <p>You don&apos;t have any API keys yet.</p>
          <CreateApiKey className='mt-2' />
        </div>
      )}
    </>
  );
};

export default APIKeys;
