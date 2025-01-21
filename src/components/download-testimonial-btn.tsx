/* eslint-disable no-unused-vars */
'use client';

import { Download } from 'lucide-react';

import { downloadJson } from '@/lib/utils';

import { Button } from '@/components/ui/button';

import type { Testimonial } from '@prisma/client';

interface IProps {
  testimonial: Omit<Testimonial, 'userId'>;
}

const DownloadTestimonialButton = ({ testimonial }: IProps) => {
  // ! Remove listId from the downloaded JSON
  const { listId, ...cleanedData } = testimonial;

  return (
    <Button
      variant='secondary'
      size='sm'
      className='text-zinc-400 hover:text-zinc-300'
      onClick={() => downloadJson(cleanedData, `vouchfast-${testimonial.name}.json`)}
    >
      <Download className='mr-2 h-4 w-4' />
      Download
    </Button>
  );
};

export default DownloadTestimonialButton;
