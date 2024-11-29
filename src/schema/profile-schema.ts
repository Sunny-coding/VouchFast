import { z } from 'zod';

export const profileSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
});

export type ProfileType = z.infer<typeof profileSchema>;
