import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { NAME } from "../consts";

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: NAME,
    site: context.site,
    description: "Blog Posts",
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.slug}/`,
    })),
  });
}
