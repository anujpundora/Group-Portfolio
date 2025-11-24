import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Highlight {
  icon: string;
  title: string;
  description: string;
}

const AboutPreview = () => {
  const highlights: Highlight[] = [
  {
    icon: 'AcademicCapIcon',
    title: 'IIT Kharagpur',
    description: 'Strong computer science fundamentals with focus on algorithms and system design'
  },
  {
    icon: 'CodeBracketSquareIcon',
    title: 'Backend Specialist',
    description: 'Expert in building scalable systems with performance optimization'
  },
  {
    icon: 'LightBulbIcon',
    title: 'Problem Solver',
    description: 'Systematic approach to debugging and translating requirements into solutions'
  },
  {
    icon: 'UserGroupIcon',
    title: 'Team Player',
    description: 'Collaborative mindset with strong communication and leadership skills'
  }];


  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden border-4 border-primary shadow-elevation">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1f2277bfd-1763295470977.png"
                alt="Professional portrait of young male software engineer with short dark hair wearing casual blue shirt in modern office setting with computer monitors in background"
                className="w-full h-full object-cover" />

            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-secondary/20 rounded-full blur-3xl" />
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-mono text-sm uppercase tracking-wider">
                About Me
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                The Analytical Problem Solver
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I represent the next generation of software engineers who combine
                strong computer science fundamentals with practical industry
                experience. My approach is professional yet approachable,
                confident but humble, showcasing someone who can translate complex
                requirements into elegant solutions.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) =>
              <div
                key={index}
                className="p-6 bg-background rounded-lg border border-border hover:border-primary transition-all duration-300 transform hover:scale-105">

                  <Icon
                  name={highlight.icon as any}
                  size={32}
                  variant="outline"
                  className="text-primary mb-4" />

                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>
              )}
            </div>

            {/* CTA */}
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">

              Learn More About Me
              <Icon name="ArrowRightIcon" size={20} variant="solid" />
            </Link>
          </div>
        </div>
      </div>
    </section>);

};

export default AboutPreview;