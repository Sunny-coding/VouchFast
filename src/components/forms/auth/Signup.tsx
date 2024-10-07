import Oauth from './Oauth';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import Link from 'next/link';

function Form() {
  return (
    <div className='grid w-full items-center gap-1.5 rounded-lg border p-10'>
      <h2 className='mb-7 text-5xl font-black'>Signup</h2>

      <Oauth type='signup' />

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

      <div className='mt-5 text-xs'>
        By registering you agree to our{' '}
        <span className='underline'>Terms of Service</span> and{' '}
        <span className='underline'>Privacy Policy</span>
      </div>

      <Button className='mt-2'>Signup</Button>

      <section className='mt-2 text-center text-sm font-medium text-gray-400'>
        Have an account?{' '}
        <Link href='/login' className='ml-1 text-primary underline'>
          Login
        </Link>
      </section>
    </div>
  );
}

export default Form;
