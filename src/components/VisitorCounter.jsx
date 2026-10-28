import { useEffect, useState } from 'react';
import { getPublicStats } from '../lib/analytics.js';
import { site } from '../data/siteData.js';

// Shows only real aggregate numbers from your stats endpoint. Never fabricated.
export default function VisitorCounter() {
  const [stats, setStats] = useState(null);
  useEffect(() => {
    if (!site.stats.enabled) return;
    const c = new AbortController();
    getPublicStats(c.signal).then(setStats);
    return () => c.abort();
  }, []);
  if (!site.stats.enabled) return null;
  return (
    <section aria-labelledby="footprint" className="text-sm">
      <h2 id="footprint" className="font-serif text-lg">Digital footprint</h2>
      {stats ? (
        <div className="mt-2 flex items-end gap-8"><dl className="flex gap-8">
          <div className="flex flex-col-reverse"><dt className="text-muted">Visitors</dt><dd className="font-serif text-2xl">{stats.visitors.toLocaleString()}</dd></div>
          <div className="flex flex-col-reverse"><dt className="text-muted">Page views</dt><dd className="font-serif text-2xl">{stats.pageViews.toLocaleString()}</dd></div>
        </dl><p className="text-muted">Since {site.stats.since}</p></div>
      ) : <p className="mt-1 text-muted">{site.stats.comingSoonText}</p>}
    </section>
  );
}
