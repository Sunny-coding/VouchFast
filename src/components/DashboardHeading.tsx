import { grotesque } from './font/grotesque';

import { cn } from '@/lib/utils';

interface DashboardHeadingProps {
  className?: string;
  text: string;
}

const DashboardHeading = ({ className, text }: DashboardHeadingProps) => {
  return (
    <h2 className={cn('text-4xl font-bold', className, grotesque.className)}>
      {text}
    </h2>
  );
};

export default DashboardHeading;
