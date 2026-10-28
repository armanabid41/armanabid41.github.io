import Reveal from './Reveal.jsx';
import { site } from '../data/siteData.js';

export default function Currently() {
  return (
    <section aria-labelledby="currently" className="wrap py-12">
      <div className="grid gap-6 border-y border-line py-10 md:grid-cols-[1fr_2fr]">
        <h2 id="currently" className="h-display text-3xl">Currently</h2>
        <Reveal>
          <ul className="divide-y divide-line">
            {site.currently.map((c) => (
              <li key={c.text} className="flex items-baseline gap-4 py-3 font-serif text-lg sm:text-xl">
                <span aria-hidden="true">{c.icon}</span>{c.text}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
