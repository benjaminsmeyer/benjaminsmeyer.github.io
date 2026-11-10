import type { Answer, Result, Sources } from './app.contract.d.ts';

// Portfolio content. The 2027 résumé is the source of truth for experience,
// skills and projects; bensmeyer.com supplies the tone, the bio and the links.
export const grants = '';

type Profile = Result<'profile'>;
type Job = Result<'experience'>[number];
type Project = Result<'projects'>[number];
type SkillGroup = Result<'skills'>[number];
type Link = Result<'links'>[number];

const profile: Profile = {
  name: 'Benjamin Meyer',
  title: 'Software Engineer at Microsoft',
  intro: "I build across the full stack and love solving problems I haven't seen before.",
  bio:
    'I build full-stack, agentic AI features at Microsoft in Redmond, and graduated summa cum laude ' +
    'in Computer Science from Northeastern University. I like turning complex problems into products ' +
    'people use every day. Outside of work you can usually find me watching movies, playing tennis, ' +
    'skiing, or planning my next trip.',
  location: 'Redmond, WA',
  education: 'B.S. Computer Science, Minor in Business Administration · Northeastern University · 2026',
  honors: 'GPA 3.92 · Summa Cum Laude · Teaching Assistant, Fundamentals of CS I and II',
};

const experience: Job[] = [
  {
    id: 'microsoft-swe',
    company: 'Microsoft',
    role: 'Software Engineer',
    dates: 'July 2026 – Present',
    place: 'Redmond, WA',
    url: 'https://www.microsoft.com',
    points: [
      'Delivered a full-stack agentic AI feature to production in under 6 weeks, owning TypeScript UX, C# backend APIs, LLM orchestration and prompt engineering.',
      'Built MCP mail tools that give an AI agent structured access to email, extending it beyond chat into real user workflows at scale.',
      'Engineered a multi-turn LLM evaluation framework in Python spanning 50,000+ conversations across 150 industry verticals, with dual independent LLM judges.',
      'Architected secure-by-design APIs with least-privilege access and server-side authentication, rolled out behind feature flags and automated tests.',
      'Authored 1,000+ pull requests across 50 repositories in 12 weeks by orchestrating parallel AI coding agents behind CI/CD quality gates.',
    ],
    tags: ['TypeScript', 'C#', 'Python', 'MCP', 'Azure OpenAI'],
  },
  {
    id: 'microsoft-intern',
    company: 'Microsoft',
    role: 'Software Engineer Intern',
    dates: 'May 2025 – Aug. 2025',
    place: 'Redmond, WA',
    url: 'https://www.microsoft.com/en-us/copilot',
    points: [
      'Architected and shipped a meeting insights feature for Copilot for Sales, using GPT-4 and Microsoft Graph to generate AI meeting briefs in Outlook.',
      'Built accessible full-stack experiences with React, TypeScript, Redux and Fluent UI on ASP.NET Core and C# APIs, with localization and WCAG compliance.',
      'Led deployment to Azure Kubernetes Service with CI/CD pipelines in Azure DevOps.',
    ],
    tags: ['React', 'TypeScript', 'C#', 'ASP.NET Core', 'Kubernetes'],
  },
  {
    id: 'nara-logics',
    company: 'Nara Logics',
    role: 'Software Engineer Co-op',
    dates: 'Jan. 2025 – May 2025',
    place: 'Boston, MA',
    url: 'https://naralogics.com',
    points: [
      'Developed serverless Python and FastAPI APIs serving AI recommendation systems at 1,000+ requests per minute.',
      'Deployed ETL pipelines on AWS (EMR, S3, Lambda) processing 100 GB+ daily for ML workloads.',
      'Introduced Redis caching and parallel processing that cut end-to-end processing time by 40%.',
    ],
    tags: ['Python', 'FastAPI', 'AWS', 'Redis'],
  },
  {
    id: 'harbourvest',
    company: 'HarbourVest Partners',
    role: 'Security Engineer Co-op',
    dates: 'Jan. 2024 – June 2024',
    place: 'Boston, MA',
    url: 'https://www.harbourvest.com',
    points: [
      'Built a Python automation service integrating Splunk and CrowdStrike that cut incident response from 4 hours to 15 minutes, saving 300+ hours a year.',
      'Designed graph traversal algorithms to cross-reference 500M+ breached credentials with company accounts, driving proactive alerts and automated resets.',
    ],
    tags: ['Python', 'Splunk', 'CrowdStrike', 'Automation'],
  },
];

