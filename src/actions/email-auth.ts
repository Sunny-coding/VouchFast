'use server';

import { signIn } from '@/auth';

import { authSchema } from '@/schema/email-schema';

const emailAuthAction = async (email: string) => {
  const isValid = authSchema.safeParse({ email });

  if (!isValid.success) {
    return { success: false, message: 'Invalid email address' };
  }

  const result = await signIn('resend', {
    email: isValid.data.email,
    redirectTo: '/dashboard',
  });

  return result;
};

export default emailAuthAction;
