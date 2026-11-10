import type { Answer, Result, Sources } from './app.contract.d.ts';

// Portfolio content. The 2027 résumé is the source of truth for experience,
// skills and projects; bensmeyer.com supplies the tone, the bio and the links.
export const grants = '';

type Profile = Result<'profile'>;
type Job = Result<'experience'>[number];
type Project = Result<'projects'>[number];
type SkillGroup = Result<'skills'>[number];
type Link = Result<'links'>[number];
type School = Result<'education'>;

const profile: Profile = {
  name: 'Benjamin Meyer',
  title: 'Software Engineer at Microsoft',
  intro: 'Building agentic AI products people use every day at Microsoft.',
  bio:
    "I'm a software engineer on the Apps and Agents team at Microsoft in Redmond, building AI features end to end: " +
    'TypeScript interfaces, C# services, LLM orchestration and the evaluations that keep them honest. I graduated ' +
    "summa cum laude in Computer Science from Northeastern, and I'm happiest with a problem I haven't seen before. " +
    'Off the clock: movies, tennis, skiing, and planning the next trip.',
  location: 'Redmond, WA',
};

const education: School = {
  school: 'Northeastern University',
  degree: 'Bachelor of Science in Computer Science',
  minor: 'Minor in Business Administration',
  dates: 'Sep 2022 – May 2026',
  place: 'Boston, MA',
  url: 'https://www.northeastern.edu',
  honors: ['Summa Cum Laude', 'GPA 3.92 / 4.00'],
  coursework: ['Programming Languages', 'Computer Systems', 'Machine Learning', 'Large Language Models', 'Object-Oriented Design'],
};

const experience: Job[] = [
  {
    id: 'microsoft-swe',
    company: 'Microsoft',
    role: 'Software Engineer',
    dates: 'Jul 2026 – Now',
    place: 'Redmond, WA',
    url: 'https://www.microsoft.com',
    points: [
      'Delivered a full-stack agentic AI feature to production in under 6 weeks, owning end-to-end development across TypeScript UX, C# backend APIs, LLM orchestration, and prompt engineering.',
      'Built MCP mail tools that give an AI agent structured access to email, extending its capabilities beyond chat into real user workflows at scale.',
      'Engineered a scalable multi-turn LLM evaluation framework in Python spanning 50,000+ conversations across 150 industry verticals, using LLM-as-a-judge scoring with dual independent judges to surface failure modes hidden by aggregate metrics.',
      'Architected secure-by-design APIs with least-privilege access control and server-side authentication that keeps credentials out of the browser, de-risking production rollout through feature flags and automated testing.',
      'Authored 1,000+ pull requests across 50 repositories in 12 weeks by orchestrating parallel AI coding agents with CI/CD quality gates for build, test, code review, and live testing; built reusable agent skills for team developer workflows.',
    ],
    tags: ['TypeScript', 'C#', 'Python', 'MCP', 'Azure OpenAI'],
  },
  {
    id: 'microsoft-intern',
    company: 'Microsoft',
    role: 'Software Engineer Intern',
    dates: 'May – Aug 2025',
    place: 'Redmond, WA',
    url: 'https://www.microsoft.com/en-us/copilot',
    points: [
      'Architected and shipped a meeting insights feature for Copilot for Sales, integrating GPT-4 and Microsoft Graph APIs to generate AI-powered meeting briefs directly within Outlook, eliminating pre-meeting research for sales teams.',
      'Built accessible full-stack experiences with React, TypeScript, Redux, and Fluent UI backed by ASP.NET Core and C# APIs, supporting enterprise-grade localization and WCAG compliance.',
      'Led cloud deployment to Azure Kubernetes Service (AKS) with CI/CD pipelines via Azure DevOps, ensuring high reliability, security, and maintainability at scale.',
    ],
    tags: ['React', 'TypeScript', 'C#', 'ASP.NET Core', 'Kubernetes'],
  },
  {
    id: 'nara-logics',
    company: 'Nara Logics',
    role: 'Software Engineer Co-op',
    dates: 'Jan – May 2025',
    place: 'Boston, MA',
    url: 'https://naralogics.com',
    points: [
      'Developed serverless APIs using Python and FastAPI, serving AI-driven recommendation systems at 1,000+ requests/min.',
      'Deployed ETL pipelines on AWS (EMR, S3, Lambda) processing 100GB+ daily for ML workloads.',
      'Introduced Redis caching layers and parallel processing optimizations that reduced end-to-end processing time by 40%.',
    ],
    tags: ['Python', 'FastAPI', 'AWS', 'Redis'],
  },
  {
    id: 'harbourvest',
    company: 'HarbourVest Partners',
    role: 'Security Engineer Co-op',
    dates: 'Jan – Jun 2024',
    place: 'Boston, MA',
    url: 'https://www.harbourvest.com',
    points: [
      'Built Python automation service integrating Splunk and CrowdStrike to triage and remediate security incidents, cutting response time from 4 hours to 15 minutes and saving 300+ hours of manual effort annually.',
      'Designed graph traversal algorithms to cross-reference 500M+ compromised credentials from public breach data with company accounts, enabling proactive alerts and automated password reset workflows.',
    ],
    tags: ['Python', 'Splunk', 'CrowdStrike', 'Automation'],
  },
  {
    id: 'northeastern-ta',
    company: 'Northeastern University',
    role: 'Teaching Assistant',
    dates: '2023 – 2024',
    place: 'Boston, MA',
    url: 'https://www.northeastern.edu',
    points: [
      'Fundamentals of Computer Science I (Fall 2023) and Fundamentals of Computer Science II (Spring 2024).',
    ],
    tags: [],
  },
];

