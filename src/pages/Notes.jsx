import Seo from '../lib/seo.jsx';
import { notes, noteCategories } from '../data/notes.js';

export default function Notes() {
  return (
    <div className="wrap pt-14">
      <Seo title="Notes" description="Technical and personal notes by Arman Hossain Abid on engineering, research, embedded systems and AI." />
      <h1 className="h-display text-4xl sm:text-5xl">Notes</h1>
      <ul className="mt-8 flex flex-wrap gap-2">{noteCategories.map((c) => <li key={c} className="border border-line px-3 py-1 text-sm">{c}</li>)}</ul>
      {notes.length === 0 ? (
        <p className="mt-12 font-serif text-2xl text-muted">Notes coming soon.</p>
      ) : (
        <ul className="mt-12 divide-y divide-line border-y border-line">
          {notes.map((n) => (
            <li key={n.slug} className="py-5">
              <p className="text-sm text-muted">{n.category} · {n.date}</p>
              <h2 className="mt-1 font-serif text-xl">{n.url ? <a className="link-u" href={n.url}>{n.title}</a> : n.title}</h2>
              <p className="mt-1 text-muted">{n.summary}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
