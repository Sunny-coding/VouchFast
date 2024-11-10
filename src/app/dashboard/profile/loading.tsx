import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const LoadingSkeleton = () => {
  return (
    <Card className='mx-auto w-full max-w-2xl border-none bg-black text-white'>
      <CardHeader>
        <Skeleton className='mx-auto h-8 w-32 bg-gray-700' />
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='flex justify-center'>
          <Skeleton className='h-24 w-24 rounded-full bg-gray-700' />
        </div>
        <Skeleton className='h-6 w-40 bg-gray-700' />
        <div className='space-y-4'>
          <Skeleton className='h-4 w-full bg-gray-700' />
          <Skeleton className='h-4 w-full bg-gray-700' />
          <Skeleton className='h-4 w-full bg-gray-700' />
          <Skeleton className='h-4 w-full bg-gray-700' />
        </div>
      </CardContent>
      <CardFooter className='flex justify-end'>
        <Skeleton className='h-10 w-32 bg-gray-700' />
      </CardFooter>
    </Card>
  );
};

export default LoadingSkeleton;
