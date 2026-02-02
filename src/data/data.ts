/* ─── Hero ─── */

export const heroData = {
  name: 'Isaiah',
  primaryRole: 'Software Engineer',
  secondaryRole: 'Open Source Contributor',
  statusText: 'Currently building',
  statusLink: {
    label: 'this portfolio',
    url: '#',
  },
};

/* ─── Folders ─── */

export type FolderVariant = 'experience' | 'projects' | 'skills' | 'contact';

export interface FolderItem {
  id: string;
  label: string;
  sublabel?: string;
  url?: string;
}

export interface FolderData {
  id: string;
  variant: FolderVariant;
  label: string;
  items: FolderItem[];
}

export const folderData: FolderData[] = [
  {
    id: 'experience',
    variant: 'experience',
    label: 'Experience',
    items: [
      { id: 'exp-1', label: 'Company A', sublabel: '2023 – Present' },
      { id: 'exp-2', label: 'Company B', sublabel: '2021 – 2023' },
      { id: 'exp-3', label: 'Company C', sublabel: '2019 – 2021' },
    ],
  },
  {
    id: 'projects',
    variant: 'projects',
    label: 'Projects',
    items: [
      { id: 'proj-1', label: 'Project Alpha' },
      { id: 'proj-2', label: 'Project Beta' },
      { id: 'proj-3', label: 'Project Gamma' },
    ],
  },
  {
    id: 'skills',
    variant: 'skills',
    label: 'Skills',
    items: [
      { id: 'skill-1', label: 'React' },
      { id: 'skill-2', label: 'TypeScript' },
      { id: 'skill-3', label: 'Node.js' },
      { id: 'skill-4', label: 'PostgreSQL' },
      { id: 'skill-5', label: 'AWS' },
      { id: 'skill-6', label: 'Docker' },
      { id: 'skill-7', label: 'GraphQL' },
      { id: 'skill-8', label: 'Python' },
    ],
  },
  {
    id: 'contact',
    variant: 'contact',
    label: 'Contact',
    items: [
      { id: 'contact-cta', label: "Let's work together" },
      {
        id: 'contact-link',
        label: 'Send a message',
        url: 'mailto:isaiah@example.com',
      },
    ],
  },
];

/* ─── Projects ─── */

export interface ProjectData {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  tags: string[];
  status?: 'live' | 'inProgress';
  repoUrl?: string;
  demoUrl?: string;
}

export const projectData: ProjectData[] = [
  {
    id: 'proj-1',
    name: 'Project Alpha',
    shortDescription: 'A scalable data pipeline built with modern tooling.',
    longDescription:
      'Project Alpha ingests real-time event streams and transforms them into actionable dashboards. Built with a microservices architecture, it handles 10k+ events per second with sub-100ms latency. The frontend uses React with WebSocket connections for live updates.',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    status: 'live',
    repoUrl: 'https://github.com/example/project-alpha',
    demoUrl: 'https://example.com/alpha',
  },
  {
    id: 'proj-2',
    name: 'Project Beta',
    shortDescription:
      'An open-source CLI tool for automating deployment workflows.',
    longDescription:
      'Project Beta simplifies CI/CD configuration by providing a declarative YAML format that compiles down to native pipeline definitions. It supports GitHub Actions, GitLab CI, and CircleCI out of the box. Adopted by 200+ teams internally.',
    tags: ['Python', 'Docker', 'AWS'],
    status: 'inProgress',
    repoUrl: 'https://github.com/example/project-beta',
  },
  {
    id: 'proj-3',
    name: 'Project Gamma',
    shortDescription:
      'A real-time collaborative whiteboard with conflict-free sync.',
    longDescription:
      'Project Gamma implements a CRDT-based sync engine that allows multiple users to edit a shared canvas without conflicts, even on poor network connections. The rendering layer uses an offscreen canvas for 60fps performance with thousands of objects.',
    tags: ['React', 'TypeScript', 'GraphQL', 'PostgreSQL'],
    status: 'live',
    repoUrl: 'https://github.com/example/project-gamma',
    demoUrl: 'https://example.com/gamma',
  },
];

/* ─── Contact ─── */

export const contactData = {
  email: 'isaiah@example.com',
  linkedinUrl: 'https://linkedin.com/in/isaiahoo',
  githubUrl: 'https://github.com/isaiahoo',
};
