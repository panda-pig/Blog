export async function GET() {
  const allPosts = Object.values(await import.meta.glob('../content/blog/*.md', { eager: true }));

  const baseUrl = 'https://blog-beta-kohl-92.vercel.app';

  const pages = [
    { url: baseUrl, lastmod: new Date().toISOString() },
    { url: `${baseUrl}/blog`, lastmod: new Date().toISOString() },
    { url: `${baseUrl}/moments`, lastmod: new Date().toISOString() },
    { url: `${baseUrl}/projects`, lastmod: new Date().toISOString() },
    { url: `${baseUrl}/contact`, lastmod: new Date().toISOString() },
    { url: `${baseUrl}/en`, lastmod: new Date().toISOString() },
    { url: `${baseUrl}/en/blog`, lastmod: new Date().toISOString() },
    { url: `${baseUrl}/en/moments`, lastmod: new Date().toISOString() },
    { url: `${baseUrl}/en/projects`, lastmod: new Date().toISOString() },
    { url: `${baseUrl}/en/contact`, lastmod: new Date().toISOString() },
    { url: `${baseUrl}/ja`, lastmod: new Date().toISOString() },
    { url: `${baseUrl}/ja/blog`, lastmod: new Date().toISOString() },
    { url: `${baseUrl}/ja/moments`, lastmod: new Date().toISOString() },
    { url: `${baseUrl}/ja/projects`, lastmod: new Date().toISOString() },
    { url: `${baseUrl}/ja/contact`, lastmod: new Date().toISOString() },
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
    <loc>${p.url}</loc>
    <lastmod>${p.lastmod.split('T')[0]}</lastmod>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
