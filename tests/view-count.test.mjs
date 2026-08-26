import test from 'node:test';
import assert from 'node:assert/strict';

import { mergeHistoricalViews } from '../src/lib/viewCount.js';

test('preserves the legacy total and adds only post-cutover Umami views', () => {
  assert.equal(mergeHistoricalViews(389), 2168);
});

test('does not double-count Umami views already included at cutover', () => {
  assert.equal(mergeHistoricalViews(221), 2000);
});

test('never drops below the legacy total if analytics data is reset', () => {
  assert.equal(mergeHistoricalViews(0), 2000);
});

test('rejects invalid analytics values', () => {
  assert.throws(() => mergeHistoricalViews(-1), /Invalid Umami pageviews/);
  assert.throws(() => mergeHistoricalViews(Number.NaN), /Invalid Umami pageviews/);
});
