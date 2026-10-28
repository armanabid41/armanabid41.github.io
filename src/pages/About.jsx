import Seo from '../lib/seo.jsx';
import ImagePlaceholder from '../components/ImagePlaceholder.jsx';
import { site } from '../data/siteData.js';

const Block = ({ title, children }) => (
  <section className="grid gap-3 border-t border-line py-8 md:grid-cols-[1fr_2.2fr]">
    <h2 className="font-serif text-2xl">{title}</h2>
    <div>{children}</div>
  </section>
);
const Tags = ({ items }) => (
  <ul className="flex flex-wrap gap-2">{items.map((s) => <li key={s} className="border border-line px-3 py-1 text-sm">{s}</li>)}</ul>
);

export default function About() {
  return (
    <div className="wrap pt-14">
      <Seo title="About" description="About Arman Hossain Abid: 4th-year EEE student at International Islamic University Chittagong, working with Python, MATLAB, LTspice, Arduino and ESP32." />
      <div className="grid items-end gap-8 pb-10 md:grid-cols-[1.5fr_1fr]">
        <div>
          <h1 className="h-display text-4xl sm:text-5xl">About</h1>
          <p className="mt-5 max-w-lg text-muted">{site.intro}</p>
        </div>
        {/* REPLACE WITH YOUR PHOTO (public/images/about.jpg) */}
        <ImagePlaceholder src="/images/about.jpg" alt="Arman Hossain Abid" className="aspect-[4/3] w-full" />
      </div>
      <Block title="Education">
        <ul className="space-y-4">
          {site.education.map((e) => <li key={e.school}><h3 className="font-medium">{e.school}</h3><p className="text-sm text-muted">{e.detail}</p></li>)}
        </ul>
      </Block>
      <Block title="Skills"><Tags items={site.skills} /></Block>
      <Block title="Currently learning"><Tags items={site.learning} /></Block>
      <Block title="Interests"><Tags items={site.interests} /></Block>
    </div>
  );
}
