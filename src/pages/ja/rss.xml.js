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
      return lang === 'ja';
    })
    .sort((a, b) => new Date(b.frontmatter.date).valueOf() - new Date(a.frontmatter.date).valueOf());

  return rss({
    title: 'Panda Blog',
    description: '技術学習とプロジェクト実践を記録する panda-pig の個人ブログ',
    site: context.site,
    items: posts.map((post) => {
      const filename = post.file.split('/').pop().replace('.md', '');
      const slug = filename.replace(/\.(en|ja)$/, '');
      return {
        title: post.frontmatter.title,
        pubDate: post.frontmatter.date,
        description: post.frontmatter.description,
        link: `/ja/blog/${slug}`,
      };
    }),
  });
}
