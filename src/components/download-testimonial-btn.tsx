/* eslint-disable no-unused-vars */
'use client';

import { Download } from 'lucide-react';

import { downloadJson } from '@/lib/utils';

import { Button } from '@/components/ui/button';

import type { Testimonial } from '@prisma/client';

interface IProps {
  testimonial: Testimonial;
}

const DownloadTestimonialButton = ({ testimonial }: IProps) => {
  // ! Workaround to remove userId and listId from the downloaded JSON
  const { userId, listId, ...cleanedData } = testimonial;

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
