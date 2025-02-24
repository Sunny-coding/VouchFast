import Link from 'next/link';

import { cn } from '@/lib/utils';

const MdxLink = ({
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const href = props.href;
  const isExternal = href?.startsWith('http') || href?.startsWith('www');

  if (isExternal) {
    return (
      <a
        className={cn(
          'not-prose font-bold underline underline-offset-1 hover:text-primary',
          className,
        )}
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        {...props}
      />
    );
  }

  return (
    <Link
      className={cn(
        'underline-offset-3 font-bold tracking-tight text-primary underline',
        className,
      )}
      href={href || '#'}
      {...props}
    />
  );
};

export default MdxLink;
