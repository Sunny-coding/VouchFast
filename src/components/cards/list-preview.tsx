import { PenLine } from 'lucide-react';

import { defaultQuestions } from '@/schema/list-schema';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

import type { ListFormType } from '@/schema/list-schema';

interface ListPreviewProps {
  listData: ListFormType;
  className?: string;
}

const ListPreview = ({ listData, className }: ListPreviewProps) => {
  return (
    <div className={cn('space-y-6', className)}>
      <Card>
        <CardContent className='pt-6'>
          <h2 className='mb-2 text-center text-3xl font-bold'>
            {listData.headerTitle || 'Header goes here...'}
          </h2>
          <p className='mb-4 text-center text-muted-foreground'>
            {listData.headerDesc || 'Your custom message goes here...'}
          </p>

          <div className='mt-10 space-y-2'>
            <h3 className='font-semibold'>QUESTIONS</h3>
            <ul className='list-inside list-disc space-y-1 text-muted-foreground'>
              {listData.questions.map((question, index) => (
                <li key={index}>{question || defaultQuestions[index]}</li>
              ))}
            </ul>
          </div>

          <Button className='mt-5 w-full hover:bg-black' variant='outline'>
            <PenLine className='mr-2 h-4 w-4' />
            Submit a Testimonial
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ListPreview;
