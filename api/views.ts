export const config = {
  runtime: 'nodejs',
};

const UMAMI_BASE_URL = 'https://panda-analytics-jade.vercel.app';
const UMAMI_WEBSITE_ID = 'a821ed6a-e1a4-4a28-b795-2272f3c9f263';

function json(data: unknown, status: number, cacheControl: string): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': cacheControl,
    },
  });
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'GET') {
    return json({ error: 'Method not allowed' }, 405, 'no-store');
  }

  const shareSlug = process.env.UMAMI_SHARE_SLUG;
  if (!shareSlug) {
    return json({ error: 'Server not configured' }, 503, 'no-store');
  }

  try {
    const shareResponse = await fetch(
      `${UMAMI_BASE_URL}/api/share/${encodeURIComponent(shareSlug)}`,
      { headers: { Accept: 'application/json' } },
    );

    if (!shareResponse.ok) {
      throw new Error('Unable to load Umami share');
    }

    const share = await shareResponse.json();
    if (share.websiteId !== UMAMI_WEBSITE_ID || typeof share.token !== 'string') {
      throw new Error('Invalid Umami share');
    }

    const statsResponse = await fetch(
      `${UMAMI_BASE_URL}/api/websites/${UMAMI_WEBSITE_ID}/stats?startAt=0&endAt=${Date.now()}`,
      {
        headers: {
          Accept: 'application/json',
          'x-umami-share-token': share.token,
          'x-umami-share-context': '1',
        },
      },
    );

    if (!statsResponse.ok) {
      throw new Error('Unable to load Umami stats');
    }

    const stats = await statsResponse.json();
    const pageviews =
      typeof stats.pageviews === 'number'
        ? stats.pageviews
        : stats.pageviews?.value;

    if (!Number.isFinite(pageviews) || pageviews < 0) {
      throw new Error('Invalid Umami stats');
    }

    return json(
      { count: Math.trunc(pageviews) },
      200,
      'public, s-maxage=60, stale-while-revalidate=300',
    );
  } catch {
    return json({ error: 'View count unavailable' }, 502, 'no-store');
  }
}
