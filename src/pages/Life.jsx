import Seo from '../lib/seo.jsx';
import ImagePlaceholder from '../components/ImagePlaceholder.jsx';
import Reveal from '../components/Reveal.jsx';
import { lifeSections, lifePhotos } from '../data/life.js';

export default function Life() {
  return (
    <div className="wrap pt-14">
      <Seo title="Life" description="The personal side of Arman Hossain Abid: movies, photography, everyday moments and things he is learning." />
      <h1 className="h-display text-4xl sm:text-5xl">Life</h1>
      <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-12">
        {lifePhotos.map((p, i) => {
          const span = ['md:col-span-7', 'md:col-span-5 md:mt-12', 'md:col-span-5', 'md:col-span-7 md:mt-12'][i];
          return (
            <figure key={p.src} className={span}>
              {/* REPLACE WITH PERSONAL PHOTO */}
              <ImagePlaceholder src={p.src} alt={p.alt} className="aspect-[4/3] w-full" />
              <figcaption className="mt-2 text-xs text-muted">{p.caption}</figcaption>
            </figure>
          );
        })}
      </div>
      <div className="mt-16">
        {lifeSections.map((s) => (
          <Reveal key={s.title}>
            <section className="grid gap-3 border-t border-line py-8 md:grid-cols-[1fr_2.2fr]">
              <h2 className="font-serif text-2xl">{s.title}</h2>
              <p className="max-w-prose text-muted">{s.text}</p>
            </section>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
