import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface CTASectionProps {
  bioUrl: string;
}

export default function CTASection({ bioUrl }: CTASectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-background to-brand-secondary/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
          Let's Build Something <span className="text-primary">Amazing</span> Together
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, collaborations, or just having a technical conversation over coffee.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Icon name="EnvelopeIcon" size={20} variant="solid" />
            Get In Touch
          </Link>
          
          <a
            href={bioUrl}
            download
            className="inline-flex items-center gap-2 px-8 py-4 bg-card text-foreground font-semibold rounded-lg border-2 border-primary hover:bg-primary/10 transition-all duration-300"
          >
            <Icon name="DocumentArrowDownIcon" size={20} variant="outline" />
            Download Bio
          </a>
        </div>
        
        <div className="mt-12 flex justify-center gap-6">
          <a
            href="https://github.com/ayushrawat"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300"
            aria-label="GitHub Profile"
          >
            <Icon name="CodeBracketIcon" size={24} className="text-foreground" variant="outline" />
          </a>
          <a
            href="https://linkedin.com/in/ayushrawat"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300"
            aria-label="LinkedIn Profile"
          >
            <Icon name="UserGroupIcon" size={24} className="text-foreground" variant="outline" />
          </a>
          <a
            href="mailto:ayush@example.com"
            className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300"
            aria-label="Email Contact"
          >
            <Icon name="EnvelopeIcon" size={24} className="text-foreground" variant="outline" />
          </a>
        </div>
      </div>
    </section>
  );
}