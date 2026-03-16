// Keep this in sync with content/blog/*.mdx

export interface BlogIndexEntry {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
}

// TODO: Add an entry here for each .mdx file you create in content/blog/.
// The slug must match the filename (without .mdx).
export const blogIndex: BlogIndexEntry[] = [
  {
    slug: "hello-world", // TODO: matches content/blog/hello-world.mdx
    title: "YOUR_POST_TITLE", // TODO: blog post title
    date: "2024-01-01", // TODO: publication date YYYY-MM-DD
    description: "YOUR_POST_DESCRIPTION", // TODO: 1-2 sentence summary shown in listing
    tags: ["YOUR_TAG"], // TODO: topic tags
  },
];
