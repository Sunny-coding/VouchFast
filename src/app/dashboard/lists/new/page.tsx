'use client';

import { useState } from 'react';

import ListPreview from '@/components/cards/list-preview';
import CreateList from '@/components/forms/create-list';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { defaultQuestions, ListFormType } from '@/schema/list-schema';

const INITIAL_STATE: ListFormType = {
  name: '',
  headerTitle: '',
  headerDesc: '',
  questions: defaultQuestions.slice(0, 2),
};

export default function TestimonialListCreator() {
  const [listData, setListData] = useState<ListFormType>(INITIAL_STATE);

  const reset = () => setListData(INITIAL_STATE);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setListData(prev => ({ ...prev, [name]: value }));
  };

  const handleQuestionChange = (index: number, value: string) => {
    setListData(prev => {
      const newQuestions = [...prev.questions];
      newQuestions[index] = value;
      return { ...prev, questions: newQuestions };
    });
  };

  const addQuestion = () => {
    if (listData.questions.length < 5) {
      setListData(prev => ({
        ...prev,
        questions: [...prev.questions, ''],
      }));
    }
  };

  const removeQuestion = (index: number) => {
    setListData(prev => {
      const newQuestions = prev.questions.filter((_, i) => i !== index);
      return { ...prev, questions: newQuestions };
    });
  };

  const handleFunctions = {
    reset,
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
            Create new List
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
            <ListPreview listData={listData} />
            <CreateList listData={listData} {...handleFunctions} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
