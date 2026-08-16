export const config = {
  runtime: 'nodejs',
};

const UMAMI_BASE_URL = 'https://panda-analytics-jade.vercel.app';
const UMAMI_WEBSITE_ID = 'a821ed6a-e1a4-4a28-b795-2272f3c9f263';

type ApiRequest = {
  method?: string;
};

type ApiResponse = {
  setHeader(name: string, value: string): void;
  status(code: number): ApiResponse;
  json(data: unknown): void;
};

function json(
  res: ApiResponse,
  data: unknown,
  status: number,
  cacheControl: string,
): void {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', cacheControl);
  res.status(status).json(data);
}

export default async function handler(
  req: ApiRequest,
  res: ApiResponse,
): Promise<void> {
  if (req.method !== 'GET') {
    return json(res, { error: 'Method not allowed' }, 405, 'no-store');
  }

  const shareSlug = process.env.UMAMI_SHARE_SLUG;
  if (!shareSlug) {
    return json(res, { error: 'Server not configured' }, 503, 'no-store');
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
      res,
      { count: Math.trunc(pageviews) },
      200,
      'public, s-maxage=60, stale-while-revalidate=300',
    );
  } catch {
    return json(res, { error: 'View count unavailable' }, 502, 'no-store');
  }
}
