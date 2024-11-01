import Link from 'next/link';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import type { ReactNode } from 'react';

interface OverviewCardProps {
  title: string;
  children?: ReactNode;
  link?: string;
}

const OverviewCard = ({ title, children, link }: OverviewCardProps) => {
  const CardContent = (
    <Card>
      <CardHeader className='space-y-5'>
        <CardTitle className='text-lg'>{title}</CardTitle>
        <CardDescription className='text-xl font-bold'>
          {children}
        </CardDescription>
      </CardHeader>
    </Card>
  );

  return link ? (
    <Link href={link}>{CardContent}</Link>
  ) : (
    <>{CardContent}</>
  );
};

export default OverviewCard;
