import rss from '@astrojs/rss';

export async function GET(context) {
  const posts = Object.values(await import.meta.glob('../content/blog/*.md', { eager: true }));
  const sortedPosts = posts.sort((a, b) => new Date(b.frontmatter.date).valueOf() - new Date(a.frontmatter.date).valueOf());
  
  return rss({
    title: 'Panda Lab',
    description: 'panda-pig 的个人博客，记录技术学习与项目实践',
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.frontmatter.title,
      pubDate: post.frontmatter.date,
      description: post.frontmatter.description,
      link: `/blog/${post.file.split('/').pop().replace('.md', '')}`,
    })),
  });
}
