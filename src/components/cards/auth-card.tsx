import Link from 'next/link';

import EmailAuth from '../mail-auth';

import { cn } from '@/lib/utils';

import Oauth from '@/components/Oauth';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type AuthCardProps = {
  type: 'login' | 'signup';
  className?: string;
};

export default function AuthCard({ type, className }: AuthCardProps) {
  const isLogin = type === 'login';
  const title = isLogin ? 'Login' : 'Signup';
  const buttonText = isLogin ? 'Login' : 'Signup';
  const alternateAuthText = isLogin ? "Don't have an account?" : 'Have an account?';
  const alternateAuthLink = isLogin ? '/auth' : '/login';
  const alternateAuthLinkText = isLogin ? 'Signup' : 'Login';

  return (
    <Card className={cn('w-full max-w-md', className)}>
      <CardHeader>
        <CardTitle className='text-center text-5xl font-black'>{title}</CardTitle>
      </CardHeader>

      <CardContent className='space-y-6'>
        <Oauth type={type} />

        <div className='flex items-center gap-4'>
          <hr className='flex-grow' />
          <span className='text-sm text-muted-foreground'>OR</span>
          <hr className='flex-grow' />
        </div>

        <EmailAuth buttonText={buttonText} />

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
