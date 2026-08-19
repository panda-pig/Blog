import { isPublishedPost } from '../lib/posts.js';

export async function GET() {
  const allPosts = Object.values(await import.meta.glob('../content/blog/*.md', { eager: true })).filter(isPublishedPost);

  const baseUrl = 'https://panda-blog.com';

  const pages = [
    { url: baseUrl },
    { url: `${baseUrl}/blog` },
    { url: `${baseUrl}/moments` },
    { url: `${baseUrl}/projects` },
    { url: `${baseUrl}/contact` },
    { url: `${baseUrl}/en` },
    { url: `${baseUrl}/en/blog` },
    { url: `${baseUrl}/en/moments` },
    { url: `${baseUrl}/en/projects` },
    { url: `${baseUrl}/en/contact` },
    { url: `${baseUrl}/ja` },
    { url: `${baseUrl}/ja/blog` },
    { url: `${baseUrl}/ja/moments` },
    { url: `${baseUrl}/ja/projects` },
    { url: `${baseUrl}/ja/contact` },
  ];

  const slugs = new Set();
  allPosts.forEach((post) => {
    const filename = post.file.split('/').pop().replace('.md', '');
    const langMatch = filename.match(/\.(en|ja)$/);
    const lang = langMatch ? langMatch[1] : 'zh';
    const slug = filename.replace(/\.(en|ja)$/, '');
    const prefix = lang === 'zh' ? '' : `/${lang}`;
    const fullSlug = `${prefix}/blog/${slug}`;
    if (!slugs.has(fullSlug)) {
      slugs.add(fullSlug);
      pages.push({
        url: `${baseUrl}${fullSlug}`,
        lastmod: post.frontmatter.date || new Date().toISOString(),
      });
    }
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url>
    <loc>${p.url}</loc>${p.lastmod ? `\n    <lastmod>${p.lastmod.split('T')[0]}</lastmod>` : ''}
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
