import rss from '@astrojs/rss';
import { isPublishedPost } from '../../lib/posts.js';

export async function GET(context) {
  const allPosts = await import.meta.glob('../../content/blog/*.md', { eager: true });
  const posts = Object.values(allPosts)
    .filter((post) => {
      if (!isPublishedPost(post)) return false;
      const filename = post.file.split('/').pop().replace('.md', '');
      const langMatch = filename.match(/\.(en|ja)$/);
      const lang = langMatch ? langMatch[1] : 'zh';
      return lang === 'en';
    })
    .sort((a, b) => new Date(b.frontmatter.date).valueOf() - new Date(a.frontmatter.date).valueOf());

  return rss({
    title: 'Panda Blog',
    description: 'A personal blog by panda-pig about tech and projects',
    site: context.site,
    items: posts.map((post) => {
      const filename = post.file.split('/').pop().replace('.md', '');
      const slug = filename.replace(/\.(en|ja)$/, '');
      return {
        title: post.frontmatter.title,
        pubDate: post.frontmatter.date,
        description: post.frontmatter.description,
        link: `/en/blog/${slug}`,
      };
    }),
  });
}
