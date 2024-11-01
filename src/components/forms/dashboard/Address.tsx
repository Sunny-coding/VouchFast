import updateAddress from '@/actions/updateAddress';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import type { User } from 'next-auth';

interface AddressProps {
  user: User;
}

const Address = ({ user }: AddressProps) => {
  return (
    <Card className='mt-5 w-full border-none bg-background'>
      <CardHeader>
        <CardTitle>Address</CardTitle>
      </CardHeader>

      <CardContent className='mt-5'>
        <form action={updateAddress}>
          <div className='grid w-full items-center gap-4'>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='country'>Country</Label>
              <Input
                type='text'
                name='country'
                placeholder='Ohio'
                defaultValue={''}
                className='mt-2 rounded'
              />
            </div>

            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='city'>City/State</Label>
              <Input
                type='text'
                name='city'
                placeholder='Columbus'
                className='mt-2 rounded'
              />
            </div>

            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='postalcode'>Postal Code</Label>
              <Input
                type='text'
                name='postalcode'
                placeholder='43201'
                className='mt-2 rounded'
              />
            </div>
            <Button
              type='submit'
              className='ml-auto mt-5 w-min rounded text-sm'
              variant='secondary'
            >
              Update Address
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default Address;
