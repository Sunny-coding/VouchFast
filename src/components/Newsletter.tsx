import React from 'react';

import { grotesque } from './font/grotesque';

import arrowSvg from '@/assets/curve-arrow-left.svg';
import { cn } from '@/lib/utils';

import Image from 'next/image';

const Newsletter = () => {
  return (
    <div className='layout'>
      <div className='relative rounded-3xl bg-accent px-8 py-12'>
        <h1
          className={cn(
            'text-center text-3xl font-bold lg:text-5xl',
            grotesque.className,
          )}
        >
          Subscribe to the Newsletter
        </h1>

        <h2 className='pb-5 pt-3 text-center font-medium text-gray-400 lg:text-xl'>
          For occassional updates and tech blogs.
        </h2>

        <form className='mx-auto flex h-14 max-w-2xl items-center rounded-full bg-zinc-700 p-2 lg:h-16'>
          <input
            type='email'
            className='hidden h-full w-full rounded-lg bg-transparent pl-5 text-white outline-none lg:block lg:placeholder:text-lg'
            placeholder='Enter your email address'
          />

          <input
            type='email'
            className='h-full w-full rounded-lg bg-transparent pl-5 text-white outline-none lg:hidden lg:placeholder:text-xs'
            placeholder='Email address'
          />

          <button className='hover:bg-primary-500 flex h-full items-center rounded-full bg-white px-10 text-sm font-bold text-black transition duration-200 lg:text-lg'>
            Subscribe
          </button>

          <Image
            src={arrowSvg}
            alt='doodle'
            height={200}
            width={200}
            className='absolute right-32 top-10 hidden lg:block'
          />
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
