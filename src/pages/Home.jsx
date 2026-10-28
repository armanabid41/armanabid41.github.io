import Seo from '../lib/seo.jsx';
import Hero from '../components/Hero.jsx';
import Currently from '../components/Currently.jsx';
import FeaturedProjects from '../components/FeaturedProjects.jsx';
import AboutPreview from '../components/AboutPreview.jsx';
import LifePreview from '../components/LifePreview.jsx';

export default function Home() {
  return (
    <>
      <Seo description="Official website of Arman Hossain Abid, an Electrical Engineering student, researcher, and embedded systems enthusiast at International Islamic University Chittagong." />
      <Hero />
      <Currently />
      <FeaturedProjects />
      <AboutPreview />
      <LifePreview />
    </>
  );
}
