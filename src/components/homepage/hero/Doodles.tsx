'use client';

import leafSvg from '@/assets/leaf.svg';
import starSvg from '@/assets/star.svg';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Doodles = () => {
  return (
    <>
      <motion.div
        initial={{ x: -100, y: 100, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5, ease: 'backInOut' }}
        className='absolute -bottom-1/4 left-0 -z-10 h-[150px] w-[150px] lg:bottom-0 lg:h-[300px] lg:w-[300px]'
      >
        <Image
          src={starSvg}
          width={300}
          height={300}
          alt='doodle'
          className='animate-spin-very-slow opacity-20 lg:opacity-30'
        />
      </motion.div>

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1, ease: 'backInOut' }}
        className='absolute -bottom-0 right-5 -z-10 h-[100px] w-[100px] rotate-45 lg:right-20 lg:top-0 lg:h-[180px] lg:w-[180px]'
      >
        <Image
          src={leafSvg}
          width={300}
          height={300}
          alt='doodle'
          className='animate-spin-slow opacity-20 lg:opacity-30'
        />
      </motion.div>
    </>
  );
};

export default Doodles;
