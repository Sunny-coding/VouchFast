import { defineCollection, defineConfig } from '@content-collections/core';
import { compileMDX } from '@content-collections/mdx';

const docs = defineCollection({
  name: 'docs',
  directory: 'src/docs',
  include: '**/*.mdx',
  schema: z => ({
    title: z.string(),
    description: z.string(),
  }),
  transform: async (document, context) => {
    const code = await compileMDX(context, document);
    const slug = '/docs/' + document._meta.path.toLowerCase().replace(/ /g, '-');
    const filePath = document._meta.path.toLowerCase();

    return {
      ...document,
      code,
      slug,
      filePath,
    };
  },
});

export default defineConfig({
  collections: [docs],
});