const projects: Project[] = [
  {
    id: 'pips-solver',
    name: 'NYTimes Pips AI Solver',
    meta: '2025',
    summary:
      'AI agents that solve NYT Pips domino puzzles with CSP backtracking and simulated annealing: a 95%+ solve rate in under a second, behind a Flask API, a live GUI and a batch CLI.',
    tags: ['Python', 'Flask', 'NumPy'],
    url: 'https://github.com/benjaminsmeyer/nytimes-pips-ai',
  },
  {
    id: 'kambaz',
    name: 'Kambaz',
    meta: 'Learning management',
    summary:
      'A full-stack learning management system in Next.js and MongoDB, with 50+ courses, assignment workflows and three user roles.',
    tags: ['Next.js', 'TypeScript', 'MongoDB'],
    url: 'https://github.com/benjaminsmeyer/kambaz-next-js',
  },
  {
    id: 'nlp-emotion',
    name: 'NLP Emotion Analysis',
    meta: '2026',
    summary:
      'Four emotion classifiers benchmarked on 20,000+ tweets, from Naive Bayes to fine-tuned DistilBERT, which reached 92% F1 across six emotions and beat the baselines by 15%+.',
    tags: ['PyTorch', 'TensorFlow', 'Transformers'],
    url: 'https://github.com/benjaminsmeyer/nlp-emotion-analysis',
  },
  {
    id: 'visualag',
    name: 'visuaLAG',
    meta: 'HackMIT 2023',
    summary:
      'A command-line tool that turns LeetCode runs into step-by-step visuals, so algorithm intuition comes from watching code execute, not from pass or fail.',
    tags: ['Rust', 'Python', 'CLI'],
    url: 'https://github.com/benjaminsmeyer/hackmit2023',
  },
  {
    id: 'battlesalvo',
    name: 'BattleSalvo',
    meta: 'Strategy game',
    summary:
      'A battleship strategy game in Java with single-player and multiplayer modes: an AI opponent that places ships and picks its shots, and a real-time client-server socket layer.',
    tags: ['Java', 'OOP', 'Sockets', 'Gradle'],
    url: 'https://github.com/benjaminsmeyer/BattleSalvo',
  },
  {
    id: 'giveback',
    name: 'GiveBack',
    meta: 'TreeHacks 2023',
    summary:
      'A donation platform that connects people with 100+ nonprofits, matching them to causes with NLP and tracking giving through leaderboards and personal views.',
    tags: ['React', 'Python', 'FastAPI', 'spaCy'],
    url: 'https://github.com/benjaminsmeyer/GiveBack',
  },
];

const skills: SkillGroup[] = [
  { id: 'languages', label: 'Languages', items: ['TypeScript', 'Python', 'JavaScript', 'Java', 'C#', 'Kotlin', 'SQL'] },
  {
    id: 'technologies',
    label: 'Frameworks & AI',
    items: ['React', 'Redux', 'Node.js', 'Flask', 'ASP.NET Core', 'Tailwind CSS', 'FastAPI', 'REST APIs', 'Azure OpenAI', 'MCP'],
  },
  { id: 'ai-tools', label: 'AI Dev Tools', items: ['Claude Code', 'Codex', 'GitHub Copilot'] },
  { id: 'databases', label: 'Data', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'DynamoDB', 'Elasticsearch'] },
  {
    id: 'infrastructure',
    label: 'Cloud & DevOps',
    items: ['Azure', 'AWS', 'Docker', 'Kubernetes', 'Git', 'Azure DevOps', 'GitHub Actions', 'CI/CD', 'Linux'],
  },
];

const links: Link[] = [
  { id: 'email', label: 'Email', detail: 'hello@bensmeyer.com', url: 'mailto:hello@bensmeyer.com', symbol: 'symbol:mail' },
  { id: 'linkedin', label: 'LinkedIn', detail: 'linkedin.com/in/benjaminsmeyer', url: 'https://linkedin.com/in/benjaminsmeyer', symbol: 'symbol:icon.linkedin' },
  { id: 'github', label: 'GitHub', detail: 'github.com/benjaminsmeyer', url: 'https://github.com/benjaminsmeyer', symbol: 'symbol:icon.github' },
];

const sources: Sources = {
  profile: () => profile,
  experience: () => experience,
  education: () => education,
  projects: () => projects,
  skills: () => skills,
  links: () => links,
};

export const answer: Answer = (source, args, store, storage, native) =>
  sources[source](args, store, storage, native);
