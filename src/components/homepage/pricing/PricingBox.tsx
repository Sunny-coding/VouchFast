import { Check } from 'lucide-react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { grotesque } from '@/components/font/grotesque';

import { Button } from '@/components/ui/button';

import type { PricingBoxProps } from '@/types/pricing-model';

const PricingBox = ({
  heading,
  price,
  originalPrice,
  description,
  features,
  subheading,
  active,
  link,
}: PricingBoxProps) => {
  return (
    <div
      className={cn(
        'flex w-full flex-col rounded-lg bg-accent p-10 shadow-lg',
        active && 'relative border-2 border-primary',
      )}
    >
      <h3 className={cn('text-5xl font-black', grotesque.className)}>{heading}</h3>

      <p className='mt-5 text-gray-300'>{description}</p>

      <div className='mt-7 flex items-center space-x-3 border-b border-zinc-700 pb-5'>
        {originalPrice && (
          <p className='text-xl text-gray-400 line-through'>{originalPrice}</p>
        )}
        <p className={cn('text-5xl font-black', grotesque.className)}>{price}</p>
      </div>

      <div className='flex h-full flex-col justify-between'>
        <ul className='mt-5'>
          {features.map((feature, index) => (
            <li key={index} className='flex items-center'>
              <Check className='text-primary' size={25} />
              <p className='my-1 ml-2 text-lg text-gray-300'>{feature}</p>
            </li>
          ))}
        </ul>

        <Link href={link} className='z-10 mt-10 w-full'>
          <Button className='w-full text-xl'>Get Started</Button>
        </Link>
      </div>

      <p className='mt-2 text-center text-gray-400'>{subheading}</p>

      {active && (
        <>
          <div className='absolute left-1/2 right-0 top-0 w-min -translate-x-1/2 -translate-y-1/2 text-nowrap rounded-full bg-primary px-3 font-medium text-black'>
            Launch offer
          </div>
          <div className='absolute inset-0 h-full w-full rounded-lg bg-primary opacity-10' />
        </>
      )}
    </div>
  );
};

export default PricingBox;
