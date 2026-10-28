import Seo from '../lib/seo.jsx';
import SocialLinks from '../components/SocialLinks.jsx';
import { site } from '../data/siteData.js';

export default function Contact() {
  const hasEmail = site.email.includes('@');
  return (
    <div className="wrap pt-14">
      <Seo title="Contact" description="Get in touch with Arman Hossain Abid through email, GitHub, LinkedIn, ResearchGate, Instagram or Facebook." />
      <h1 className="h-display text-4xl sm:text-5xl">Contact</h1>
      <section className="mt-12 grid gap-3 border-t border-line py-8 md:grid-cols-[1fr_2.2fr]">
        <h2 className="font-serif text-2xl">Email</h2>
        {hasEmail ? <a className="link-u" href={`mailto:${site.email}`}>{site.email}</a> : <p className="text-muted">{site.email}</p>}
      </section>
      <section className="grid gap-3 border-t border-line py-8 md:grid-cols-[1fr_2.2fr]">
        <h2 className="font-serif text-2xl">Profiles</h2>
        <SocialLinks withLabels />
      </section>
    </div>
  );
}
