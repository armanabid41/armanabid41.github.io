import { Link, useParams } from 'react-router-dom';
import Seo from '../lib/seo.jsx';
import ImagePlaceholder from '../components/ImagePlaceholder.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { projects, caseStudySections } from '../data/projects.js';

export default function ProjectDetail() {
  const { slug } = useParams();
  const p = projects.find((x) => x.slug === slug);
  if (!p) {
    return (
      <div className="wrap py-24">
        <Seo title="Project not found" description="This project does not exist." />
        <h1 className="h-display text-3xl">Project not found</h1>
        <Link to="/projects" className="link-u mt-4 inline-block">Back to projects</Link>
      </div>
    );
  }
  const related = projects.filter((x) => x.slug !== p.slug && !x.placeholder).slice(0, 2);
  return (
    <article className="wrap pt-14">
      <Seo title={p.title} description={`Project case study: ${p.title}. ${p.summary}`} />
      <Link to="/projects" className="link-u text-sm">All projects</Link>
      <header className="mt-6 grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-end">
        <div>
          <p className="text-sm text-accent">{p.category}</p>
          <h1 className="h-display mt-2 text-3xl sm:text-4xl lg:text-5xl">{p.title}</h1>
          <p className="mt-4 text-muted">{p.tech.join(' · ')}</p>
        </div>
        {/* REPLACE WITH PROJECT IMAGE */}
        <ImagePlaceholder src={p.cover} alt={`Cover image for ${p.title}`} eager className="aspect-[4/3] w-full" />
      </header>
      <div className="mt-14">
        {caseStudySections.map(([k, label]) => (
          <section key={k} className="grid gap-3 border-t border-line py-8 md:grid-cols-[1fr_2.2fr]">
            <h2 className="font-serif text-2xl">{label}</h2>
            <p className="max-w-prose text-muted">{p[k]}</p>
          </section>
        ))}
        <section className="grid gap-3 border-t border-line py-8 md:grid-cols-[1fr_2.2fr]">
          <h2 className="font-serif text-2xl">Tools & technologies</h2>
          <ul className="flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="border border-line px-3 py-1 text-sm">{t}</li>)}</ul>
        </section>
        <section className="border-t border-line py-8">
          <h2 className="mb-6 font-serif text-2xl">Gallery</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {(p.gallery.length ? p.gallery : [p.cover]).map((g, i) => (
              /* REPLACE WITH PROJECT IMAGE */
              <ImagePlaceholder key={g} src={g} alt={`${p.title}, gallery image ${i + 1}`} className="aspect-[4/3] w-full" />
            ))}
          </div>
        </section>
      </div>
      <section className="border-t border-line py-10">
        <h2 className="mb-8 font-serif text-2xl">Related projects</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{related.map((r) => <ProjectCard key={r.slug} project={r} />)}</div>
      </section>
    </article>
  );
}
