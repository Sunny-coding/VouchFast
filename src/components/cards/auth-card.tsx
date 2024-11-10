import Link from 'next/link';

import Oauth from '@/components/Oauth';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type AuthCardProps = {
  type: 'login' | 'signup';
};

export default function AuthCard({ type }: AuthCardProps) {
  const isLogin = type === 'login';
  const title = isLogin ? 'Login' : 'Signup';
  const buttonText = isLogin ? 'Login' : 'Signup';
  const alternateAuthText = isLogin ? "Don't have an account?" : 'Have an account?';
  const alternateAuthLink = isLogin ? '/auth' : '/login';
  const alternateAuthLinkText = isLogin ? 'Signup' : 'Login';

  return (
    <Card className='w-full max-w-md'>
      <CardHeader>
        <CardTitle className='text-5xl font-black'>{title}</CardTitle>
      </CardHeader>

      <CardContent className='space-y-6'>
        <Oauth type={type} />

        <div className='flex items-center gap-4'>
          <hr className='flex-grow' />
          <span className='text-sm text-muted-foreground'>OR</span>
          <hr className='flex-grow' />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='email'>Email</Label>
          <Input type='email' id='email' placeholder='Email Address' />
        </div>

        {!isLogin && (
          <p className='text-xs text-muted-foreground'>
            By registering you agree to our{' '}
            <Link href='#' className='underline hover:text-primary'>
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href='#' className='underline hover:text-primary'>
              Privacy Policy
            </Link>
          </p>
        )}

        <Button className='w-full'>{buttonText}</Button>
      </CardContent>

      <CardFooter className='justify-center'>
        <p className='text-sm text-muted-foreground'>
          {alternateAuthText}{' '}
          <Link href={alternateAuthLink} className='ml-1 font-medium text-primary'>
            {alternateAuthLinkText}
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
