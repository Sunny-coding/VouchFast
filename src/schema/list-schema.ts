import { z } from 'zod';

export const defaultQuestions = [
  'How was your experience?',
  'What did you like most?',
  'How can we improve?',
  'Would you recommend us?',
  'Any additional comments?',
];

export const listSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  headerTitle: z.string().min(1, 'Title is required'),
  headerDesc: z.string().min(1, 'Message is required'),
  questions: z
    .string()
    .array()
    .min(1, 'At least one question is required')
    .max(5, 'Maximum 5 questions allowed'),
});

export type ListFormType = z.infer<typeof listSchema>;
