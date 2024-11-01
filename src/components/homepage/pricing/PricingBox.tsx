import { Check } from 'lucide-react';

import { cn } from '@/lib/utils';

import { grotesque } from '@/components/font/grotesque';

import { Button } from '@/components/ui/button';

interface PricingBoxProps {
  heading: string;
  price: string | number;
  originalPrice?: string | number;
  description: string;
  features: string[];
  paymentType: string;
  active?: boolean;
}

const PricingBox = ({
  heading,
  price,
  originalPrice,
  description,
  features,
  paymentType,
  active,
}: PricingBoxProps) => {
  return (
    <div
      className={cn(
        'flex w-full flex-col rounded-lg bg-accent p-10 shadow-lg',
        active ? 'relative border-2 border-primary' : '',
      )}
    >
      <div>
        <h3 className={cn('text-5xl font-black', grotesque.className)}>
          {heading}
        </h3>

        <p className='mt-5 text-gray-300'>{description}</p>
      </div>

      <div className='mt-7 flex items-center space-x-3 border-b border-zinc-700 pb-5'>
        {originalPrice && (
          <p className='text-xl text-gray-400 line-through'>
            {originalPrice}
          </p>
        )}
        <p className={cn('text-5xl font-black', grotesque.className)}>
          {price}
        </p>
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

        <Button className='z-10 mt-10'>Get Started</Button>
      </div>
      <p className='mt-2 text-center text-gray-400'>{paymentType}</p>

      {active && (
        <div className='absolute left-1/2 right-0 top-0 w-min -translate-x-1/2 -translate-y-1/2 text-nowrap rounded-full bg-primary px-3 font-medium text-black'>
          Launch offer
        </div>
      )}

      {active && (
        <div className='absolute inset-0 h-full w-full rounded-lg bg-primary opacity-10' />
      )}
    </div>
  );
};

export default PricingBox;
