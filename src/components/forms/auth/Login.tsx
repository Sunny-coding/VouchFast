import Oauth from './Oauth';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import Link from 'next/link';

function Form() {
  return (
    <div className='grid w-full items-center gap-1.5 rounded-lg border p-10'>
      <h2 className='mb-7 text-5xl font-black'>Login</h2>

      <Oauth type='login' />

      <div className='mt-5 flex w-full items-center gap-5'>
        <hr className='w-full' />
        <span className='text-gray-400'>OR</span>
        <hr className='w-full' />
      </div>

      <div className='mt-7'>
        <Label htmlFor='email'>Email</Label>
        <Input
          type='email'
          id='email'
          placeholder='Email Address'
          className='mt-2 rounded'
        />
      </div>

      <Button className='mt-7'>Login</Button>

      <section className='mt-2 text-center text-sm font-medium text-gray-400'>
        Don't Have an account?{' '}
        <Link href='/auth' className='ml-1 text-white underline'>
          Signup
        </Link>
      </section>
    </div>
  );
}

export default Form;
