import Link from 'next/link';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import type { ReactNode } from 'react';

interface OverviewCardProps {
  title: string;
  children?: ReactNode;
  link?: string;
}

export default function OverviewCard({ title, children, link }: OverviewCardProps) {
  const CardComponent = (
    <Card className={link ? 'transition-shadow hover:shadow-md' : ''}>
      <CardHeader>
        <CardTitle className='text-lg'>{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );

  if (link) {
    return (
      <Link href={link} className='block'>
        {CardComponent}
      </Link>
    );
  }

  return CardComponent;
}
