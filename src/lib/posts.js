export function getSlugFromFile(filePath) {
  return filePath.split('/').pop().replace('.md', '').replace(/\.(en|ja)$/, '');
}

export function isPublishedPost(post) {
  return post?.frontmatter?.draft !== true;
}

export function groupPostsBySlug(allPosts) {
  const postsBySlug = {};
  allPosts.filter(isPublishedPost).forEach((post) => {
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
  const text = String(rawContent)
    .replace(/^---\s*\r?\n[\s\S]*?\r?\n---\s*(?:\r?\n|$)/, '')
    .replace(/<[^>]*>/g, '')
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/https?:\/\/\S+/g, '');
  const eastAsianChars = (text.match(/[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Hangul}]/gu) || []).length;
  const words = (text.match(/[\p{Script=Latin}\p{N}]+(?:['’-][\p{Script=Latin}\p{N}]+)*/gu) || []).length;
  const total = Math.ceil(eastAsianChars / 400 + words / 200);
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
