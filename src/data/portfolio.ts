import {
  Project,
  SkillCategory,
  JourneyPhase,
  EducationInfo,
  CertificationItem,
  ActivityItem,
  GitHubStats,
  GitHubRepositoryStats,
  LeetCodeStats,
} from '../types';

export const PERSONAL_INFO = {
  name: 'Vishal Kumar Yadav',
  displayName: 'Vishal',
  headline: 'AI/ML Engineer in the Making',
  subheading: 'B.Tech CSE (AI & ML) Student • Full-Stack Builder • Problem Solver',
  shortBio:
    'I’m a B.Tech CSE (AI & ML) student focused on building practical software, AI-powered applications, and data-driven solutions while strengthening my programming, DSA, and engineering fundamentals.',
  tagline: 'BUILDING IDEAS INTO REAL-WORLD SOLUTIONS',
  status: 'Open to learning & building',
  currentYear: 'Second Year',
  graduationYear: 2029,
  degree: 'B.Tech CSE (AI & ML)',
  college: 'Raj Kumar Goel Institute of Technology (RKGIT), Ghaziabad',
  university: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU)',
  email: 'vishalkryadav.work@gmail.com',
  location: 'Delhi NCR, India',
  resumeUrl: '/Vishal_Kumar_Yadav_Resume.pdf',
  resumeFileName: 'Vishal_Kumar_Yadav_Resume.pdf',
  avatarUrl: '/images/vishal-profile.jpg',
  social: {
    github: 'https://github.com/vishalk-yadav',
    linkedin: 'https://www.linkedin.com/in/vishalkr-yadav',
    leetcode: 'https://leetcode.com/u/vishalkr_yadav',
    email: 'mailto:vishalkryadav.work@gmail.com',
  },
  stats: [
    { label: 'Degree', value: 'B.Tech CSE (AI & ML)' },
    { label: 'College', value: 'RKGIT, Ghaziabad' },
    { label: 'University', value: 'AKTU, Lucknow' },
    { label: 'Current', value: '2nd Year' },
    { label: 'Graduation', value: '2029' },
    { label: 'Core Focus', value: 'AI / ML & DSA' },
  ],
};

