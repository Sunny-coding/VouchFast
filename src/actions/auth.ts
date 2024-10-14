'use server';

import { signIn } from '@/auth';

type Provider = 'google' | 'github';

export async function authenticateWithProvider(provider: Provider) {
  const result = await signIn(provider, { redirectTo: '/dashboard' });
  return result;
}
