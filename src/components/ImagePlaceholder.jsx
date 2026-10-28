import { useState } from 'react';
import { ImageIcon } from 'lucide-react';

const asset = (p) => import.meta.env.BASE_URL + p.replace(/^\//, '');

// Shows the image if the file exists; otherwise a tidy placeholder (never a broken-image icon).
export default function ImagePlaceholder({ src, alt, className = '', eager = false, label }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div role="img" aria-label={alt} className={`grid-paper flex flex-col items-center justify-center gap-2 border border-line text-muted ${className}`}>
        <ImageIcon size={20} aria-hidden="true" />
        <span className="px-3 text-center font-mono text-xs">{label || src}</span>
      </div>
    );
  }
  return (
    <img src={asset(src)} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async"
      onError={() => setFailed(true)} className={`object-cover ${className}`} />
  );
}
