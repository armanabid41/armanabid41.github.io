import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard.jsx';
import SectionHeading from './SectionHeading.jsx';
import { projects } from '../data/projects.js';

export default function FeaturedProjects() {
  return (
    <section aria-labelledby="featured" className="wrap py-12">
      <SectionHeading title="Featured projects" intro="Selected engineering work." />
      <div className="grid gap-x-8 gap-y-12 md:grid-cols-3">
        {projects.filter((p) => !p.placeholder).map((p, i) => <ProjectCard key={p.slug} project={p} index={i} />)}
      </div>
      <Link to="/projects" className="link-u mt-10 inline-block text-sm">All projects</Link>
    </section>
  );
}
