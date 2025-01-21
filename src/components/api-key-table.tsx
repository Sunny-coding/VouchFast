import { ApiKey } from '@prisma/client';

import { formatDate } from '@/lib/utils';

import ApiKeyDropdown from '@/components/api-key-dropdown';
import CopyButton from '@/components/copy-btn';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface IProps {
  apiKeys: ApiKey[];
  className?: string;
}

const ApiKeyTable = ({ apiKeys, className }: IProps) => {
  return (
    <Table className={className}>
      <TableHeader>
        <TableRow>
          <TableHead className='sm:min-w-[100px]'>Name</TableHead>
          <TableHead>Token</TableHead>
          <TableHead>Created At</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {apiKeys.map(apiKey => (
          <TableRow key={apiKey.id}>
            <TableCell>{apiKey.name}</TableCell>

            <TableCell className='flex items-center'>
              {apiKey.key}
              <CopyButton text={apiKey.key} className='ml-2' />
            </TableCell>

            <TableCell>{formatDate(apiKey.createdAt)}</TableCell>

            <TableCell>
              <ApiKeyDropdown apiKey={apiKey} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ApiKeyTable;