export const ABOUT_TEXT = {
  paragraphs: [
    "I am a second-year B.Tech Computer Science & Engineering (AI & ML) student at Raj Kumar Goel Institute of Technology (RKGIT), Ghaziabad, affiliated with Dr. A.P.J. Abdul Kalam Technical University (AKTU).",
    "My current career direction is centered on AI/ML Engineering and intelligent full-stack systems. Rather than claiming early mastery, my focus is on disciplined execution: mastering data structures & algorithms in C++, writing clean Python for data analysis and ML models, and architecting real-world web applications that solve tangible problems.",
    "I actively participate in college hackathons and collaborative technical sprints, having worked on projects ranging from civic infrastructure monitoring to student wellbeing awareness and farmer procurement logistics.",
    "My daily engineering routine balances LeetCode problem solving, building production-grade software applications, experimenting with modern AI APIs, and continually expanding my foundations across backend engineering, databases, and applied data analytics."
  ],
  cards: [
    { label: 'DEGREE', value: 'B.Tech CSE (AI & ML)', color: 'text-accent-green' },
    { label: 'COLLEGE', value: 'R.K.G.I.T., Ghaziabad', color: 'text-slate-900 dark:text-white' },
    { label: 'UNIVERSITY', value: 'AKTU, Lucknow', color: 'text-accent-cyan' },
    { label: 'FOCUS', value: 'AI/ML Engineering', color: 'text-accent-violet' },
    { label: 'CURRENT', value: 'Second Year', color: 'text-slate-700 dark:text-slate-200' },
    { label: 'GRADUATION', value: '2029', color: 'text-accent-green-light' },
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    iconName: 'Code2',
    skills: [
      { name: 'C' },
      { name: 'C++' },
      { name: 'Python' },
      { name: 'JavaScript' },
    ],
  },
  {
    title: 'Frontend Development',
    iconName: 'Layout',
    skills: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript' },
      { name: 'React' },
      { name: 'Vite' },
      { name: 'Tailwind CSS' },
      { name: 'Zustand' },
      { name: 'Next.js', currentlyLearning: true },
    ],
  },
  {
    title: 'Backend Development',
    iconName: 'Server',
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'REST APIs' },
      { name: 'Prisma' },
      { name: 'JWT Concepts' },
      { name: 'Socket.io', currentlyLearning: true },
    ],
  },
  {
    title: 'Databases',
    iconName: 'Database',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'Firebase' },
      { name: 'Prisma ORM' },
      { name: 'SQL Concepts' },
    ],
  },
  {
    title: 'AI / Machine Learning',
    iconName: 'Cpu',
    skills: [
      { name: 'Artificial Intelligence' },
      { name: 'Machine Learning' },
      { name: 'AI Assistants' },
      { name: 'Generative AI' },
      { name: 'Prompt Engineering' },
      { name: 'AI APIs' },
      { name: 'Behavioural Pattern Analysis' },
      { name: 'AI-Powered Scoring' },
      { name: 'Recommendation Systems', currentlyLearning: true },
      { name: 'Computer Vision Concepts', currentlyLearning: true },
    ],
  },
  {
    title: 'Data Analysis',
    iconName: 'BarChart3',
    skills: [
      { name: 'Microsoft Excel' },
      { name: 'Data Cleaning' },
      { name: 'VLOOKUP' },
      { name: 'INDEX-MATCH' },
      { name: 'Pivot Tables' },
      { name: 'Conditional Formatting' },
      { name: 'Macros' },
      { name: 'Data Visualization' },
      { name: 'KPI Dashboards' },
      { name: 'Python' },
      { name: 'Pandas' },
      { name: 'NumPy' },
      { name: 'Matplotlib' },
      { name: 'Power Query' },
    ],
  },
  {
    title: 'DSA / Problem Solving',
    iconName: 'Binary',
    skills: [
      { name: 'Arrays' },
      { name: 'Strings' },
      { name: 'Searching' },
      { name: 'Sorting' },
      { name: 'Binary Search' },
      { name: 'Recursion' },
      { name: 'Pointers' },
      { name: 'Trees' },
      { name: 'AVL Trees' },
      { name: 'Huffman Coding' },
      { name: 'Dynamic Memory Allocation' },
      { name: 'File Handling' },
      { name: 'Time Complexity' },
      { name: 'LeetCode Problem Solving' },
    ],
  },
  {
    title: 'Tools & Platforms',
    iconName: 'Terminal',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'VS Code' },
      { name: 'npm' },
      { name: 'Render' },
      { name: 'Vercel' },
      { name: 'PostgreSQL' },
      { name: 'Prisma' },
      { name: 'Firebase' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'project-setu',
    name: 'ProjectSetu',
    category: 'GovTech / Smart Governance',
    tagline: 'Connecting Departments. Connecting Projects. Enabling Smarter Governance.',
    description:
      'An intelligent government infrastructure monitoring platform designed to bridge communication silos between municipal departments, contractors, and citizens with transparent project progress tracking.',
    problem:
      'Public civic infrastructure projects frequently face delays, opaque milestone reporting, fragmented circular distribution, and zero accessible portals for citizen accountability.',
    solution:
      'Architected a centralized multi-department monitoring system featuring digital project milestone tracking, authentic circular document archiving, and public-facing accountability dashboards.',
    features: [
      'Multi-department infrastructure project tracking and milestone monitoring',
      'Dedicated Citizen Portal for public transparency and civic inquiry',
      'Official government circulars & public documents repository',
      'Direct circular document viewer and download pipeline',
      'Intelligent project analytics and timeline progress insights',
    ],
    techStack: ['TypeScript', 'React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    githubUrl: 'https://github.com/vishalk-yadav/ProjectSetu',
    featured: true,
  },
  {
    id: 'mindflow',
    name: 'MindFlow',
    category: 'AI / EdTech / Student Wellbeing',
    tagline: 'Intelligent Student Productivity & Burnout-Risk Awareness Companion',
    description:
      'A student-focused engineering productivity and wellbeing platform that combines smart study assistance, engineering task prioritization, and non-diagnostic burnout-risk awareness.',
    problem:
      'Engineering students balance rigorous coursework, DSA practice, lab deadlines, and placement preparation without quantifiable insights into their study cadence and cognitive fatigue.',
    solution:
      'Built a full-stack student companion that analyzes workload intensity, break cadence, and task urgency to deliver structured study suggestions and early non-diagnostic burnout-risk awareness.',
    features: [
      'Intelligent study companion for technical explanations and coursework support',
      'Burnout-risk awareness score (0-100) based on workload and recovery intervals',
      'Engineering-specific task prioritization for DSA, projects, labs, and exams',
      'Custom Pomodoro and focused work session timers with session telemetry',
      'Productivity analytics and study habit balance insights',
      'Strictly non-diagnostic, privacy-first design for academic wellbeing',
    ],
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Zustand', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Google Gemini API'],
    githubUrl: 'https://github.com/vishalk-yadav/MindFlow',
    featured: true,
  },
  {
    id: 'carex',
    name: 'CareX',
    category: 'Healthcare / Safety Technology',
    tagline: 'Smart Health & Emergency Companion',
    description:
      'An assistive emergency and safety-focused software companion engineered for high-accessibility response, verified contact alerts, and intuitive emergency workflows.',
    problem:
      'In high-stress situations or physical emergencies, complex mobile navigation impedes rapid access to emergency contacts and safety status broadcast.',
    solution:
      'Engineered a responsive, high-contrast, accessible emergency assistance web app with streamlined emergency contact workflows, role-based admin controls, and safety telemetry.',
    features: [
      'Streamlined one-touch emergency contact alert interface',
      'Role-based user and admin authentication workflow',
      'Emergency contacts database and profile management',
      'Assistive safety telemetry configuration',
      'WCAG 2.2 accessible, high-contrast UI with minimal cognitive load',
    ],
    techStack: ['TypeScript', 'React 19', 'Tailwind CSS', 'Vite', 'Lucide Icons', 'Vercel'],
    githubUrl: 'https://github.com/vishalk-yadav/CareX',
    featured: true,
  },
  {
    id: 'hackidea',
    name: 'HACKIDEA',
    category: 'Hackathon / AI / Collaboration',
    tagline: 'Save Every Hack Idea',
    description:
      'A collaborative innovation platform built to preserve, evaluate, and nurture promising ideas generated during hackathons that would otherwise be abandoned post-competition.',
    problem:
      'Thousands of viable startup ideas and hackathon prototypes are discarded every year due to lack of post-event collaboration, structured pitching, and team matchmaking.',
    solution:
      'Created an AI-augmented incubator portal that evaluates hackathon proposals, pairs complementary builders, and generates investor-ready pitch decks.',
    features: [
      'Revive Dead Ideas: central repository for abandoned hackathon prototypes',
      'AI Pitch Generator for structuring value propositions and market fit',
      'HackScore algorithmic idea evaluation and viability assessment',
      'Auto Team Builder matching developers, designers, and domain specialists',
      'Evaluation dashboard for mentors and hackathon teams',
    ],
    techStack: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'AI APIs', 'REST API'],
    featured: true,
    team: {
      name: 'Go-Gitters',
      members: ['Aditya Kumar', 'Vishal Kumar Yadav', 'Virat Saroj', 'Vipin Prajapati'],
    },
    hackathon: 'College Hackathon Innovation Sprint',
  },
  {
    id: 'krishi-mitra',
    name: 'Krishi Mitra / Kisan Connect',
    category: 'AgriTech / SIH Innovation',
    tagline: 'Farmer-First Procurement Queue Management & Digital Assistance',
    description:
      'An AgriTech digital solution designed to streamline mandi grain procurement queue management, reduce waiting times for farmers, and coordinate logistical assistance.',
    problem:
      'Farmers face long, unorganized mandi queues during peak harvest seasons, resulting in multi-day waits, crop spoilage, and lack of real-time slot transparency.',
    solution:
      'Designed a digital procurement slot reservation and queue tracking system that empowers farmers with scheduled mandi arrivals and transparent procurement updates.',
    features: [
      'Digital procurement queue slot reservation system for local farmers',
      'Real-time queue tracking to eliminate multi-day mandi wait times',
      'Agricultural logistics coordination and transparent procurement updates',
      'Designed around Smart India Hackathon agricultural problem statements',
      'Accessible, low-bandwidth friendly interface tailored for rural farmers',
    ],
    techStack: ['React', 'Node.js', 'REST APIs', 'Tailwind CSS'],
    featured: true,
  },
  {
    id: 'attendify',
    name: 'Attendify',
    category: 'College Mini Project',
    tagline: 'College Attendance Management System',
    badge: 'College Mini Project',
    description:
      'A dedicated college attendance management and tracking application developed as an academic mini project to simplify daily student roll calls, subject tracking, and attendance reporting.',
    problem:
      'Manual attendance registers in college lectures are prone to errors, time-consuming to calculate at month-end, and delay critical shortage notifications to students.',
    solution:
      'Built a lightweight, straightforward web application for faculty to mark subject-wise lecture attendance with automated percentage calculation.',
    features: [
      'Subject-wise and student-wise attendance recording',
      'Automated attendance percentage calculations and shortage warnings',
      'Clean faculty management dashboard with exportable records',
      'Developed as an academic mini project for campus coursework',
    ],
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'REST API', 'Database'],
    featured: true,
  },
];

