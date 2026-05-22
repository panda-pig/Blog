import rss from '@astrojs/rss';

function getPostsByLang(allPosts, targetLang) {
  const posts = Object.values(allPosts);
  const filtered = posts.filter((post) => {
    const filename = post.file.split('/').pop().replace('.md', '');
    const langMatch = filename.match(/\.(en|ja)$/);
    const lang = langMatch ? langMatch[1] : 'zh';
    return lang === targetLang;
  });
  return filtered.sort((a, b) => new Date(b.frontmatter.date).valueOf() - new Date(a.frontmatter.date).valueOf());
}

export async function GET(context) {
  const allPosts = await import.meta.glob('../content/blog/*.md', { eager: true });
  const posts = getPostsByLang(allPosts, 'zh');

  return rss({
    title: 'Panda Blog',
    description: 'panda-pig 的个人博客，记录技术学习与项目实践',
    site: context.site,
    items: posts.map((post) => {
      const filename = post.file.split('/').pop().replace('.md', '');
      const slug = filename.replace(/\.(en|ja)$/, '');
      return {
        title: post.frontmatter.title,
        pubDate: post.frontmatter.date,
        description: post.frontmatter.description,
        link: `/blog/${slug}`,
      };
    }),
  });
}
