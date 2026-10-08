import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = new URL('../dist/', import.meta.url);
const locales = ['', 'en', 'ja'];
const failures = [];
const expectedCrossCategoryLinks = {
  analytics: '/aws/database/amazon-redshift',
  architecture: '/aws/compare/multi-az-vs-multi-region',
  devops: '/aws/compute/aws-elastic-beanstalk',
  migration: '/aws/storage/aws-snow-family',
};

for (const locale of locales) {
  const awsRoot = new URL(`${locale ? `${locale}/` : ''}aws/`, root);
  const entries = await readdir(awsRoot, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const indexPath = join(fileURLToPath(awsRoot), entry.name, 'index.html');
    let html;

    try {
      html = await readFile(indexPath, 'utf8');
    } catch {
      continue;
    }

    const topicIndex = html.match(
      /<div class="aws-topic-index"[^>]*>([\s\S]*?)<a class="aws-back-card"/,
    )?.[1];

    if (!topicIndex) continue;

    const expectedPath = expectedCrossCategoryLinks[entry.name];
    const localizedExpectedPath = `${locale ? `/${locale}` : ''}${expectedPath}`;
    if (expectedPath && !topicIndex.includes(`href="${localizedExpectedPath}"`)) {
      failures.push({
        locale: locale || 'zh',
        category: entry.name,
        number: '--',
        topic: `missing expected link ${localizedExpectedPath}`,
      });
    }

    for (const match of topicIndex.matchAll(
      /<div[^>]*>\s*<span[^>]*>(\d{2})<\/span>\s*<strong[^>]*>(.*?)<\/strong>\s*<\/div>/g,
    )) {
      failures.push({
        locale: locale || 'zh',
        category: entry.name,
        number: match[1],
        topic: match[2].replace(/<[^>]+>/g, ''),
      });
    }
  }
}

if (failures.length > 0) {
  console.error('Found AWS topic rows without article links:');
  for (const failure of failures) {
    console.error(
      `- ${failure.locale}/${failure.category} ${failure.number}: ${failure.topic}`,
    );
  }
  process.exitCode = 1;
} else {
  console.log('All AWS topic index rows link to an article.');
}
