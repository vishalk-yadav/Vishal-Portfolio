# Portfolio Content Management Rule

Treat the existing portfolio data architecture as the source of truth whenever the user asks to add, remove, or update information in the portfolio.

The user manages the portfolio content through natural language instructions without having to manually edit code.

## Core Directives

1. **Inspect First**: Inspect the existing codebase before modifying anything.
2. **Target Data Sources**: Identify the correct data structure and file (primarily `src/data/portfolio.ts` or `src/types/index.ts`) rather than unnecessarily modifying UI components.
3. **Preserve UI & Design**: Preserve existing design, layout, typography, colors, spacing, and animations.
4. **No Unrequested Redesigns**: Do not redesign the website or change the theme unless explicitly requested.
5. **Zero Hallucination / Authenticity**: Do not invent missing information, statistics, certificates, projects, experience, awards, links, or credentials. Use only information provided by the user or already verified in the project.
6. **Dynamic Platform Metrics**: Keep external live data (GitHub followers/repos/stars, LeetCode problem counts/difficulty/ranking/acceptance) dynamic.
7. **Curated Showcase**: Keep curated portfolio content (featured repositories list, project highlights, algorithmic topics, languages) manually controlled.
8. **TypeScript Integrity**: Strictly maintain TypeScript types and existing data contracts.
9. **Clean Removals**: Remove obsolete data completely when the user asks for something to be removed; clean up unused references and assets.
10. **Deduplication**: Check for duplicate entries before adding new content.
11. **Verification**: Run `npm run build` (`tsc -b && vite build`) after making changes and fix any compilation errors.
12. **Layout Checks**: Verify desktop and mobile responsiveness.
13. **Clear Reporting**: Report exactly which files and data entries were created, updated, or removed.

## Content Mapping Quick Reference

- **Certificates / Certifications / Simulations**: Add to `CERTIFICATIONS` in `src/data/portfolio.ts` (category: `'simulation'` or `'competition'`).
- **Skills**: Add to `SKILL_CATEGORIES` in `src/data/portfolio.ts` under the relevant category (mark with `currentlyLearning: true` if applicable).
- **Projects**: Add to `PROJECTS` in `src/data/portfolio.ts` with accurate metadata, problem, solution, features, and techStack.
- **Education**: Update `EDUCATION_ITEMS` or `ACADEMIC_METRICS` in `src/data/portfolio.ts`.
- **About Info**: Update `PERSONAL_INFO`, `BIO_PARAGRAPHS`, or `ABOUT_STATS` in `src/data/portfolio.ts`.
- **Roadmap / Journey Milestones**: Add or update entries in `ROADMAP_PHASES` in `src/data/portfolio.ts`.
- **Curated GitHub Repositories**: Update `CURATED_REPOSITORIES` in `src/data/portfolio.ts`.
- **Contact Info**: Update `PERSONAL_INFO.social` or `PERSONAL_INFO.email` in `src/data/portfolio.ts`.
