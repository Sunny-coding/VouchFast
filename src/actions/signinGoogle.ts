'use server';

import { signIn } from '@/auth';

const GoogleSignin = async () => {
  await signIn('google', { redirectTo: '/dashboard' });
};

export default GoogleSignin;
