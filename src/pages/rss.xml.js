import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = (await getCollection("posts")).sort((a, b) => {
    const byDate = b.data.pubDate.getTime() - a.data.pubDate.getTime();
    if (byDate !== 0) return byDate;
    return b.id.localeCompare(a.id);
  });

  return rss({
    title: "LLMNTS",
    description: "Applied AI systems design and engineering.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/${post.id.replace('.md', '')}`,
    })),
    customData: `<language>en-us</language>`,
  });
}
