'use server';

import { signIn } from '@/auth';

const GithubSignin = async () => {
  await signIn('github', { redirectTo: '/dashboard' });
};

export default GithubSignin;
