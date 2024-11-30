'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import updateProfileAction from '@/actions/updateProfile';

import { profileSchema } from '@/schema/profile-schema';

import { useToast } from '@/components/hooks/use-toast';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import type { ProfileType } from '@/schema/profile-schema';
import type { User } from 'next-auth';

interface IProps {
  user: User;
}

const AccountForm = ({ user }: IProps) => {
  const { toast } = useToast();

  const form = useForm<ProfileType>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user.name || '',
      email: user.email || '',
    },
  });

  const handleSubmit = async (values: ProfileType) => {
    const formData = new FormData();

    formData.append('name', values.name);
    formData.append('email', values.email);

    const res = await updateProfileAction(formData);

    toast({
      title: res.success ? '' : 'Error',
      description: res.message,
      variant: res.success ? 'default' : 'destructive',
      duration: 3000,
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Card className='mt-5 w-full border-none bg-background shadow-none'>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
          </CardHeader>

          <CardContent className='mt-5 grid gap-4'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder='Elon Mask' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder='acid@acidop.codes' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type='submit' className='ml-auto mt-5'>
              Update Profile
            </Button>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
};

export default AccountForm;
