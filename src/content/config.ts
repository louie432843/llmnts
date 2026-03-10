import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    hook: z.string(),
    pubDate: z.date(),
  }),
});

export const collections = { posts };
