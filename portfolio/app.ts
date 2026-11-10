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
  intro: 'Full-stack engineer building agentic AI products people use every day.',
  bio:
    "I'm a software engineer in Redmond, building AI features end to end: TypeScript interfaces, " +
    'C# services, LLM orchestration and the evaluations that keep them honest. I graduated summa cum laude ' +
    "in Computer Science from Northeastern, and I'm happiest with a problem I haven't seen before. " +
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
      'Shipped a full-stack agentic AI feature to production in under six weeks, owning the TypeScript UX, C# APIs, LLM orchestration and prompts.',
      'Built MCP mail tools that let an AI agent work with email, taking it from chat into real workflows at scale.',
      'Created a Python framework that evaluates 50,000+ multi-turn conversations across 150 industries, with two independent LLM judges to surface failures that averages hide.',
      'Designed least-privilege APIs with server-side auth that keeps credentials out of the browser, released behind feature flags and automated tests.',
      'Opened 1,000+ pull requests across 50 repos in 12 weeks by running parallel AI coding agents through CI/CD quality gates, and packaged reusable agent skills for the team.',
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
      'Designed and shipped meeting insights for Copilot for Sales: GPT-4 and Microsoft Graph write pre-meeting briefs right inside Outlook.',
      'Built accessible, localized interfaces in React, TypeScript, Redux and Fluent UI on ASP.NET Core APIs, to WCAG standards.',
      'Led the rollout to Azure Kubernetes Service with CI/CD pipelines in Azure DevOps.',
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
      'Built serverless Python and FastAPI services powering AI recommendations at 1,000+ requests a minute.',
      'Ran AWS ETL pipelines (EMR, S3, Lambda) moving 100 GB+ a day for ML workloads.',
      'Cut end-to-end processing time by 40% with Redis caching and parallelism.',
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
      'Automated incident triage across Splunk and CrowdStrike in Python, taking response time from 4 hours to 15 minutes and saving 300+ hours a year.',
      'Matched 500M+ breached credentials against company accounts with graph traversal, triggering alerts and automatic password resets.',
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
  { id: 'website', label: 'Website', detail: 'bensmeyer.com', url: 'https://bensmeyer.com', symbol: 'symbol:link' },
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