export const JOURNEY_PHASES: JourneyPhase[] = [
  {
    phase: 1,
    title: 'Programming Fundamentals',
    description:
      'Started the technical journey with foundational programming in C and C++, focusing on core logic, memory addressing, conditional branching, loops, and algorithmic problem-solving.',
    tags: ['C', 'C++', 'Programming Fundamentals', 'Problem Solving', 'Logic Building'],
  },
  {
    phase: 2,
    title: 'Data Structures & Algorithms',
    description:
      'Deepened problem-solving discipline by practicing Data Structures and Algorithms on LeetCode. Implemented and analyzed arrays, binary search, two pointers, recursion, AVL trees, and Huffman coding.',
    tags: ['Arrays', 'Searching', 'Sorting', 'Recursion', 'Pointers', 'Trees', 'AVL', 'Complexity Analysis', 'LeetCode'],
  },
  {
    phase: 3,
    title: 'Python & Data Analysis',
    description:
      'Expanded into Python and computational data analysis. Mastered advanced Microsoft Excel modeling (VLOOKUP, INDEX-MATCH, Pivot Tables, Macros) alongside Python libraries like Pandas, NumPy, and Matplotlib.',
    tags: ['Python', 'Excel', 'Data Cleaning', 'Pivot Tables', 'Macros', 'KPI Dashboards', 'Pandas', 'NumPy'],
  },
  {
    phase: 4,
    title: 'Modern Web Development',
    description:
      'Learned responsive frontend engineering with modern JavaScript, React, Vite, and Tailwind CSS. Built reusable component systems, managed client state, and designed modern developer interfaces.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vite', 'Tailwind CSS', 'Zustand', 'Component Architecture'],
  },
  {
    phase: 5,
    title: 'Backend Engineering & Databases',
    description:
      'Transitioned to full-stack engineering with Node.js and Express. Implemented REST APIs, role-based authentication with JWT, relational database schema design with PostgreSQL, and Prisma ORM.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Firebase', 'JWT Authentication', 'REST APIs'],
  },
  {
    phase: 6,
    title: 'AI & Machine Learning Foundations',
    description:
      'Diving into artificial intelligence and machine learning coursework. Exploring AI assistants, Google Gemini API integration, prompt engineering, behavioral patterns, and generative AI architectures.',
    tags: ['Artificial Intelligence', 'Machine Learning', 'Gemini API', 'Prompt Engineering', 'Pattern Analysis', 'GenAI'],
  },
  {
    phase: 7,
    title: 'Building Real-World Solutions',
    description:
      'Turning conceptual ideas into deployed, working software. Built and deployed ProjectSetu (GovTech), MindFlow (student wellbeing & productivity), CareX (safety companion), and collaborative hackathon prototypes.',
    tags: ['ProjectSetu', 'MindFlow', 'CareX', 'HACKIDEA', 'Krishi Mitra', 'Full-Stack Deployment', 'Render', 'Vercel'],
  },
  {
    phase: 8,
    title: 'Hackathons & Continuous Innovation',
    description:
      'Collaborating in student hackathons and open innovation competitions. Building with the "Go-Gitters" team on HACKIDEA and developing citizen-focused and farmer-first technology prototypes.',
    tags: ['College Hackathons', 'Open Innovation', 'Team Go-Gitters', 'SIH Challenges', 'Civic Tech', 'Continuous Learning'],
  },
];

