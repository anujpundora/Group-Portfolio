import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import SkillsInteractive from './components/SkillsInteractive';

export const metadata: Metadata = {
  title: 'Skills & Technologies - Ayush Rawat Portfolio',
  description: 'Comprehensive technical proficiency mapping showcasing backend specialist capabilities with full-stack proficiencies, certifications, and academic achievements from IIT Kharagpur.',
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="w-full px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Skills & <span className="text-primary">Technologies</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              A comprehensive overview of my technical proficiencies, certifications, and continuous learning journey. From backend systems to full-stack development, explore the technologies I leverage to build scalable, performant solutions.
            </p>
          </div>
        </section>

        {/* Interactive Skills Content */}
        <SkillsInteractive />
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-border bg-card mt-20">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Ayush Rawat. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/ayushrawat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/ayushrawat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                LinkedIn
              </a>
              <a
                href="mailto:ayush@example.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}