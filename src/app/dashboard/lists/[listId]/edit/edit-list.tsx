/* eslint-disable no-unused-vars */
'use client';

import { useState } from 'react';

import { Minus, Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';

import editListAction from '@/actions/edit-list';

import { defaultQuestions, listSchema } from '@/schema/list-schema';

import FormError from '@/components/form-error';
import { useToast } from '@/components/hooks/use-toast';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

import type { List } from '@prisma/client';

interface IProps {
  listData: Partial<List>;
  reset?: () => void;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  handleQuestionChange: (index: number, value: string) => void;
  addQuestion: () => void;
  removeQuestion: (index: number) => void;
}

type ErrorType = {
  name: string;
  message: string;
};

const CreateList = ({
  listData,
  handleInputChange,
  addQuestion,
  handleQuestionChange,
  removeQuestion,
}: IProps) => {
  const [errors, setErrors] = useState<ErrorType[]>([]);
  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValidated = listSchema.safeParse(listData);

    if (!isValidated.success) {
      // Show errors
      return setErrors(
        isValidated.error.errors.map(error => ({
          name: String(error.path[0]),
          message: error.message,
        })),
      );
    }

    // No errors
    setErrors([]);

    const formData = new FormData();

    const { name, headerTitle, headerDesc, questions } = isValidated.data;

    formData.append('name', name);
    formData.append('headerTitle', headerTitle);
    formData.append('headerDesc', headerDesc);
    formData.append('questions', JSON.stringify(questions));

    const result = await editListAction(formData, listData.id!);

    toast({
      title: result.success ? '' : 'An error occurred!',
      description: result.message,
      variant: result.success ? 'default' : 'destructive',
    });

    result.success && router.push('/dashboard/lists');
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div className='space-y-2'>
        <Label htmlFor='name'>List name</Label>
        <Input
          id='name'
          name='name'
          placeholder='Enter list name'
          value={listData.name}
          onChange={handleInputChange}
        />
        <FormError name='name' errors={errors} />
      </div>

      <div className='space-y-2'>
        <Label htmlFor='headerTitle'>Header title</Label>
        <Input
          id='headerTitle'
          name='headerTitle'
          placeholder='Would you like to leave a testimonial?'
          value={listData.headerTitle}
          onChange={handleInputChange}
        />
        <FormError name='headerTitle' errors={errors} />
      </div>

      <div className='space-y-2'>
        <Label htmlFor='headerDesc'>Your custom message</Label>
        <Textarea
          id='headerDesc'
          name='headerDesc'
          placeholder='Write a warm message to your customers, and give them simple directions on how to make the best testimonial.'
          value={listData.headerDesc}
          rows={3}
          onChange={handleInputChange}
        />
        <p className='text-xs text-muted-foreground'>Markdown is supported</p>
        <FormError name='headerDesc' errors={errors} />
      </div>

      <div className='space-y-2'>
        <Label>Questions</Label>
        {listData.questions!.map((question, index) => (
          <div key={index} className='flex items-center space-x-2'>
            <Input
              id='questions'
              name='questions'
              placeholder={defaultQuestions[index]}
              value={question}
              onChange={e => handleQuestionChange(index, e.target.value)}
            />
            <Button
              variant='outline'
              size='icon'
              onClick={() => removeQuestion(index)}
              disabled={listData.questions!.length <= 1}
            >
              <Minus className='h-4 w-4' />
            </Button>
          </div>
        ))}

        {listData.questions!.length < 5 && (
          <Button
            variant='ghost'
            size='sm'
            onClick={addQuestion}
            className='mt-2 px-0 text-sm hover:bg-card'
          >
            <Plus className='mr-2 h-4 w-4' /> Add Question (Upto 5)
          </Button>
        )}
        <FormError name='questions' errors={errors} />
      </div>

      <Button className='mt-5 w-full text-lg'>Update List</Button>
    </form>
  );
};

export default CreateList;
