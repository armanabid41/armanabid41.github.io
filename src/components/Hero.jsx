import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import ImagePlaceholder from './ImagePlaceholder.jsx';
import { site } from '../data/siteData.js';

export default function Hero() {
  const reduce = useReducedMotion();
  const step = (i) => (reduce ? {} : { initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.1 * i } });
  return (
    <section className="wrap grid items-center gap-10 pb-16 pt-12 md:grid-cols-[1.3fr_1fr] md:pt-20">
      <div>
        <motion.h1 {...step(0)} className="h-display text-4xl uppercase leading-[1.05] sm:text-5xl lg:text-6xl">{site.name}</motion.h1>
        <motion.p {...step(1)} className="mt-5 font-serif text-xl">{site.role}</motion.p>
        <motion.p {...step(2)} className="mt-1 text-muted">{site.subtitle}</motion.p>
        <motion.p {...step(3)} className="mt-8 max-w-md leading-relaxed">{site.tagline}</motion.p>
        <motion.div {...step(4)} className="mt-8 flex flex-wrap gap-3">
          <Link to="/projects" className="btn btn-solid">Explore My Work</Link>
          <Link to="/about" className="btn btn-line">About Me</Link>
        </motion.div>
      </div>
      <motion.div {...step(2)} className="order-first md:order-none md:justify-self-end">
        {/* REPLACE WITH YOUR PROFILE PHOTO (public/images/profile.jpg) */}
        <ImagePlaceholder src="/images/profile.jpg" alt="Portrait of Arman Hossain Abid" eager
          className="aspect-[4/5] w-full max-w-xs sm:max-w-sm md:w-80" />
      </motion.div>
    </section>
  );
}
