import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const works = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/works"
  }),
  schema: ({ image }) => z.object({
    title: z.string(),
    year: z.string(),
    month: z.string(),
    tags: z.array(z.string()),
    url: z.string().optional(),
    image: image(),
    thumbnail: image().optional(),
    priority: z.number().optional(),
    additionalImages: z.array(
      z.object({
        src: image(),
        caption: z.string()
      })
    ).optional()
  })
});

export const collections = { works: works };