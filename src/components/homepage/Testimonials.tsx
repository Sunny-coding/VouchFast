'use client';

import { grotesque } from '../font/grotesque';

import { cn } from '@/lib/utils';

import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';

const testimonials = [
  {
    quote:
      'Using this platform made collecting client feedback effortless. My clients appreciated how simple the process was, and it’s made a real difference in securing new projects.',
    name: 'Sarah Williams',
    title: 'Freelance Graphic Designer',
  },
  {
    quote:
      "Our agency used to spend hours manually collecting testimonials. With this app, it's all automated, and we can display them on our site in just a few clicks.",
    name: 'James Thompson',
    title: 'Managing Director, Creative Solutions Agency',
  },
  {
    quote:
      "This platform has streamlined our testimonial process. It's not just a time-saver, but it adds a level of professionalism to our client feedback collection.",
    name: 'Megan Brown',
    title: 'Marketing Manager, Tech Innovators',
  },
  {
    quote:
      'As a solo developer, this tool has been invaluable. The ability to showcase verified client testimonials on my profile has boosted my reputation significantly.',
    name: 'Alex Murphy',
    title: 'Freelance Software Developer',
  },
  {
    quote:
      "We've seen a noticeable improvement in client trust after integrating testimonials collected through this platform into our product pages. It's a game changer!",
    name: 'Linda Nguyen',
    title: 'Co-Founder, SaaS Company',
  },
  {
    quote:
      'Gathering client feedback used to be a hassle, but this platform has simplified everything. The API integration also made embedding testimonials into our site seamless.',
    name: 'Chris Evans',
    title: 'Head of Product, WebAppify',
  },
  {
    quote:
      "I was struggling to collect client testimonials consistently, but with this tool, it's all automated. Plus, having them displayed on my profile looks super professional!",
    name: 'Jessica Lee',
    title: 'Freelance UX Designer',
  },
  {
    quote:
      "Our team uses this app to manage feedback from dozens of clients. It's easy to use and helps us maintain credibility with potential customers.",
    name: 'Robert Taylor',
    title: 'CEO, Digital Marketing Agency',
  },
  {
    quote:
      'This platform has become an essential part of our sales strategy. Testimonials collected through it have directly contributed to closing new deals.',
    name: 'Olivia Martinez',
    title: 'Business Development Manager, SoftLabs',
  },
  {
    quote:
      'I love how easy it is to invite clients for feedback. The testimonial dashboard is intuitive, and the results are immediate.',
    name: 'Daniel Harris',
    title: 'Freelance Mobile App Developer',
  },
];

const InfiniteMovingCardsDemo = () => {
  return (
    <div className='relative flex flex-col items-center justify-center overflow-hidden rounded-md py-36 antialiased'>
      <div className='px-5 py-16'>
        <h1
          className={cn(
            'text-center text-3xl font-bold md:text-4xl lg:text-6xl',
            grotesque.className,
          )}
        >
          Trusted by customers all over the world
        </h1>
      </div>

      <InfiniteMovingCards items={testimonials} direction='right' speed='slow' />

      <InfiniteMovingCards items={testimonials} direction='left' speed='slow' />
    </div>
  );
};

export default InfiniteMovingCardsDemo;
