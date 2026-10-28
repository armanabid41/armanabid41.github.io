export default function SectionHeading({ title, intro, as: H = 'h2', className = '' }) {
  return (
    <div className={`mb-10 max-w-2xl ${className}`}>
      <H className="h-display text-3xl sm:text-4xl">{title}</H>
      {intro && <p className="mt-3 text-muted">{intro}</p>}
    </div>
  );
}
