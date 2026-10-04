import { useState, useEffect, useCallback } from 'react';
import { GitHubStats, GitHubRepositoryStats } from '../types';
import { STATIC_GITHUB_STATS, CURATED_REPOSITORIES } from '../data/portfolio';

const CACHE_KEY = 'github_stats_cache_v1';
const CACHE_TTL_MS = 30 * 60 * 1000; // 30 minutes

interface CacheEnvelope {
  data: GitHubStats;
  timestamp: number;
}

export function useGithubStats() {
  const [stats, setStats] = useState<GitHubStats>(() => {
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
      // Ignore
    }
    return STATIC_GITHUB_STATS;
  });

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = useCallback(async (forceRefresh = false) => {
    try {
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
          // Ignore
        }
      }

      setLoading(true);
      setError(null);

      // Fetch user profile data
      const userRes = await fetch('https://api.github.com/users/vishalk-yadav', {
        headers: { Accept: 'application/vnd.github.v3+json' },
      });

      if (!userRes.ok) {
        throw new Error(`GitHub user API returned ${userRes.status}`);
      }
      const userData = await userRes.json();

      // Fetch user public repositories for live stars & metadata
      const reposRes = await fetch(
        'https://api.github.com/users/vishalk-yadav/repos?per_page=100&sort=updated',
        {
          headers: { Accept: 'application/vnd.github.v3+json' },
        }
      );

      let allRepos: any[] = [];
      if (reposRes.ok) {
        allRepos = await reposRes.json();
      }

      // Calculate total stars dynamically from all user repositories
      const totalStars = allRepos.reduce(
        (acc: number, r: any) => acc + (r.stargazers_count || 0),
        0
      );

      // Dynamically update metadata ONLY for our curated repositories
      // Random new repositories will NEVER be automatically added
      const dynamicRepos: GitHubRepositoryStats[] = CURATED_REPOSITORIES.map((curated) => {
        const liveMatch = allRepos.find(
          (r: any) => r.name.toLowerCase() === curated.name.toLowerCase()
        );

        if (liveMatch) {
          return {
            name: curated.name,
            description: curated.description, // preserve curated high-quality description
            language: liveMatch.language || curated.language,
            languageColor: curated.languageColor,
            stars: liveMatch.stargazers_count ?? curated.stars,
            forks: liveMatch.forks_count ?? 0,
            url: liveMatch.html_url || curated.url,
            updatedAt: liveMatch.updated_at,
          };
        }

        return curated;
      });

      const updatedStats: GitHubStats = {
        username: userData.login || STATIC_GITHUB_STATS.username,
        reposCount: userData.public_repos ?? STATIC_GITHUB_STATS.reposCount,
        starsCount: totalStars,
        followersCount: userData.followers ?? STATIC_GITHUB_STATS.followersCount,
        avatarUrl: userData.avatar_url || STATIC_GITHUB_STATS.avatarUrl,
        bio: userData.bio || STATIC_GITHUB_STATS.bio,
        htmlUrl: userData.html_url || STATIC_GITHUB_STATS.htmlUrl,
        repositories: dynamicRepos,
        status: 'live',
        lastUpdated: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setStats(updatedStats);

      // Save to cache
      try {
        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            data: updatedStats,
            timestamp: Date.now(),
          } as CacheEnvelope)
        );
      } catch {
        // Ignore cache write error
      }
    } catch (err: any) {
      setError(err?.message || 'Failed to fetch GitHub statistics');
      // If error (e.g. rate limit), keep cached or static data
      setStats((prev) => ({
        ...prev,
        status: 'cached',
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
