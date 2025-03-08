import { FaXTwitter } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';

import { siteConfig } from '@/config/config';

import { cn } from '@/lib/utils';

import { grotesque } from '@/components/font/grotesque';

import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <main className='layout flex flex-col-reverse lg:mt-16 lg:flex-row'>
      <div className='w-full lg:w-1/2'>
        <h1 className={cn('text-4xl font-black', grotesque.className)}>
          Chat With Us
        </h1>

        <ul className='mt-6 space-y-2 text-xl'>
          <li className='flex items-center'>
            <FaXTwitter />
            <a
              href={siteConfig.twitter}
              target='_blank'
              rel='noopener noreferrer'
              className='ml-4'
            >
              Message on X
            </a>
          </li>
          <li className='flex items-center'>
            <MdOutlineEmail />
            <a href={`mailto:${siteConfig.email}`} className='ml-4'>
              {siteConfig.email}
            </a>
          </li>
        </ul>
      </div>

      <div className='w-full lg:w-1/2'>
        <form className='grid gap-8 rounded-2xl bg-primary p-16 text-black'>
          <div>
            <h1
              className={cn('text-5xl font-black lg:text-7xl', grotesque.className)}
            >
              Contact Us
            </h1>
            <p className='mt-5 font-medium lg:text-2xl'>
              Fill out the form below to get in touch with us.
            </p>
          </div>

          <div className='mt-8 w-full'>
            <input
              type='text'
              placeholder='Your Name'
              className='w-full bg-transparent placeholder:text-black focus:outline-none'
            />

            <hr className='mt-2 border-t-2 border-black' />
          </div>

          <div>
            <input
              type='email'
              placeholder='Your Email'
              className='w-full bg-transparent placeholder:text-black focus:outline-none'
            />

            <hr className='mt-2 border-t-2 border-black' />
          </div>

          <div>
            <textarea
              rows={1}
              placeholder='Your Message'
              className='w-full bg-transparent placeholder:text-black focus:outline-none'
            />

            <hr className='border-t-2 border-black' />
          </div>

          <Button className='mt-5 bg-black text-xl text-white shadow-2xl hover:bg-zinc-900'>
            Send
          </Button>
        </form>
      </div>
    </main>
  );
};

export default Contact;
