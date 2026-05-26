import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Leadership profiles — authored in Pages CMS, stored as Markdown in src/content/team.
const team = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/team" }),
  schema: z.object({
    name: z.string(),
    role: z.string().optional(),
    order: z.number().default(99),
    // Path to a photo under /public (e.g. /uploads/doug.jpg). Optional.
    photo: z.string().optional(),
  }),
});

export const collections = { team };
