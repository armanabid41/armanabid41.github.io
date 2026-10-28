import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle.jsx';
import { site } from '../data/siteData.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  const cls = ({ isActive }) =>
    `border-b py-1 text-sm transition-colors ${isActive ? 'border-accent text-fg' : 'border-transparent text-muted hover:text-fg'}`;
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur">
      <div className="wrap flex h-16 items-center justify-between">
        <Link to="/" className="text-sm font-semibold uppercase tracking-[0.14em]">{site.name}</Link>
        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {site.nav.map(([l, to]) => <NavLink key={to} to={to} end={to === '/'} className={cls}>{l}</NavLink>)}
          <ThemeToggle />
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button type="button" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(!open)} className="grid h-9 w-9 place-items-center border border-line">
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="wrap flex flex-col border-t border-line pb-4 md:hidden">
          {site.nav.map(([l, to]) => (
            <NavLink key={to} to={to} end={to === '/'}
              className={({ isActive }) => `border-b border-line py-3 font-serif text-xl ${isActive ? 'text-accent' : ''}`}>{l}</NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
