import { Ratelimit } from '@upstash/ratelimit';
import { kv } from '@vercel/kv';
import { NextRequest } from 'next/server';

export const RL = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.slidingWindow(100, '60 s'), // 5 requests in 10 seconds
});

export const rateLimit = async (request: NextRequest) => {
  const ipAddress =
    request.headers.get('x-forwarded-host') ||
    request.headers.get('x-real-ip') ||
    request.ip ||
    'unknown';
  const { success } = await RL.limit(ipAddress);

  return success;
};
