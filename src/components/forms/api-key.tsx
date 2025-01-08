'use client';

import { memo } from 'react';

import { useApiKeyForm } from '@/components/hooks/use-api-form';

import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const ApiKeyForm: React.FC = () => {
  const { form, handleSubmit } = useApiKeyForm();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className='mt-5 flex flex-col'
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name of the Key</FormLabel>
              <FormControl>
                <Input placeholder='Testimonials' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='ml-auto mt-3 flex gap-3'>
          <DialogClose asChild>
            <Button type='button' variant='ghost'>
              Cancel
            </Button>
          </DialogClose>

          <Button type='submit'>Save changes</Button>
        </div>
      </form>
    </Form>
  );
};

export default memo(ApiKeyForm);
