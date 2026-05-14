import rss from '@astrojs/rss';

export async function GET(context) {
  const posts = Object.values(await import.meta.glob('./blog/*.md', { eager: true }));
  const sortedPosts = posts.sort((a, b) => new Date(b.frontmatter.date).valueOf() - new Date(a.frontmatter.date).valueOf());
  
  return rss({
    title: '我的博客',
    description: '个人博客，分享想法与文章',
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.frontmatter.title,
      pubDate: post.frontmatter.date,
      description: post.frontmatter.description,
      link: post.url,
    })),
  });
}
