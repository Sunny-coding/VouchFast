'use client';

type IProps = {
  error: Error & { digest?: string };
};

export default function HomePageError({ error }: IProps): JSX.Element {
  return <>{error.message && error.message}</>;
}
