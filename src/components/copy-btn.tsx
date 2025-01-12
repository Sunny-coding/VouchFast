'use client';

import { Files } from 'lucide-react';

import { cn } from '@/lib/utils';

import { useCopyToClipboard } from '@/components/hooks/use-clipboard';

import { Button } from '@/components/ui/button';

interface IProps {
  text: string;
  className?: string;
}

const CopyButton = ({ text, className }: IProps) => {
  const handleCopy = useCopyToClipboard();

  return (
    <Button
      onClick={() => handleCopy(text)}
      type='submit'
      variant='ghost'
      className={cn('px-2', className)}
    >
      <span className='sr-only'>Copy</span>
      <Files size={20} />
    </Button>
  );
};

export default CopyButton;
