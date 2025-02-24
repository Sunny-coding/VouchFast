import { MDXContent } from '@content-collections/mdx/react';
import { allDocs } from 'content-collections';
import { notFound } from 'next/navigation';

import components from '@/components/mdx/mdx-components';

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
      <MDXContent code={document.code} components={components} />
    </article>
  );
};

export default Document;
