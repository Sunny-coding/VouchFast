'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import createApiKeyAction from '@/actions/create-api-key';

import { apiKeySchema } from '@/schema/api-key-schema';

import { useToast } from '@/components/hooks/use-toast';

import type { ApiKeyType } from '@/schema/api-key-schema';

export const useApiKeyForm = () => {
  const { toast } = useToast();

  const form = useForm<ApiKeyType>({
    resolver: zodResolver(apiKeySchema),
    defaultValues: { name: '' },
  });

  const handleSubmit = async (values: ApiKeyType) => {
    const formData = new FormData();
    formData.append('name', values.name);

    const res = await createApiKeyAction(formData);

    toast({
      title: res.success ? 'API Key Created' : 'Error',
      description: res.message,
    });
  };

  return { form, handleSubmit };
};
