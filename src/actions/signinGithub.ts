'use server';

import { signIn } from '@/auth';

const githubSignin = async () => {
  await signIn('github');
};

export default githubSignin;
