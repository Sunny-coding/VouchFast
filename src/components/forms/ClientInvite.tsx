'use client';

// import createInvite from '@/actions/createInvite';
import { toast } from '@/components/hooks/use-toast';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  inviteSchema,
  InviteSchemaType,
} from '@/schema/invite-form-schema';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const CreateInvite = () => {
  const form = useForm<InviteSchemaType>({
    resolver: zodResolver(inviteSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  });

  async function onSubmit(data: InviteSchemaType) {
    // server actions need FormData type
    const formData = new FormData();

    // turns data.name -> { name: 'Zeeshan Ali' }
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    // const res = await createInvite(formData);

    // if (res.success) {
    //   toast({
    //     title: 'Invite created successfully!',
    //     description: 'The invite has been sent to the recipient.',
    //   });

    //   // form.reset();
    // } else {
    //   toast({
    //     title: 'Failed to create invite!',
    //     description: 'An error occurred while creating the invite.',
    //     variant: 'destructive',
    //   });
    // }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='max-w-2xl space-y-6'
      >
        <section className='flex w-full gap-6'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Recipient Name</FormLabel>
                <FormControl>
                  <Input placeholder='Zeeshan Ali' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type='email'
                    placeholder='acid@acidop.codes'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </section>

        <FormField
          control={form.control}
          name='subject'
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormLabel>
                Subject <span className='text-gray-500'>(Optional)</span>
              </FormLabel>
              <FormControl>
                <Input
                  type='text'
                  placeholder='You have been invited to leave a testimonial.'
                  {...field}
                />
              </FormControl>
              <FormDescription>The subject of the email.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Message <span className='text-gray-500'>(Optional)</span>
              </FormLabel>
              <FormControl>
                <Textarea placeholder='Hello!' {...field} rows={7} />
              </FormControl>
              <FormDescription>
                A default message will be sent if left blank.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit' className='rounded' size='sm'>
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default CreateInvite;
