export function getSlugFromFile(filePath) {
  return filePath.split('/').pop().replace('.md', '').replace(/\.(en|ja)$/, '');
}

export function groupPostsBySlug(allPosts) {
  const postsBySlug = {};
  allPosts.forEach((post) => {
    const slug = post.frontmatter.slug || getSlugFromFile(post.file);
    const postLang = post.frontmatter.lang || 'zh';
    if (!postsBySlug[slug]) postsBySlug[slug] = {};
    postsBySlug[slug][postLang] = post;
  });
  return postsBySlug;
}

export function getLocalizedPosts(postsBySlug, lang) {
  return Object.entries(postsBySlug)
    .map(([slug, langs]) => {
      const post = langs[lang] || langs['zh'];
      return post ? { ...post, resolvedSlug: slug } : null;
    })
    .filter(Boolean)
    .sort((a, b) => new Date(b.frontmatter.date).valueOf() - new Date(a.frontmatter.date).valueOf());
}

export function getReadingTime(rawContent) {
  if (!rawContent) return 1;
  const text = typeof rawContent === 'string' ? rawContent : String(rawContent);
  const chineseChars = (text.match(/[一-鿿㐀-䶿]/g) || []).length;
  const englishWords = (text.match(/[a-zA-Z]+/g) || []).length;
  const otherChars = text.length - chineseChars - englishWords;
  const total = Math.ceil(chineseChars / 400 + englishWords / 200 + otherChars / 400);
  return Math.max(1, total);
}

export function formatDate(dateStr, lang) {
  const localeMap = { zh: 'zh-CN', en: 'en-US', ja: 'ja-JP' };
  return new Date(dateStr).toLocaleDateString(localeMap[lang] || 'zh-CN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}
