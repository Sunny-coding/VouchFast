import { z } from 'zod';

export const testimonialSchema = z.object({
  message: z
    .string()
    .min(1, 'Message is required')
    .max(500, 'Message is too long'),
  name: z.string().min(1, 'Name is required'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email address'),
  rating: z.string().optional(),
});

export type TestimonialInputType = z.infer<typeof testimonialSchema>;
