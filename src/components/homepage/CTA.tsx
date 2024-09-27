import React from 'react';

import { grotesque } from '../font/grotesque';
import { Button } from '../ui/button';

import { cn } from '@/lib/utils';

const CTA = () => {
  return (
    <div className='layout'>
      <div className='flex w-full flex-col justify-between rounded-2xl bg-primary px-8 py-5 lg:flex-row lg:items-center lg:px-16 lg:py-12'>
        <div>
          <h1
            className={cn(
              'text-3xl font-black text-black lg:text-6xl',
              grotesque.className,
            )}
          >
            Ready to get started?
          </h1>
          <p className='mt-6 w-full font-bold text-gray-800 lg:max-w-2xl lg:text-xl'>
            Get the praise you deserve <br />
            Because bragging just got easier!
          </p>
        </div>

        <Button className='mt-5 bg-black px-10 py-3 text-white hover:scale-105 hover:bg-black lg:mt-0'>
          Get Started &rarr;
        </Button>
      </div>
    </div>
  );
};

export default CTA;
