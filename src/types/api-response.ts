import type { User } from '@prisma/client';

export type VerifyApiKeyResponse = {
  success: boolean;
  error?: string;
  status: number;
  user?: User;
};
