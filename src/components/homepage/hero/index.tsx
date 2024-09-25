import Doodles from './Doodles';

import doubleArrow from '@/assets/double-arrow.svg';
import heroSvg from '@/assets/hero.svg';
import { grotesque } from '@/components/font/grotesque';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import Image from 'next/image';
import Link from 'next/link';
import { RoughNotation } from 'react-rough-notation';

const Hero = () => {
  return (
    <div className='relative pb-28'>
      <Doodles />

      <div className='container relative mx-auto px-5 lg:px-0'>
        <Image
          src={heroSvg}
          width={30}
          height={30}
          alt='doodle'
          className='mx-auto mt-16'
        />

        <h2 className='mb-5 text-center text-lg text-gray-400 lg:text-2xl'>
          One-stop platform
        </h2>

        <h1
          className={cn(
            'mx-auto mt-4 max-w-6xl text-center text-5xl font-black lg:mt-6 lg:text-8xl',
            grotesque.className,
          )}
        >
          Your{' '}
          <RoughNotation
            type='highlight'
            iterations={1}
            color='#22c55e'
            show
          >
            <span className='px-2 text-background'>ultimate</span>
          </RoughNotation>{' '}
          Testimonial collecting tool.
        </h1>

        <p className='mx-auto mt-10 max-w-4xl text-center text-lg text-gray-300 lg:text-xl'>
          VouchFast offers everything you need to fetch testimonials from
          your clients.
        </p>

        <Link href='/auth'>
          <Button className='absolute left-1/2 mt-10 -translate-x-1/2 gap-2 rounded-full px-7 py-4 text-2xl'>
            Get Started
            <Image src={doubleArrow} height={20} width={20} alt='doodle' />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
