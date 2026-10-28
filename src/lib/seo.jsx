import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { site } from '../data/siteData.js';

function setTag(tag, key, name, attr, val) {
  let el = document.head.querySelector(`${tag}[${key}="${name}"]`);
  if (!el) { el = document.createElement(tag); el.setAttribute(key, name); document.head.appendChild(el); }
  el.setAttribute(attr, val);
}

export default function Seo({ title, description }) {
  const { pathname } = useLocation();
  useEffect(() => {
    const full = title ? `${title} — ${site.name}` : `${site.name} — Electrical Engineering Student & Researcher`;
    const url = `${site.url}${pathname}`;
    document.title = full;
    setTag('meta', 'name', 'description', 'content', description);
    setTag('link', 'rel', 'canonical', 'href', url);
    setTag('meta', 'property', 'og:title', 'content', full);
    setTag('meta', 'property', 'og:description', 'content', description);
    setTag('meta', 'property', 'og:url', 'content', url);
  }, [title, description, pathname]);
  return null;
}
