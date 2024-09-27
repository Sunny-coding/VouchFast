import githubSignin from '@/actions/signinGithub';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import Link from 'next/link';
import { FaGithub, FaGoogle } from 'react-icons/fa';

function Form() {
  return (
    <div className='grid w-full items-center gap-1.5 rounded-lg border p-10'>
      <h1 className='mb-7 text-5xl font-black'>Signup</h1>

      <form action={githubSignin} className='w-full'>
        <Button
          className='w-full gap-3 text-lg font-medium'
          variant='secondary'
        >
          <FaGithub className='text-2xl' />
          <span className='text-gray-200'>Sign up with Github</span>
        </Button>
      </form>

      <Button
        className='mt-2 gap-3 text-lg font-medium'
        variant='secondary'
      >
        <FaGoogle className='text-2xl' />
        <span className='text-gray-200'>Sign up with Google</span>
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

      <div className='mt-5 text-xs'>
        By registering you agree to our{' '}
        <span className='underline'>Terms of Service</span> and{' '}
        <span className='underline'>Privacy Policy</span>
      </div>

      <Button type='submit' className='mt-2'>
        Signup
      </Button>

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
