import { MDXContent } from '@content-collections/mdx/react';
import { allDocs } from 'content-collections';
import { notFound } from 'next/navigation';

interface IProps {
  params: {
    slug: string;
  };
}

const Document = ({ params }: IProps) => {
  const document = allDocs.find(
    doc => doc.slug.replace('/docs/', '') === params.slug,
  );
  if (!document) return notFound();

  return (
    <article className='prose-xl prose-invert mx-auto w-full'>
      <MDXContent code={document.code} />
    </article>
  );
};

export default Document;
