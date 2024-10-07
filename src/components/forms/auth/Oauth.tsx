import githubSignin from '@/actions/signinGithub';
import googleSignin from '@/actions/signinGoogle';
import { Button } from '@/components/ui/button';

import { FaGithub, FaGoogle } from 'react-icons/fa';

interface OauthProps {
  type: 'signup' | 'login';
}

const Oauth = ({ type }: OauthProps) => {
  const text = type === 'signup' ? 'Sign up' : 'Login';

  return (
    <>
      <form action={githubSignin} className='w-full'>
        <Button
          className='w-full gap-3 text-lg font-medium'
          variant='secondary'
        >
          <FaGithub className='text-2xl' />
          <span className='text-gray-200'>{text} with Github</span>
        </Button>
      </form>

      <form action={googleSignin} className='w-full'>
        <Button
          className='mt-2 w-full gap-3 text-lg font-medium'
          variant='secondary'
        >
          <FaGoogle className='text-2xl' />
          <span className='text-gray-200'>{text} with Google</span>
        </Button>
      </form>
    </>
  );
};

export default Oauth;
