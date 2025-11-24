import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ExperienceInteractive from './components/ExperienceInteractive';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Professional Experience - Ayush Rawat Portfolio',
  description: 'Explore detailed breakdowns of my software engineering internships at IIT Kharagpur and TechStart Solutions, including technical achievements, impact metrics, and technology stacks used in building scalable backend systems.',
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Icon name="BriefcaseIcon" size={36} variant="outline" className="text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Professional Experience
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              A comprehensive overview of my software engineering journey, showcasing technical contributions, measurable impact, and continuous growth in backend development and distributed systems.
            </p>
          </div>

          {/* Interactive Experience Content */}
          <ExperienceInteractive />
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-border bg-card mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} Ayush Rawat. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/ayushrawat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="GitHub Profile"
              >
                <Icon name="CodeBracketIcon" size={20} variant="outline" />
              </a>
              <a
                href="https://linkedin.com/in/ayushrawat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <Icon name="UserGroupIcon" size={20} variant="outline" />
              </a>
              <a
                href="mailto:ayush@example.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="Email Contact"
              >
                <Icon name="EnvelopeIcon" size={20} variant="outline" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}