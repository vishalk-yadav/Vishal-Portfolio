export interface Project {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  problem?: string;
  solution?: string;
  features: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  featured: boolean;
  hackathon?: string;
  team?: {
    name: string;
    members: string[];
  };
  role?: string;
  badge?: string;
  note?: string;
}

export interface SkillItem {
  name: string;
  currentlyLearning?: boolean;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description?: string;
  skills: SkillItem[];
}

export interface JourneyPhase {
  phase: number;
  title: string;
  description: string;
  tags: string[];
}

export interface EducationInfo {
  degree: string;
  specialization: string;
  college: string;
  university: string;
  graduationYear: number;
  currentYear: string;
  seniorSecondary: {
    title: string;
    percentage: string;
    year: number;
  };
  secondary: {
    title: string;
    percentage: string;
    year: number;
  };
  interests: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  description: string;
  badge?: string;
}

export interface ActivityItem {
  title: string;
  role: string;
  description: string;
  skills: string[];
}

export interface GitHubRepositoryStats {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  url: string;
  updatedAt?: string;
}

export interface GitHubStats {
  username: string;
  reposCount: number;
  starsCount: number;
  followersCount: number;
  avatarUrl: string;
  bio: string;
  htmlUrl: string;
  repositories: GitHubRepositoryStats[];
  status: 'live' | 'cached' | 'unavailable';
  lastUpdated?: string;
}

export interface LeetCodeStats {
  username: string;
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: number | null;
  acceptanceRate?: string;
  cProblemsSolved: number;
  cppProblemsSolved: number;
  topTopics: { name: string; count: number }[];
  status: 'live' | 'cached' | 'unavailable';
  lastUpdated?: string;
}
