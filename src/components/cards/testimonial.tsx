'use client';

import { Download } from 'lucide-react';

import EditTestimonialButton from '../edit-testimonial-btn';

import { formatDate } from '@/lib/utils';

import DeleteTestimonialButton from '@/components/delete-testimonial-btn';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

import type { Testimonial } from '@prisma/client';
import type { LucideIcon } from 'lucide-react';
import type { HTMLProps, ReactNode } from 'react';

interface IProps {
  testimonial: Testimonial;
}

interface BtnProps extends HTMLProps<HTMLButtonElement> {
  icon: LucideIcon;
  children: ReactNode;
}

interface ContentFieldProps {
  heading: string;
  field: string | Date;
}

const ContentField = ({ heading, field }: ContentFieldProps) => {
  if (field instanceof Date) {
    field = formatDate(field);
  }

  return (
    <div>
      <div className='text-sm text-zinc-400'>{heading}</div>
      <p className='text-zinc-200'>{field}</p>
    </div>
  );
};

const FooterButton = ({ icon, children }: BtnProps) => {
  const Icon = icon;
  return (
    <Button
      variant='secondary'
      size='sm'
      className='text-zinc-400 hover:text-zinc-300'
    >
      <Icon className='mr-2 h-4 w-4' />
      {children}
    </Button>
  );
};

export default function Component({ testimonial }: IProps) {
  return (
    <Card className='w-full max-w-2xl bg-zinc-950 text-zinc-100'>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <h3 className='text-xl font-semibold text-zinc-100'>{testimonial.name}</h3>
        <DeleteTestimonialButton id={testimonial.id} />
      </CardHeader>

      <CardContent className='mt-5 space-y-5'>
        <p className='text-zinc-300'>{testimonial.message}</p>

        <div className='flex flex-wrap justify-between gap-4'>
          <ContentField heading='Name' field={testimonial.name} />
          <ContentField heading='Email' field={testimonial.email} />
          <ContentField heading='Created At' field={testimonial.createdAt} />
        </div>
      </CardContent>

      <CardFooter className='flex justify-end gap-4 border-t border-zinc-800 pt-4'>
        <FooterButton icon={Download}>Download</FooterButton>
        <EditTestimonialButton {...testimonial} />
      </CardFooter>
    </Card>
  );
}
