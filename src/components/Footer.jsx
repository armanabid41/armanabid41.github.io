import SocialLinks from './SocialLinks.jsx';
import VisitorCounter from './VisitorCounter.jsx';
import { site } from '../data/siteData.js';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line py-12">
      <div className="wrap grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-serif text-2xl">{site.name}</p>
          <p className="mt-1 text-sm text-muted">Electrical Engineering Student · Researcher · Embedded Systems Enthusiast</p>
          <SocialLinks className="mt-5" />
        </div>
        <VisitorCounter />
      </div>
      <p className="wrap mt-10 text-xs text-muted">© 2026 {site.name}</p>
    </footer>
  );
}
