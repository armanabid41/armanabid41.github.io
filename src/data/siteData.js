// ===== EDIT YOUR INFORMATION BELOW =====
export const site = {
  name: 'Arman Hossain Abid',
  role: 'Electrical Engineering Student',
  subtitle: 'Researcher · Embedded Systems Enthusiast',
  tagline: 'I explore electronics, embedded systems, and intelligent technologies while building, experimenting, and documenting what I learn.',
  url: (import.meta.env.VITE_SITE_URL || 'https://example.com').replace(/\/$/, ''),
  email: '[Add email address]', // shown as a mailto link once it contains "@"
  university: 'International Islamic University Chittagong',
  nav: [
    ['Home', '/'], ['About', '/about'], ['Projects', '/projects'],
    ['Journey', '/journey'], ['Life', '/life'], ['Notes', '/notes'], ['Contact', '/contact'],
  ],
  socials: [
    { id: 'github', label: 'GitHub', url: 'https://github.com/armanabid41', primary: true },
    { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/armanabideee/', primary: true },
    { id: 'researchgate', label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Arman-Abid?ev=hdr_xprf', primary: true },
    { id: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/crybabyabid/', primary: false },
    { id: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/arman.hossain.abid.2024', primary: false },
  ],
  currently: [
    { icon: '🎓', text: 'EEE @ International Islamic University Chittagong' },
    { icon: '🔬', text: 'Research & Engineering Projects' },
    { icon: '⚡', text: 'Embedded Systems' },
    { icon: '🤖', text: 'Currently exploring AI & Machine Learning' },
  ],
  education: [
    { school: 'Chittagong Engineering University School & College', detail: '[Add details here.]' },
    { school: 'International Islamic University Chittagong', detail: 'Department of EEE · 4th year · Expected graduation 2027' },
  ],
  skills: ['Python', 'MATLAB', 'LTspice', 'Arduino', 'ESP32'],
  learning: ['Machine Learning', 'Artificial Intelligence'],
  interests: ['Watching movies'],
  intro: '[Add a short personal introduction here.]',
  // Shown only when VITE_STATS_ENDPOINT returns real numbers.
  stats: { enabled: true, comingSoonText: 'Visitor statistics coming soon.', since: 2026 },
};
