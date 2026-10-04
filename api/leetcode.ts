/**
 * Vercel Serverless Function: /api/leetcode
 * Server-side proxy for LeetCode public GraphQL statistics
 * Solves the browser CORS restriction by executing server-side on Node.js.
 */
export default async function handler(req: any, res: any) {
  // CORS & Caching headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=3600');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const username = (req.query?.username as string) || 'vishalkr_yadav';

  const query = `
    query getUserProfile($username: String!) {
      matchedUser(username: $username) {
        username
        submitStats {
          acSubmissionNum {
            difficulty
            count
            submissions
          }
          totalSubmissionNum {
            difficulty
            count
            submissions
          }
        }
        profile {
          ranking
        }
      }
    }
  `;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000);

    const response = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      },
      body: JSON.stringify({ query, variables: { username } }),
      signal: controller.signal
    });

    clearTimeout(timeout);

    if (!response.ok) {
      throw new Error(`LeetCode API returned ${response.status}`);
    }

    const json: any = await response.json();
    const user = json?.data?.matchedUser;

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const acSubs = user.submitStats?.acSubmissionNum || [];
    const totalSubs = user.submitStats?.totalSubmissionNum || [];

    const easy = acSubs.find((s: any) => s.difficulty === 'Easy')?.count ?? 0;
    const medium = acSubs.find((s: any) => s.difficulty === 'Medium')?.count ?? 0;
    const hard = acSubs.find((s: any) => s.difficulty === 'Hard')?.count ?? 0;
    const total = easy + medium + hard;

    const acTotalSubmissions = acSubs.find((s: any) => s.difficulty === 'All')?.submissions ?? 0;
    const allTotalSubmissions = totalSubs.find((s: any) => s.difficulty === 'All')?.submissions ?? 0;
    const acceptanceRate = allTotalSubmissions > 0
      ? ((acTotalSubmissions / allTotalSubmissions) * 100).toFixed(1) + '%'
      : undefined;

    return res.status(200).json({
      username: user.username,
      totalSolved: total,
      easySolved: easy,
      mediumSolved: medium,
      hardSolved: hard,
      ranking: user.profile?.ranking ?? null,
      acceptanceRate,
      fetchedAt: new Date().toISOString()
    });
  } catch (err: any) {
    return res.status(500).json({ error: err.message || 'Failed to fetch LeetCode statistics' });
  }
}
