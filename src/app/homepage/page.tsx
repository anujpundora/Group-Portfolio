import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import AboutPreview from './components/AboutPreview';
import FeaturedProjects from './components/FeaturedProjects';
import SkillsPreview from './components/SkillsPreview';
import ExperiencePreview from './components/ExperiencePreview';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Home - Ayush Rawat | Backend Engineer & Problem Solver',
  description:
    'Professional portfolio of Ayush Rawat, a backend engineer specializing in scalable systems, performance optimization, and elegant problem-solving. Explore projects, experience, and technical expertise.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutPreview />
        <FeaturedProjects />
        <SkillsPreview />
        <ExperiencePreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}