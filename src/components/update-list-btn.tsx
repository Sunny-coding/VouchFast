/* eslint-disable no-unused-vars */
'use client';

import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { Edit, PlusCircle, XCircle } from 'lucide-react';
import { useFieldArray, useForm } from 'react-hook-form';

import { useToast } from './hooks/use-toast';

import { listSchema } from '@/schema/list-schema';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
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

import type { ListFormType } from '@/schema/list-schema';
import type { List } from '@prisma/client';

interface IProps {
  list: List;
}

const DialogDemo = ({ list }: IProps) => {
  const { toast } = useToast();

  const form = useForm<ListFormType>({
    resolver: zodResolver(listSchema),
    defaultValues: {
      name: list.name,
      headerTitle: list.headerTitle,
      headerDesc: list.headerDesc,
      questions: list.questions || [''],
    },
    mode: 'onChange',
  });

  // const { fields, append, remove } = useFieldArray({
  //   name: 'questions',
  //   control: form.control,
  // });

  const handleSubmit = async (data: ListFormType) => {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline' className='text-zinc-400 hover:text-zinc-300'>
          <Edit className='mr-2 h-4 w-4' />
          Edit List
        </Button>
      </DialogTrigger>

      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Editing: {list.name}</DialogTitle>

          <DialogDescription>
            Make changes to your list here. Click save when youre done.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-4'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder='List Name' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='headerTitle'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder='Title' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='headerDesc'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input placeholder='Description' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>

        <DialogFooter>
          <Button type='submit'>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogDemo;
