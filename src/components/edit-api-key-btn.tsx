import { zodResolver } from '@hookform/resolvers/zod';
import { Edit } from 'lucide-react';
import { useForm } from 'react-hook-form';

import { useToast } from './hooks/use-toast';

import updateApiKeyAction from '@/actions/edit-api-key';

import { apiKeySchema, ApiKeyType } from '@/schema/api-key-schema';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

interface IProps {
  id: string;
  name: string;
}

const EditApiKey = ({ id, name }: IProps) => {
  const { toast } = useToast();

  const form = useForm<ApiKeyType>({
    resolver: zodResolver(apiKeySchema),
    defaultValues: { name: name },
  });

  const handleSubmit = async (values: ApiKeyType) => {
    const formData = new FormData();

    formData.append('name', values.name);

    const res = await updateApiKeyAction(id, formData);

    toast({
      title: res.success ? 'API Key Updated' : 'Error',
      description: res.message,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className='flex items-center gap-2'>
          <Edit size={20} />
          <span>Edit API Key</span>
        </div>
      </DialogTrigger>

      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Edit API Key</DialogTitle>
        </DialogHeader>

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
                    <Input placeholder={name} {...field} />
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
      </DialogContent>
    </Dialog>
  );
};

export default EditApiKey;