export const EDUCATION_INFO: EducationInfo = {
  degree: 'B.Tech — Computer Science & Engineering',
  specialization: 'Artificial Intelligence & Machine Learning',
  college: 'Raj Kumar Goel Institute of Technology (RKGIT), Ghaziabad',
  university: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU)',
  graduationYear: 2029,
  currentYear: 'Second Year',
  seniorSecondary: {
    title: 'Class XII (Senior Secondary)',
    percentage: '73%',
    year: 2024,
  },
  secondary: {
    title: 'Class X (Secondary)',
    percentage: '82%',
    year: 2022,
  },
  interests: [
    'Artificial Intelligence',
    'Machine Learning',
    'Data Structures & Algorithms',
    'Software Development',
    'Full-Stack Systems',
    'Data Analysis',
    'Cloud & Deployment',
  ],
};

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'Data Analytics Job Simulation',
    issuer: 'Deloitte',
    date: 'June 2026',
    description: 'Completed practical simulations in exploratory data analysis, dataset cleaning, and forensic technology reporting.',
    badge: 'Deloitte Simulation',
  },
  {
    title: 'Cyber Security Job Simulation',
    issuer: 'Deloitte',
    date: 'June 2026',
    description: 'Executed hands-on practical exercises in cybersecurity analysis, risk assessment, and incident response fundamentals.',
    badge: 'Deloitte Simulation',
  },
  {
    title: 'Geek Genesis 2.0 (AWS Workshop)',
    issuer: 'RKGIT Ghaziabad',
    date: 'August 17, 2026',
    description: 'Hands-on cloud architecture workshop covering AWS core services, compute instances, cloud storage, and deployment workflows.',
    badge: 'Cloud Workshop',
  },
  {
    title: 'Google Prompt Wars Competition',
    issuer: 'WIE IEEE SB RKGIT',
    date: '2026',
    description: 'Active participant in rapid generative AI prompt engineering challenges, evaluating model reasoning and constraint satisfaction.',
    badge: 'AI Competition',
  },
  {
    title: 'Internship Common Aptitude Test (iCAT)',
    issuer: 'National Level',
    date: 'July 2026',
    description: 'Participated in standardized evaluation measuring technical aptitude, logical reasoning, and computational problem-solving.',
    badge: 'Aptitude Test',
  },
  {
    title: 'Viksit Uttar Pradesh @2047',
    issuer: 'State Initiative',
    date: '2026',
    description: 'Certificate of Participation for contributing actionable technical and civic suggestions toward state progress and development.',
    badge: 'Civic Innovation',
  },
];

