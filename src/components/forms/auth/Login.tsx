import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import Link from 'next/link';
import { FaGithub, FaGoogle } from 'react-icons/fa';

function Form() {
  return (
    <form className='grid w-full items-center gap-1.5 rounded-lg border p-10'>
      <h1 className='mb-7 text-5xl font-black'>Login</h1>

      <Button className='gap-3 text-lg font-medium' variant='secondary'>
        <FaGithub className='text-2xl' />
        <span className='text-gray-200'>Login with Github</span>
      </Button>

      <Button
        className='mt-2 gap-3 text-lg font-medium'
        variant='secondary'
      >
        <FaGoogle className='text-2xl' />
        <span className='text-gray-200'>Login with Google</span>
      </Button>

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

      <div className='mt-2'>
        <Label htmlFor='password'>Password</Label>
        <Input
          type='password'
          id='password'
          placeholder='Password'
          className='mt-2 rounded'
        />
      </div>

      <Button type='submit' className='mt-7'>
        Login
      </Button>

      <section className='mt-2 text-center text-sm font-medium text-gray-400'>
        Don't Have an account?{' '}
        <Link href='/auth' className='ml-1 text-primary underline'>
          Signup
        </Link>
      </section>

      <section className='text-center text-sm font-medium text-gray-400'>
        Forgot Password?{' '}
        <Link href='/forgot-password' className='ml-1 text-red-600'>
          Reset
        </Link>
      </section>
    </form>
  );
}

export default Form;
