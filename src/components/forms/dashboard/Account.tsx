import updateProfile from '@/actions/updateProfile';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import type { Session } from 'next-auth';

interface AccountProps {
  session: Session;
}

export const Account = ({ session }: AccountProps) => {
  return (
    <form action={updateProfile}>
      <Card className='mt-5 w-full border-none bg-background shadow-none'>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
        </CardHeader>

        <CardContent className='mt-5'>
          <div className='grid w-full items-center gap-4'>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='Name'>Name</Label>
              <Input
                type='name'
                name='name'
                placeholder={session.user?.name || 'Name'}
                defaultValue={session.user?.name || ''}
                className='mt-2 rounded'
              />
            </div>

            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='Name'>Email</Label>
              <Input
                type='email'
                name='email'
                placeholder={session.user?.email || 'Email'}
                defaultValue={session.user?.email || ''}
                className='mt-2 rounded'
              />
            </div>
            <Button
              type='submit'
              className='ml-auto mt-5 w-min rounded text-sm'
              variant='secondary'
            >
              Update Profile
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  );
};

export default Account;