export const ACTIVITIES: ActivityItem[] = [
  {
    title: 'Head, College Event Society',
    role: 'Event Leadership & Coordination',
    description: 'Overseeing campus technical and cultural events, leading student volunteer committees, and coordinating logistics for inter-college gatherings.',
    skills: ['Leadership', 'Event Management', 'Public Speaking', 'Coordination'],
  },
  {
    title: 'Active NSS Volunteer',
    role: 'Community Service',
    description: 'Participating in grassroots community outreach, environmental initiatives, and youth engagement programs with the National Service Scheme.',
    skills: ['Community Outreach', 'Empathy', 'Teamwork', 'Social Impact'],
  },
  {
    title: 'College Hackathons & Competitions',
    role: 'Team Collaborator & Builder',
    description: 'Regularly participating in rapid hackathons with teammates in Go-Gitters, turning problem statements into functional MVPs within 36 hours.',
    skills: ['Rapid Prototyping', 'Team Collaboration', 'Problem Solving', 'Pitching'],
  },
  {
    title: 'Competitive Volleyball Player',
    role: 'Sports & Team Dynamics',
    description: 'Regular volleyball player demonstrating consistent physical discipline, court communication, high-pressure teamwork, and tactical coordination.',
    skills: ['Team Dynamics', 'Discipline', 'Consistency', 'Resilience'],
  },
];