const projects: Project[] = [
  {
    id: 'nlp-emotion',
    name: 'NLP Emotion Analysis',
    dates: 'Feb. 2026 – Mar. 2026',
    summary:
      'Trained and benchmarked Naive Bayes, Logistic Regression, Bi-LSTM and fine-tuned DistilBERT on 20,000+ labeled tweets; DistilBERT reached a 92% F1 score across six emotions, beating baselines by 15%+ on macro F1.',
    tags: ['Python', 'PyTorch', 'TensorFlow', 'Transformers'],
    url: 'https://github.com/benjaminsmeyer/nlp-emotion-analysis',
  },
  {
    id: 'pips-solver',
    name: 'NYTimes Pips AI Solver',
    dates: 'Sep. 2025 – Dec. 2025',
    summary:
      'AI agents using CSP backtracking and simulated annealing that solve NYT Pips domino puzzles with a 95%+ solve rate in under a second, served through a Flask REST API, a live GUI and a batch CLI.',
    tags: ['Python', 'Flask', 'REST APIs', 'NumPy'],
    url: 'https://github.com/benjaminsmeyer/nytimes-pips-ai',
  },
  {
    id: 'kambaz',
    name: 'Kambaz Learning Management System',
    dates: '',
    summary:
      'A full-stack learning management system in Next.js and MongoDB supporting 50+ courses, assignment workflows and three user roles.',
    tags: ['Next.js', 'TypeScript', 'MongoDB'],
    url: 'https://github.com/benjaminsmeyer/kambaz-next-js',
  },
  {
    id: 'visualag',
    name: 'visuaLAG · HackMIT 2023',
    dates: '',
    summary:
      'A language-agnostic command-line tool that visualizes and gamifies LeetCode execution, so people build algorithm intuition from visual feedback instead of pass/fail results.',
    tags: ['Rust', 'Python', 'CLI'],
    url: 'https://github.com/benjaminsmeyer/hackmit2023',
  },
];

const skills: SkillGroup[] = [
  { id: 'languages', label: 'Languages', items: 'TypeScript, Python, JavaScript, Java, C#, Kotlin, SQL' },
  {
    id: 'technologies',
    label: 'Technologies',
    items: 'React, Redux, Node.js, Flask, ASP.NET Core, Tailwind CSS, FastAPI, REST APIs, Azure OpenAI, MCP',
  },
  { id: 'databases', label: 'Databases', items: 'PostgreSQL, MySQL, MongoDB, Redis, DynamoDB, Elasticsearch' },
  {
    id: 'infrastructure',
    label: 'Infrastructure',
    items: 'Azure, AWS, Docker, Kubernetes, Git, Azure DevOps, GitHub Actions, CI/CD, Linux',
  },
];

const links: Link[] = [
  { id: 'email', label: 'Email', detail: 'bmeyerswe@gmail.com', url: 'mailto:bmeyerswe@gmail.com' },
  { id: 'linkedin', label: 'LinkedIn', detail: 'linkedin.com/in/benjaminsmeyer', url: 'https://linkedin.com/in/benjaminsmeyer' },
  { id: 'github', label: 'GitHub', detail: 'github.com/benjaminsmeyer', url: 'https://github.com/benjaminsmeyer' },
  { id: 'website', label: 'Website', detail: 'bensmeyer.com', url: 'https://bensmeyer.com' },
];

const sources: Sources = {
  profile: () => profile,
  experience: () => experience,
  projects: () => projects,
  skills: () => skills,
  links: () => links,
};

export const answer: Answer = (source, args, store, storage, native) =>
  sources[source](args, store, storage, native);
