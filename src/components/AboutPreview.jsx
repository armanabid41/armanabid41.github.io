import { Link } from 'react-router-dom';
import ImagePlaceholder from './ImagePlaceholder.jsx';
import { site } from '../data/siteData.js';

export default function AboutPreview() {
  return (
    <section aria-labelledby="about-prev" className="wrap grid items-center gap-10 py-12 md:grid-cols-[1fr_1.2fr]">
      {/* REPLACE WITH YOUR PHOTO (public/images/about.jpg) */}
      <ImagePlaceholder src="/images/about.jpg" alt="Arman Hossain Abid" className="aspect-[5/4] w-full" />
      <div>
        <h2 id="about-prev" className="h-display text-3xl">About</h2>
        <p className="mt-4 max-w-md text-muted">{site.intro}</p>
        <p className="mt-4 text-sm">{site.skills.join(' · ')}</p>
        <Link to="/about" className="link-u mt-6 inline-block text-sm">More about me</Link>
      </div>
    </section>
  );
}
