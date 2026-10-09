// Stable IDs are shared by every translation and stored in article frontmatter.
export const articleCategories = [
  {
    id: 'development',
    zh: { label: '个人开发', description: '独立项目、开发过程、技术方案与项目复盘。' },
    en: { label: 'Personal projects', description: 'Independent projects, implementation notes, and lessons from building.' },
    ja: { label: '個人開発', description: '個人プロジェクト、実装の工夫、技術選定と振り返り。' },
  },
  {
    id: 'metrics',
    zh: { label: '数据分析-指标体系', description: '保险、汽车销售、电商等行业的指标与统计口径。' },
    en: { label: 'Data analysis - Metric frameworks', description: 'Industry metrics, definitions, and measurement across insurance, auto sales, and retail.' },
    ja: { label: 'データ分析-指標体系', description: '保険、自動車販売、ECなどの業界別指標と集計の定義。' },
  },
];

export function getArticleCategory(post, lang = 'zh') {
  const category = articleCategories.find((item) => item.id === post?.frontmatter?.category)
    || articleCategories.find((item) => item.id === 'development');
  return { id: category.id, ...(category[lang] || category.zh) };
}

export function getArticleCategories(lang = 'zh') {
  return articleCategories.map((category) => ({ id: category.id, ...(category[lang] || category.zh) }));
}
