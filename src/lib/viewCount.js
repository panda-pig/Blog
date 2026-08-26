export const LEGACY_VIEW_COUNT_AT_CUTOVER = 2000;
export const UMAMI_PAGEVIEWS_AT_CUTOVER = 221;

export function mergeHistoricalViews(pageviews) {
  if (!Number.isFinite(pageviews) || pageviews < 0) {
    throw new Error('Invalid Umami pageviews');
  }

  const postCutoverViews = Math.max(
    0,
    Math.trunc(pageviews) - UMAMI_PAGEVIEWS_AT_CUTOVER,
  );

  return LEGACY_VIEW_COUNT_AT_CUTOVER + postCutoverViews;
}
