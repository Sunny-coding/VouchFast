'use client';

import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import createApiKeyAction from '@/actions/create-api-key';

import { apiKeySchema } from '@/schema/api-key-schema';

import { useToast } from '@/components/hooks/use-toast';

import type { ApiKeyType } from '@/schema/api-key-schema';

export const useApiKeyForm = () => {
  const [apiKey, setApiKey] = useState<string>();
  const { toast } = useToast();

  const form = useForm<ApiKeyType>({
    resolver: zodResolver(apiKeySchema),
    defaultValues: { name: '' },
  });

  const handleSubmit = async (values: ApiKeyType) => {
    const formData = new FormData();
    formData.append('name', values.name);

    const res = await createApiKeyAction(formData);

    if (res.key) setApiKey(res.key);

    toast({
      title: res.success ? 'API Key' : 'Error',
      description: res.message,
    });
  };

  return { form, handleSubmit, apiKey };
};
