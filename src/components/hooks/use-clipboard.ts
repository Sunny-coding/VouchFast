'use client';

import { copyToClipboard } from '@/lib/clipboard';

import { useToast } from '@/components/hooks/use-toast';

export const useCopyToClipboard = () => {
  const { toast } = useToast();

  const handleCopy = (text: string) => {
    const res = copyToClipboard(text);

    toast({
      title: res ? 'Copied!' : 'An Error Occurred',
      variant: res ? 'default' : 'destructive',
    });
  };

  return handleCopy;
};
