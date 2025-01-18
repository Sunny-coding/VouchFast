import { Plan } from '@prisma/client';
import Link from 'next/link';

import { getUserId, getUserPlanFromUserId } from '@/server/session';

import Heading from '@/components/dashboard-heading';

import { Button } from '@/components/ui/button';

const getUserPlan = async (): Promise<Plan> => {
  const userId = await getUserId();
  return userId ? await getUserPlanFromUserId(userId) : 'FREE';
};

interface PlanInfoProps {
  plan: Plan;
}

const FreePlanInfo = () => {
  return (
    <>
      <p>
        You are currently on the{' '}
        <span className='font-bold text-primary'>&apos;FREE&apos;</span> plan which
        supports up to <span className='underline'>3</span> testimonials and{' '}
        <span className='underline'>limited</span> features.
      </p>

      <Link href='/pricing'>
        <Button className='mt-4'>Upgrade Plan</Button>
      </Link>
    </>
  );
};

const PaidPlanInfo = () => {
  return (
    <div className='text-lg'>
      <p>
        You are currently on the{' '}
        <span className='font-bold text-primary'>&apos;PAID&apos;</span> plan which
        supports up to <span className='underline'>unlimited</span> testimonials.
      </p>

      <div className='mt-8 space-y-2'>
        <div className='flex gap-2'>
          <h3>Amount Paid:</h3>
          <p className='font-bold'>Full</p>
        </div>
        <div className='flex gap-2'>
          <h3>Valid Till:</h3>
          <p className='font-bold'>Forever</p>
        </div>
      </div>
    </div>
  );
};

const PlanInfo = ({ plan }: PlanInfoProps) => {
  return plan === 'FREE' ? <FreePlanInfo /> : <PaidPlanInfo />;
};

export default async function Billing() {
  const plan = await getUserPlan();

  return (
    <>
      <Heading text='Billing' />
      <section className='mt-8'>
        <PlanInfo plan={plan} />
      </section>
    </>
  );
}
