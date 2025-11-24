import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Skill {
  name: string;
  level: number;
  icon: string;
  category: string;
}

const SkillsPreview = () => {
  const skills: Skill[] = [
    { name: 'Python', level: 95, icon: 'CodeBracketIcon', category: 'Backend' },
    { name: 'Java', level: 90, icon: 'CodeBracketSquareIcon', category: 'Backend' },
    { name: 'Go', level: 85, icon: 'CommandLineIcon', category: 'Backend' },
    { name: 'PostgreSQL', level: 90, icon: 'CircleStackIcon', category: 'Database' },
    { name: 'Redis', level: 85, icon: 'ServerStackIcon', category: 'Database' },
    { name: 'Docker', level: 88, icon: 'CubeIcon', category: 'DevOps' },
    { name: 'Kubernetes', level: 80, icon: 'CloudIcon', category: 'DevOps' },
    { name: 'System Design', level: 92, icon: 'CpuChipIcon', category: 'Architecture' },
  ];

  const categories = ['Backend', 'Database', 'DevOps', 'Architecture'];

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-mono text-sm uppercase tracking-wider">
            Technical Proficiency
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical stack with deep expertise in backend
            development and system architecture
          </p>
        </div>

        {/* Skills by Category */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {categories.map((category) => (
            <div
              key={category}
              className="p-8 bg-background rounded-xl border border-border hover:border-primary transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Icon name="CheckBadgeIcon" size={24} variant="solid" className="text-primary" />
                {category}
              </h3>
              <div className="space-y-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Icon
                            name={skill.icon as any}
                            size={20}
                            variant="outline"
                            className="text-primary"
                          />
                          <span className="text-foreground font-medium">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-primary font-mono text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-brand-secondary rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="p-6 bg-background rounded-lg border border-border text-center">
            <div className="text-3xl font-bold text-primary font-mono mb-2">
              20+
            </div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
          <div className="p-6 bg-background rounded-lg border border-border text-center">
            <div className="text-3xl font-bold text-primary font-mono mb-2">
              5+
            </div>
            <div className="text-sm text-muted-foreground">Frameworks</div>
          </div>
          <div className="p-6 bg-background rounded-lg border border-border text-center">
            <div className="text-3xl font-bold text-primary font-mono mb-2">
              10+
            </div>
            <div className="text-sm text-muted-foreground">Tools</div>
          </div>
          <div className="p-6 bg-background rounded-lg border border-border text-center">
            <div className="text-3xl font-bold text-primary font-mono mb-2">
              3+
            </div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/skills"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
          >
            View Full Skill Matrix
            <Icon name="ArrowRightIcon" size={20} variant="solid" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SkillsPreview;