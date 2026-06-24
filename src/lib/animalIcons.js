const EMOJI_BY_SLUG = {
  'jlpt-grammar-deck-study-cards': { emoji: '🗂️', label: '语法卡片' },
  'jlpt-sprint-desk-study-loop': { emoji: '⏱️', label: '学习冲刺' },
  welcome: { emoji: '📝', label: '博客记事' },
};

const FALLBACK_EMOJIS = [
  { emoji: '💡', label: '灵感' },
  { emoji: '📚', label: '学习' },
  { emoji: '🛠️', label: '项目' },
  { emoji: '🌿', label: '随记' },
  { emoji: '🧭', label: '探索' },
];

export function getArticleEmoji(slug, index = 0) {
  return EMOJI_BY_SLUG[slug] || FALLBACK_EMOJIS[index % FALLBACK_EMOJIS.length];
}
