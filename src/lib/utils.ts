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

export const downloadJson = (data: any, filename: string = 'data.json') => {
  // Convert the data to a JSON string
  let jsonString = JSON.stringify(data, null, 2);

  // Remove special characters
  jsonString = jsonString
    .replace(/\\n/g, '')
    .replace(/\\r/g, '')
    .replace(/\\t/g, '')
    .replace(/\\/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  // Create a Blob with the cleaned JSON string
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  // Create a link element and trigger the download
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Clean up by revoking the Blob URL
  URL.revokeObjectURL(url);
};
