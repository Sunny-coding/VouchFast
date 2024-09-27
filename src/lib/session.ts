import { cache } from 'react';

import { auth as nextAuth } from '@/auth';

export const auth = cache(nextAuth);
