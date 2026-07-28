export function getAwsNoteSlug(filePath: string) {
  return (
    filePath
      .split('/')
      .pop()
      ?.replace(/\.(md|mdx)$/, '')
      .replace(/\.(en|ja)$/, '') || ''
  );
}

export function normalizeAwsNotes(notes: any[]) {
  return notes
    .map((note) => ({
      ...note,
      resolvedSlug: note.frontmatter.slug || getAwsNoteSlug(note.file),
      resolvedLang:
        note.frontmatter.lang ||
        note.file.match(/\.(en|ja)\.(md|mdx)$/)?.[1] ||
        'zh',
    }))
    .sort(
      (a, b) =>
        new Date(b.frontmatter.updated || b.frontmatter.date).valueOf() -
        new Date(a.frontmatter.updated || a.frontmatter.date).valueOf(),
    );
}

export function getLocalizedAwsNotes(notes: any[], lang = 'zh') {
  const grouped = new Map<string, Record<string, any>>();

  notes.forEach((note) => {
    const key = `${note.frontmatter.category}/${note.resolvedSlug}`;
    const variants = grouped.get(key) || {};
    variants[note.resolvedLang] = note;
    grouped.set(key, variants);
  });

  return [...grouped.values()]
    .map((variants) => {
      const selected = variants[lang] || variants.zh;
      return selected
        ? { ...selected, availableLangs: Object.keys(variants) }
        : null;
    })
    .filter(Boolean)
    .sort(
      (a: any, b: any) =>
        new Date(b.frontmatter.updated || b.frontmatter.date).valueOf() -
        new Date(a.frontmatter.updated || a.frontmatter.date).valueOf(),
    );
}

export function getAwsNoteVariants(notes: any[], category: string, slug: string) {
  return notes.filter(
    (note) =>
      note.frontmatter.category === category &&
      note.resolvedSlug === slug,
  );
}

export function formatAwsDate(value: string, lang = 'zh') {
  const locales: Record<string, string> = {
    zh: 'zh-CN',
    en: 'en-US',
    ja: 'ja-JP',
  };

  return new Date(value).toLocaleDateString(locales[lang] || 'zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
}

export function getAwsPrefix(lang = 'zh') {
  return lang === 'zh' ? '' : `/${lang}`;
}

export function getAwsNoteHref(note: any, lang = 'zh') {
  return `${getAwsPrefix(lang)}/aws/${note.frontmatter.category}/${note.resolvedSlug}`;
}
