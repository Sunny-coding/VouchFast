import { z } from 'zod';

export const inviteSchema = z.object({
  name: z.string().min(1, 'Name cannot be blank.'),
  email: z.string().min(1, 'Email cannot be blank.').email(),
  message: z.string().optional(),
});

export type InviteSchemaType = z.infer<typeof inviteSchema>;
