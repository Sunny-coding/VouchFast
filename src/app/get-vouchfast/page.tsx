import { cn } from '@/lib/utils';

import { grotesque } from '@/components/font/grotesque';

import { Button } from '@/components/ui/button';

const GetVouchFast = () => {
  return (
    <div className='layout'>
      <h1
        className={cn('mt-24 text-center text-6xl font-black', grotesque.className)}
      >
        COMING <span className='text-primary'>SOON</span>!
      </h1>

      <p className='mt-2 text-center text-xl'>
        Paid plan is coming very soon. Get notified when we launch!
      </p>

      <div className='mx-auto mt-8 flex items-center justify-center space-x-5'>
        <input
          type='email'
          placeholder='Enter your email'
          className='w-full max-w-md rounded bg-accent px-4 py-2'
        />

        <Button className='text-lg'>Notify Me</Button>
      </div>
    </div>
  );
};

export default GetVouchFast;