export const CURATED_REPOSITORIES: GitHubRepositoryStats[] = [
  {
    name: 'CareX',
    description: 'Smart Health & Emergency Companion: actively monitoring safety telemetry, verified emergency contacts, and high-accessibility response.',
    language: 'TypeScript',
    languageColor: '#3178c6',
    stars: 0,
    forks: 0,
    url: 'https://github.com/vishalk-yadav/CareX',
  },
  {
    name: 'ProjectSetu',
    description: 'Connecting Departments. Connecting Projects. Enabling Smarter Governance with civic infrastructure monitoring and circular downloads.',
    language: 'TypeScript',
    languageColor: '#3178c6',
    stars: 1,
    forks: 0,
    url: 'https://github.com/vishalk-yadav/ProjectSetu',
  },
  {
    name: 'MindFlow',
    description: '🧠 Student-focused intelligent wellbeing companion with non-diagnostic burnout-risk awareness and engineering task prioritization.',
    language: 'JavaScript',
    languageColor: '#f1e05a',
    stars: 0,
    forks: 0,
    url: 'https://github.com/vishalk-yadav/MindFlow',
  },
  {
    name: 'DSA-in-CPP',
    description: 'A comprehensive collection of Data Structures and Algorithms solutions in C++, solved on LeetCode with clean code and optimized approaches.',
    language: 'C++',
    languageColor: '#f34b7d',
    stars: 1,
    forks: 0,
    url: 'https://github.com/vishalk-yadav/DSA-in-CPP',
  },
  {
    name: 'Python-Learning',
    description: 'My Python learning journey from beginner to advanced with practice programs, data analysis notes, and mini projects.',
    language: 'Python',
    languageColor: '#3572a5',
    stars: 0,
    forks: 0,
    url: 'https://github.com/vishalk-yadav/Python-Learning',
  },
  {
    name: 'Introduction-to-Programming-C-NPTEL',
    description: 'Week-wise NPTEL Introduction to Programming in C assignments, pointer exercises, and algorithmic practice programs.',
    language: 'C',
    languageColor: '#555555',
    stars: 0,
    forks: 0,
    url: 'https://github.com/vishalk-yadav/Introduction-to-Programming-C-NPTEL',
  },
];

export const FEATURED_REPOSITORIES = CURATED_REPOSITORIES;

export const STATIC_GITHUB_STATS: GitHubStats = {
  username: 'vishalk-yadav',
  reposCount: 8,
  starsCount: 2,
  followersCount: 1,
  avatarUrl: 'https://avatars.githubusercontent.com/u/233337559?v=4',
  bio: 'CSE (AI & ML) Student | C/C++ • Python • DSA • AI/ML • Full-Stack | Building ideas into real-world solutions 🚀',
  htmlUrl: 'https://github.com/vishalk-yadav',
  repositories: CURATED_REPOSITORIES,
  status: 'cached',
};

export const STATIC_LEETCODE_STATS: LeetCodeStats = {
  username: 'vishalkr_yadav',
  totalSolved: 64,
  easySolved: 53,
  mediumSolved: 10,
  hardSolved: 1,
  ranking: 2342878,
  acceptanceRate: '75.0%',
  cProblemsSolved: 50,
  cppProblemsSolved: 28,
  topTopics: [
    { name: 'Math', count: 40 },
    { name: 'Array', count: 22 },
    { name: 'Bit Manipulation', count: 13 },
    { name: 'Hash Table', count: 9 },
    { name: 'Sorting', count: 9 },
    { name: 'Binary Search', count: 8 },
    { name: 'Two Pointers', count: 6 },
    { name: 'Recursion', count: 6 },
    { name: 'Dynamic Programming', count: 5 },
    { name: 'Simulation', count: 5 },
    { name: 'Divide and Conquer', count: 4 },
  ],
  status: 'cached',
};
