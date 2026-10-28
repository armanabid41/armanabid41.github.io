// ===== EDIT YOUR PROJECTS BELOW =====
const P = '[Add information here.]';
const body = { overview: P, problem: P, objective: P, approach: P, architecture: P, implementation: P, results: P, challenges: P, learned: P, future: P };

export const projects = [
  {
    slug: 'patient-monitoring-system',
    title: 'Arduino & Bluetooth Based Patient Monitoring System',
    category: 'Embedded Systems',
    summary: '[Add project description here.]',
    tech: ['Arduino', 'Bluetooth'],
    cover: '/images/projects/project-01-cover.jpg', // REPLACE WITH PROJECT IMAGE
    gallery: ['/images/projects/project-01-01.jpg', '/images/projects/project-01-02.jpg'], // REPLACE WITH PROJECT IMAGE
    ...body,
  },
  {
    slug: 'audio-frequency-autocorrelation',
    title: 'Audio Frequency Analysis Using Autocorrelation Method',
    category: 'Signal Processing',
    summary: '[Add project description here.]',
    tech: ['[Add technologies]'],
    cover: '/images/projects/project-02-cover.jpg', // REPLACE WITH PROJECT IMAGE
    gallery: [],
    ...body,
  },
  {
    slug: 'astable-multivibrator-tones',
    title: 'Generating Musical Tones Using Astable Multivibrator Logic',
    category: 'Analog Electronics',
    summary: '[Add project description here.]',
    tech: ['[Add technologies]'],
    cover: '/images/projects/project-03-cover.jpg', // REPLACE WITH PROJECT IMAGE
    gallery: [],
    ...body,
  },
  {
    slug: 'future-project',
    title: '[Add Future Project]',
    category: '[Add category]',
    summary: '[Add project description here.]',
    tech: ['[Add technologies]'],
    cover: '/images/projects/project-04-cover.jpg', // REPLACE WITH PROJECT IMAGE
    gallery: [],
    placeholder: true,
    ...body,
  },
];

export const caseStudySections = [
  ['overview', 'Overview'], ['problem', 'Problem'], ['objective', 'Objective'], ['approach', 'Approach'],
  ['architecture', 'System architecture'], ['implementation', 'Implementation'], ['results', 'Results'],
  ['challenges', 'Challenges'], ['learned', 'What I learned'], ['future', 'Future improvements'],
];
