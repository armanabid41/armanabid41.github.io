import { Github, Linkedin, Instagram, Facebook, GraduationCap } from 'lucide-react';
import { site } from '../data/siteData.js';

const icons = { github: Github, linkedin: Linkedin, instagram: Instagram, facebook: Facebook, researchgate: GraduationCap };

export default function SocialLinks({ withLabels = false, className = '' }) {
  return (
    <ul className={`flex flex-wrap gap-3 ${className}`}>
      {site.socials.map((s) => {
        const Icon = icons[s.id];
        return (
          <li key={s.id}>
            <a href={s.url} target="_blank" rel="noopener noreferrer" aria-label={`${s.label} (opens in a new tab)`}
              className={`flex items-center gap-2 border border-line transition-colors hover:border-accent hover:text-accent ${withLabels ? 'px-4 py-2.5 text-sm' : 'h-9 w-9 justify-center'}`}>
              <Icon size={16} aria-hidden="true" />{withLabels && s.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
