import { useState, useEffect, useCallback } from 'react';
import { LeetCodeStats } from '../types';
import { STATIC_LEETCODE_STATS } from '../data/portfolio';

const CACHE_KEY = 'leetcode_stats_cache_v1';
const CACHE_TTL_MS = 30 * 60 * 1000; // 30 minutes

interface CacheEnvelope {
  data: LeetCodeStats;
  timestamp: number;
}

export function useLeetcodeStats() {
  const [stats, setStats] = useState<LeetCodeStats>(() => {
    // Try to load cached data on initial mount
    try {
      const raw = localStorage.getItem(CACHE_KEY);
      if (raw) {
        const parsed: CacheEnvelope = JSON.parse(raw);
        if (parsed?.data) {
          const isFresh = Date.now() - parsed.timestamp < CACHE_TTL_MS;
          return {
            ...parsed.data,
            status: isFresh ? 'live' : 'cached',
          };
        }
      }
    } catch {
      // Ignore localStorage errors
    }
    // Initial placeholder with cached status from portfolio data
    return STATIC_LEETCODE_STATS;
  });

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = useCallback(async (forceRefresh = false) => {
    try {
      // Check cache validity unless forceRefresh is true
      if (!forceRefresh) {
        try {
          const raw = localStorage.getItem(CACHE_KEY);
          if (raw) {
            const parsed: CacheEnvelope = JSON.parse(raw);
            const age = Date.now() - parsed.timestamp;
            if (parsed?.data && age < CACHE_TTL_MS) {
              setStats({
                ...parsed.data,
                status: 'live',
              });
              setLoading(false);
              return;
            }
          }
        } catch {
          // Ignore cache read error
        }
      }

      setLoading(true);
      setError(null);

      let fetchedData: any = null;

      // 1. Try our server-side API proxy (/api/leetcode)
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 6000);

        const res = await fetch('/api/leetcode', {
          signal: controller.signal,
          headers: { Accept: 'application/json' },
        });
        clearTimeout(timeoutId);

        if (res.ok) {
          fetchedData = await res.json();
        }
      } catch {
        // Primary serverless proxy failed, will try secondary
      }

      // 2. If primary proxy is unavailable, try secondary public CORS-friendly proxy
      if (!fetchedData || fetchedData.error) {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 6000);

          const res = await fetch(
            'https://alfa-leetcode-api.onrender.com/userProfile/vishalkr_yadav',
            { signal: controller.signal }
          );
          clearTimeout(timeoutId);

          if (res.ok) {
            const json = await res.json();
            if (json && typeof json.easySolved === 'number') {
              const easy = json.easySolved ?? 0;
              const medium = json.mediumSolved ?? 0;
              const hard = json.hardSolved ?? 0;
              const total = easy + medium + hard;

              fetchedData = {
                username: 'vishalkr_yadav',
                totalSolved: total,
                easySolved: easy,
                mediumSolved: medium,
                hardSolved: hard,
                ranking: json.ranking ?? null,
                acceptanceRate: json.acceptanceRate
                  ? `${json.acceptanceRate.toFixed(1)}%`
                  : undefined,
              };
            }
          }
        } catch {
          // Secondary proxy failed
        }
      }

      // 3. Process fetched data
      if (fetchedData && typeof fetchedData.easySolved === 'number') {
        const easy = fetchedData.easySolved;
        const medium = fetchedData.mediumSolved;
        const hard = fetchedData.hardSolved;
        const total = fetchedData.totalSolved ?? easy + medium + hard;

        const liveStats: LeetCodeStats = {
          username: fetchedData.username || 'vishalkr_yadav',
          totalSolved: total,
          easySolved: easy,
          mediumSolved: medium,
          hardSolved: hard,
          ranking: fetchedData.ranking ?? null,
          acceptanceRate: fetchedData.acceptanceRate || STATIC_LEETCODE_STATS.acceptanceRate,
          // Language distribution & topics remain curated
          cProblemsSolved: STATIC_LEETCODE_STATS.cProblemsSolved,
          cppProblemsSolved: STATIC_LEETCODE_STATS.cppProblemsSolved,
          topTopics: STATIC_LEETCODE_STATS.topTopics,
          status: 'live',
          lastUpdated: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        setStats(liveStats);

        // Save to cache with timestamp
        try {
          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({
              data: liveStats,
              timestamp: Date.now(),
            } as CacheEnvelope)
          );
        } catch {
          // Ignore cache write error
        }
      } else {
        // API temporarily unavailable - check if we have any cached data
        try {
          const raw = localStorage.getItem(CACHE_KEY);
          if (raw) {
            const parsed: CacheEnvelope = JSON.parse(raw);
            if (parsed?.data) {
              setStats({
                ...parsed.data,
                status: 'cached',
              });
              return;
            }
          }
        } catch {
          // Ignore
        }

        // If no cache at all, gracefully mark unavailable
        setStats(prev => ({
          ...prev,
          status: 'unavailable',
        }));
        setError('Stats temporarily unavailable');
      }
    } catch (err: any) {
      setError(err?.message || 'Failed to load live LeetCode stats');
      setStats(prev => ({
        ...prev,
        status: prev ? 'cached' : 'unavailable',
      }));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  return { stats, loading, error, refresh: () => fetchStats(true) };
}
