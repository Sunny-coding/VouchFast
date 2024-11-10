import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import type { StringMap } from '@/types/zod-error-format';
import type { ClassValue } from 'clsx';
import type { ZodError } from 'zod';

type StringRecord = Record<string, string>;

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const formatDate = (date: Date): string => {
  // Format: Nov 2, 2024, 8:40:46 AM
  const options: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  };

  // Format the date according to the specified format
  return date.toLocaleString('en-US', options);
};

// Helper function to convert FormData to a string-based object
export const formDataToObject = (formData: FormData): StringRecord => {
  const object: StringRecord = {};

  formData.forEach((value, key) => {
    object[key] = value.toString();
  });

  return object;
};

export const PrettyZodErrors = (error: ZodError): StringMap => {
  return error.issues.reduce((acc: { [key: string]: string }, issue) => {
    acc[issue.path[0]] = issue.message;
    return acc;
  }, {});
};
