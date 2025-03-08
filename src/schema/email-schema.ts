import { z } from 'zod';

export const authSchema = z.object({
  email: z.string().email('Invalid email address'),
});

export type AuthSchema = z.infer<typeof authSchema>;
