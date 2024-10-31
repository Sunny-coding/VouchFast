import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import type { StringMap } from '@/types/zod-error-format';
import type { ClassValue } from 'clsx';
import type { ZodError } from 'zod';

type StringRecord = Record<string, string>;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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
