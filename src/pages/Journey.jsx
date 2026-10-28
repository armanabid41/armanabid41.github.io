import Seo from '../lib/seo.jsx';
import Timeline from '../components/Timeline.jsx';
import { journey } from '../data/journey.js';

export default function Journey() {
  return (
    <div className="wrap pt-14">
      <Seo title="Journey" description="The path of Arman Hossain Abid from school to EEE at International Islamic University Chittagong, projects, research, and expected graduation in 2027." />
      <h1 className="h-display mb-14 text-4xl sm:text-5xl">Journey</h1>
      <Timeline items={journey} />
    </div>
  );
}
