import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';

function leetcodeDevPlugin(): Plugin {
  const handler = async (req: any, res: any) => {
    const username = 'vishalkr_yadav';
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
      const response = await fetch('https://leetcode.com/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        },
        body: JSON.stringify({ query, variables: { username } }),
      });

      const json: any = await response.json();
      const user = json?.data?.matchedUser;

      if (!user) {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'User not found' }));
        return;
      }

      const acSubs = user.submitStats?.acSubmissionNum || [];
      const totalSubs = user.submitStats?.totalSubmissionNum || [];

      const easy = acSubs.find((s: any) => s.difficulty === 'Easy')?.count ?? 0;
      const medium = acSubs.find((s: any) => s.difficulty === 'Medium')?.count ?? 0;
      const hard = acSubs.find((s: any) => s.difficulty === 'Hard')?.count ?? 0;
      const total = easy + medium + hard;

      const acTotal = acSubs.find((s: any) => s.difficulty === 'All')?.submissions ?? 0;
      const allTotal = totalSubs.find((s: any) => s.difficulty === 'All')?.submissions ?? 0;
      const acceptanceRate = allTotal > 0 ? ((acTotal / allTotal) * 100).toFixed(1) + '%' : undefined;

      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.end(JSON.stringify({
        username: user.username,
        totalSolved: total,
        easySolved: easy,
        mediumSolved: medium,
        hardSolved: hard,
        ranking: user.profile?.ranking ?? null,
        acceptanceRate,
        fetchedAt: new Date().toISOString()
      }));
    } catch (err: any) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: err.message }));
    }
  };

  return {
    name: 'leetcode-dev-proxy',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && req.url.startsWith('/api/leetcode')) {
          return handler(req, res);
        }
        next();
      });
    },
    configurePreviewServer(server) {
      server.middlewares.stack.unshift({
        route: '',
        handle: (req: any, res: any, next: any) => {
          if (req.url && req.url.startsWith('/api/leetcode')) {
            return handler(req, res);
          }
          next();
        }
      });
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), leetcodeDevPlugin()],
  server: {
    port: 5173,
    host: true
  }
});
