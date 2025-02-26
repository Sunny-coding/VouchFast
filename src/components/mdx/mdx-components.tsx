import MdxLink from './mdx-link';

import { cn } from '@/lib/utils';

type Props = React.HTMLAttributes<HTMLElement>;

const components = {
  h1: ({ className, ...props }: Props) => (
    <h2
      className={cn(
        'mt-2 scroll-m-20 text-7xl font-black tracking-tight first:mt-0',
        className,
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: Props) => (
    <h2
      className={cn(
        'mt-10 scroll-m-20 pb-1 text-5xl font-black tracking-tight first:mt-0',
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: Props) => (
    <h3
      className={cn(
        'not-prose mt-8 scroll-m-20 text-3xl font-bold tracking-tight text-gray-300',
        className,
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: Props) => (
    <h4
      className={cn(
        'mt-8 scroll-m-20 text-2xl font-black tracking-tight text-gray-300',
        className,
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: Props) => (
    <h5
      className={cn(
        'mt-8 scroll-m-20 text-lg font-semibold tracking-tight text-gray-300',
        className,
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: Props) => (
    <h6
      className={cn(
        'mt-8 scroll-m-20 text-base font-semibold tracking-tight text-gray-300',
        className,
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: Props) => (
    <p
      className={cn(
        'text-lg leading-8 text-gray-300 [&:not(:first-child)]:my-6',
        className,
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: Props) => (
    <ul className={cn('list-disc', className)} {...props} />
  ),
  ol: ({ className, ...props }: Props) => (
    <ol className={cn('list-decimal', className)} {...props} />
  ),
  li: ({ className, ...props }: Props) => (
    <li className={cn('text-lg text-gray-300', className)} {...props} />
  ),
  blockquote: ({ className, ...props }: Props) => (
    <blockquote
      className={cn(
        'mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground',
        className,
      )}
      {...props}
    />
  ),
  hr: ({ ...props }) => <hr className='my-4 md:my-8' {...props} />,
  table: ({ className, ...props }: Props) => (
    <div className='my-6 w-full overflow-y-auto'>
      <table className={cn('w-full', className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: Props) => (
    <tr className={cn('m-0 border-t p-0', className)} {...props} />
  ),
  th: ({ className, ...props }: Props) => (
    <th
      className={cn(
        'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: Props) => (
    <td
      className={cn(
        'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
        className,
      )}
      {...props}
    />
  ),
  div: ({ className, ...props }: Props) => (
    <div className={cn('my-6', className)} {...props} />
  ),
  a: MdxLink,
  // Image,
};

export default components;
