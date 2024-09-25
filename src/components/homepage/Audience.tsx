import { grotesque } from '../font/grotesque';

import { cn } from '@/lib/utils';

import { MdAddBusiness } from 'react-icons/md';
import { RiLightbulbFlashLine } from 'react-icons/ri';
import { SiFreelancer } from 'react-icons/si';

import type { IconType } from 'react-icons';

interface BoxProps {
  heading: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: IconType;
}

const Box = ({ heading, description, Icon }: BoxProps) => {
  return (
    <div className='rounded-2xl bg-accent p-10 transition duration-200 hover:rotate-1 lg:hover:scale-105'>
      <Icon size={50} className='text-primary' />
      <h2
        className={cn(
          'mt-5 text-2xl font-black lg:mt-10 lg:text-3xl',
          grotesque.className,
        )}
      >
        {heading}
      </h2>
      <p className='mt-2 text-lg font-medium text-zinc-400 lg:mt-5'>
        {description}
      </p>
    </div>
  );
};

const uses = [
  {
    heading: 'Freelancers',
    description: 'Collect more testimonials to make more money 💰',
    Icon: SiFreelancer,
  },
  {
    heading: 'Agencies',
    description:
      'Streamline testimonial collection and approval across teams.',
    Icon: MdAddBusiness,
  },
  {
    heading: 'SaaS Founders',
    description:
      'Automate gathering customer feedback and build trust with potential users.',
    Icon: RiLightbulbFlashLine,
  },
];

const Audience = () => {
  return (
    <div className='container mx-auto w-full px-5 pb-16 pt-24 lg:px-0'>
      <h1
        className={cn(
          'my-16 text-center text-4xl font-bold lg:text-9xl',
          grotesque.className,
        )}
      >
        Who is VouchFast for?
      </h1>

      <section className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
        {uses.map(use => {
          return <Box key={use.heading} {...use} />;
        })}
      </section>
    </div>
  );
};

export default Audience;
