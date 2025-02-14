import { allDocs } from 'content-collections';
import Link from 'next/link';

const DocsPage = () => {
  return (
    <div className='flex flex-col'>
      {allDocs.map(doc => {
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
