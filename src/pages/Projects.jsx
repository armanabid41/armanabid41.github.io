import Seo from '../lib/seo.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { projects } from '../data/projects.js';

export default function Projects() {
  return (
    <div className="wrap pt-14">
      <Seo title="Projects" description="Engineering projects by Arman Hossain Abid: patient monitoring, audio frequency analysis, and analog tone generation." />
      <h1 className="h-display text-4xl sm:text-5xl">Projects</h1>
      <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => <ProjectCard key={p.slug} project={p} index={i % 3} />)}
      </div>
    </div>
  );
}
