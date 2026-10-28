import Reveal from './Reveal.jsx';

export default function Timeline({ items }) {
  return (
    <ol className="relative ml-2 border-l border-line">
      {items.map((it, i) => (
        <li key={it.title} className="pb-12 pl-8 last:pb-0">
          <span aria-hidden="true" className={`absolute -left-[5px] mt-2 h-2.5 w-2.5 rounded-full ${i === items.length - 1 ? 'bg-accent' : 'border border-fg bg-bg'}`} />
          <Reveal>
            <p className="text-sm text-muted">{it.date}</p>
            <h2 className="mt-1 font-serif text-2xl">{it.title}</h2>
            <p className="mt-2 max-w-xl text-muted">{it.text}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
