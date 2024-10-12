import type { NextApiRequest, NextApiResponse } from "next";
import { getPostsMeta } from "@/lib/getPostsMeta";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const posts = getPostsMeta();

  const rss = `
    <rss version="2.0">
      <channel>
        <title>RedBlog</title>
        <description>A collection of RedBlog posts</description>
        ${posts
          .map(
            (post) => `
          <item>
            <title>${post.title}</title>
            <description>${post.summary}</description>
            <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
          </item>
        `
          )
          .join('')}
      </channel>
    </rss>
  `;

  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(rss);
}
