'use client';

import { useState } from 'react';

import { CgSpinnerTwo } from 'react-icons/cg';
import { FaGithub, FaGoogle } from 'react-icons/fa';

import { authenticateWithProvider } from '@/actions/auth';

import { cn } from '@/lib/utils';

import { useToast } from '@/components/hooks/use-toast';

import { Button } from '@/components/ui/button';

interface OauthProps {
  type: 'signup' | 'login';
  className?: string;
  btnClassName?: string;
}

const Oauth = ({ type, className, btnClassName }: OauthProps) => {
  const [isLoading, setIsLoading] = useState<{ [key: string]: boolean }>({
    google: false,
    github: false,
  });
  const { toast } = useToast();
  const loginType = type === 'login' ? 'Login' : 'Sign up';

  const handleOAuthSignIn = async (provider: 'google' | 'github') => {
    setIsLoading(prev => ({ ...prev, [provider]: true }));
    try {
      await authenticateWithProvider(provider);
    } catch (error) {
      toast({
        title: 'An error occurred',
        description: `Failed to ${loginType.toLowerCase()} with ${provider}`,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(prev => ({ ...prev, [provider]: false }));
    }
  };

  return (
    <div className={cn('flex flex-col space-y-2', className)}>
      <Button
        className={cn('w-full gap-3 text-lg font-bold', btnClassName)}
        variant='secondary'
        onClick={() => handleOAuthSignIn('github')}
        disabled={isLoading.github}
      >
        {isLoading.github ? (
          <CgSpinnerTwo className='animate-spin text-2xl' />
        ) : (
          <FaGithub className='text-2xl' />
        )}
        <span>{loginType} with Github</span>
      </Button>

      <Button
        className={cn('w-full gap-3 text-lg font-bold text-black', btnClassName)}
        variant='secondary'
        onClick={() => handleOAuthSignIn('google')}
        disabled={isLoading.google}
      >
        {isLoading.google ? (
          <CgSpinnerTwo className='animate-spin text-2xl' />
        ) : (
          <FaGoogle className='text-2xl' />
        )}
        <span>{loginType} with Google</span>
      </Button>
    </div>
  );
};

export default Oauth;
