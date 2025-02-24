import { MDXContent } from '@content-collections/mdx/react';
import { allDocs } from 'content-collections';
import Link from 'next/link';

import components from '@/components/mdx/mdx-components';

const DocsPage = () => {
  const getStarted = allDocs.find(doc => doc.slug === '/docs/get-started');
  if (!getStarted) return null;

  const docs = allDocs.filter(doc => doc.slug !== '/docs/get-started');

  return (
    <div className='flex flex-col'>
      <article className='prose-xl prose-invert mx-auto w-full'>
        <MDXContent code={getStarted.code} components={components} />
      </article>

      <h2 className='my-10 scroll-m-20 pb-1 text-5xl font-black tracking-tight first:mt-0'>
        QuickStart
      </h2>

      {docs.map(doc => {
        return (
          <Link key={doc.slug} href={doc.slug}>
            {doc.title}
          </Link>
        );
      })}
    </div>
  );
};

export default DocsPage;
