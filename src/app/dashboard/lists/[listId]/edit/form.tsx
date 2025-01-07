'use client';

import { useState } from 'react';

import EditList from './edit-list';

import ListPreview from '@/components/cards/list-preview';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import type { List } from '@prisma/client';

interface IProps {
  list: List;
}

const EditListForm = ({ list }: IProps) => {
  const [listData, setListData] = useState<Partial<List>>({
    ...list,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setListData(prev => ({ ...prev, [name]: value }));
  };

  const handleQuestionChange = (index: number, value: string) => {
    setListData(prev => {
      const newQuestions = [...(prev.questions as string[])];
      newQuestions[index] = value;
      return { ...prev, questions: newQuestions };
    });
  };

  const addQuestion = () => {
    if (listData.questions!.length < 5) {
      setListData(prev => ({
        ...prev,
        questions: [...(prev.questions as string[]), ''],
      }));
    }
  };

  const removeQuestion = (index: number) => {
    setListData(prev => {
      const newQuestions = prev.questions!.filter((_, i) => i !== index);
      return { ...prev, questions: newQuestions };
    });
  };

  const handleFunctions = {
    handleInputChange,
    handleQuestionChange,
    addQuestion,
    removeQuestion,
  };

  return (
    <div className='min-h-screen bg-background p-4 text-foreground'>
      <Card className='mx-auto w-full max-w-4xl'>
        <CardHeader className='pb-5'>
          <CardTitle className='text-2xl font-bold'>
            Editing List: {list.name}
          </CardTitle>
          <hr className='mt-5' />
        </CardHeader>

        <CardContent>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
            <ListPreview listData={listData} />
            <EditList listData={listData} {...handleFunctions} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditListForm;
