import PricingBox from './PricingBox';
import pricingModel from './pricingModel';

import { grotesque } from '@/components/font/grotesque';
import { cn } from '@/lib/utils';

const Pricing = () => {
  return (
    <div className='container mx-auto mb-24 px-5 lg:my-36 lg:px-0'>
      <h1
        className={cn(
          'text-center text-7xl font-black md:text-9xl',
          grotesque.className,
        )}
      >
        Pricing
      </h1>
      <p className='mt-3 text-center text-sm font-medium text-gray-400 md:text-xl'>
        Whether you are a freelancer, or an agency owner or a Founder,
        <br className='hidden sm:block' /> we have your back.
      </p>

      <section className='mt-16 flex flex-col justify-between gap-8 md:flex-row lg:gap-10 lg:px-16'>
        {pricingModel.map((pricing, index) => (
          <PricingBox key={index} {...pricing} />
        ))}
      </section>
    </div>
  );
};

export default Pricing;
