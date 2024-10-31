'use client';

import { useRef, useState } from 'react';

import { useToast } from '../hooks/use-toast';

import createTestimonialAction from '@/actions/create-testimonial';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { PrettyZodErrors } from '@/lib/utils';
import { testimonialSchema } from '@/schema/testimonial-schema';
import { StringMap } from '@/types/zod-error-format';

interface IProps {
  listId: string;
}

const ErrorBox = ({ text }: { text: string }) => {
  return <small className='h-min text-red-400'>{text}</small>;
};

const SubmitTestimonialForm = ({ listId }: IProps) => {
  const [errors, setErrors] = useState<StringMap>({});

  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(formRef.current!);
    const entries = Object.fromEntries(formData.entries());

    // Client side validation
    const isValid = testimonialSchema.safeParse(entries);
    if (!isValid.success) {
      const errors = PrettyZodErrors(isValid.error);
      return setErrors(errors);
    }

    setErrors({}); // All validation passed, reset errors

    const data = await createTestimonialAction(listId, formData);

    toast({
      title: data.success ? '' : 'Error',
      description: data.message,
      variant: data.success ? 'default' : 'destructive',
      duration: 3000,
    });

    data.success && formRef.current?.reset();
  };

  return (
    <form
      className='flex flex-col space-y-7 py-4'
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <div className='space-y-2'>
        <div className='flex justify-between'>
          <Label htmlFor='name'>Name</Label>
          {errors?.name && <ErrorBox text={errors.name} />}
        </div>
        <Input id='name' name='name' placeholder='Your name' />
      </div>

      <div className='space-y-2'>
        <div className='flex justify-between'>
          <Label htmlFor='email'>Email</Label>
          {errors?.email && <ErrorBox text={errors.email} />}
        </div>
        <Input id='email' name='email' placeholder='Your email' />
      </div>

      {/* <div className='space-y-2'>
        <Label htmlFor="rating">Rating</Label>
        <div className='flex space-x-2'>
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={cn('cursor-pointer', star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300')}
              onClick={() => handleRatingChange(star)}
            />
          ))}
        </div>
        <div className="h-8">
          {errors?.rating && (
            <small className="text-red-400">{errors.rating}</small>
          )}
        </div>
      </div> */}

      <div className='space-y-2'>
        <div className='flex justify-between'>
          <Label htmlFor='message'>Message</Label>
          {errors?.message && <ErrorBox text={errors.message} />}
        </div>
        <Textarea
          id='message'
          name='message'
          placeholder='Your testimonial message'
          rows={4}
        />
      </div>

      <Button size='sm' type='submit' className='ml-auto'>
        Submit
      </Button>
    </form>
  );
};

export default SubmitTestimonialForm;
