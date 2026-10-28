import { Link } from 'react-router-dom';
import ImagePlaceholder from './ImagePlaceholder.jsx';
import { lifePhotos } from '../data/life.js';

export default function LifePreview() {
  return (
    <section aria-labelledby="life-prev" className="wrap py-12">
      <h2 id="life-prev" className="h-display text-3xl">Life</h2>
      <p className="mt-3 max-w-md text-muted">Beyond engineering: movies, moments, and whatever I’m curious about.</p>
      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
        {lifePhotos.map((p, i) => (
          /* REPLACE WITH PERSONAL PHOTO */
          <ImagePlaceholder key={p.src} src={p.src} alt={p.alt} className={`w-full ${i % 2 ? 'aspect-[3/4] md:mt-8' : 'aspect-[4/5]'}`} />
        ))}
      </div>
      <Link to="/life" className="link-u mt-8 inline-block text-sm">Open the Life page</Link>
    </section>
  );
}
