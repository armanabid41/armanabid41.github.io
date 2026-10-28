import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder.jsx';
import Reveal from './Reveal.jsx';

export default function ProjectCard({ project: p, index = 0 }) {
  return (
    <Reveal delay={index * 0.08}>
      <article className="group">
        <Link to={`/projects/${p.slug}`} aria-label={`View project: ${p.title}`} className="block overflow-hidden">
          {/* REPLACE WITH PROJECT IMAGE */}
          <ImagePlaceholder src={p.cover} alt={`Cover image for ${p.title}`}
            className="aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-[1.03]" />
        </Link>
        <p className="mt-4 text-sm text-accent">{p.category}</p>
        <h3 className="mt-1 font-serif text-xl leading-snug">{p.title}</h3>
        <p className="mt-2 text-sm text-muted">{p.summary}</p>
        <p className="mt-3 text-xs text-muted">{p.tech.join(' · ')}</p>
        <Link to={`/projects/${p.slug}`} className="link-u mt-4 inline-flex items-center gap-1 text-sm">View Project <ArrowUpRight size={14} aria-hidden="true" /></Link>
      </article>
    </Reveal>
  );
}
