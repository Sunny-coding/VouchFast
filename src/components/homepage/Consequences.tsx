import { Fragment } from 'react';

import { grotesque } from '../font/grotesque';

import invertArrowSvg from '@/assets/arrow-invert.svg';
import arrowSvg from '@/assets/arrow.svg';
import { cn } from '@/lib/utils';

import Image from 'next/image';
import { RoughNotation } from 'react-rough-notation';

const TestimonialStep = ({
  emoji,
  text,
}: {
  emoji: string;
  text: string;
}) => {
  return (
    <section className='w-full max-w-80'>
      <span className='text-3xl lg:text-5xl'>{emoji}</span>
      <p className='mt-2 text-gray-400 lg:mt-5 lg:text-xl'>{text}</p>
    </section>
  );
};

const Consequences = () => {
  const steps = [
    { emoji: '🧑✍️', text: 'Endless testimonials' },
    { emoji: '🔄', text: 'Approval loops' },
    { emoji: '📉', text: 'Brand image weakens' },
    { emoji: '😕', text: 'Reputation fades' },
  ];

  return (
    <div className='layout my-36 text-center'>
      <h1
        className={cn(
          'mx-auto max-w-5xl text-4xl font-bold lg:text-6xl',
          grotesque.className,
        )}
      >
        This can happen to{' '}
        <RoughNotation type='circle' show>
          <span className='p-2 text-red-600'>You</span>
        </RoughNotation>{' '}
        right now!
      </h1>

      <p className='mt-7 font-medium text-gray-400 md:text-xl lg:mt-10'>
        80% of potential clients need social proof to trust your business.
      </p>

      <div className='mx-auto mt-16 flex max-w-5xl flex-col items-center justify-between gap-5 md:flex-row lg:mt-24'>
        {steps.map((step, index) => (
          <Fragment key={step.text}>
            <TestimonialStep emoji={step.emoji} text={step.text} />
            {index % 2 === 0 && index !== steps.length - 1 ? (
              <Image
                src={arrowSvg}
                width={50}
                height={50}
                alt=''
                className='md:my-0 md:h-16 md:w-16 md:-rotate-90'
              />
            ) : index % 2 !== 0 && index !== steps.length - 1 ? (
              <Image
                src={invertArrowSvg}
                width={50}
                height={50}
                alt=''
                className='md:my-0 md:h-16 md:w-16 md:-rotate-90'
              />
            ) : null}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Consequences;
