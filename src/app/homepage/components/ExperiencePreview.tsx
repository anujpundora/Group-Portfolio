import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  location: string;
  highlights: string[];
  technologies: string[];
}

const ExperiencePreview = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      company: 'IIT Kharagpur',
      role: 'Software Engineering Intern',
      duration: 'Jun 2024 - Aug 2024',
      location: 'Kharagpur, India',
      highlights: [
        'Optimized database queries reducing response time by 40%',
        'Implemented caching layer with Redis improving throughput by 3x',
        'Developed RESTful APIs serving 100,000+ daily requests',
      ],
      technologies: ['Python', 'Django', 'PostgreSQL', 'Redis', 'Docker'],
    },
    {
      id: 2,
      company: 'Tech Startup',
      role: 'Backend Developer Intern',
      duration: 'Jan 2024 - May 2024',
      location: 'Remote',
      highlights: [
        'Built microservices architecture handling 50,000+ concurrent users',
        'Implemented automated testing pipeline reducing bugs by 60%',
        'Collaborated with cross-functional team on feature development',
      ],
      technologies: ['Node.js', 'MongoDB', 'AWS', 'Kubernetes', 'Jest'],
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-mono text-sm uppercase tracking-wider">
            Career Journey
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Practical industry experience with measurable impact and technical
            contributions
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-12">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="relative pl-8 md:pl-12 border-l-2 border-primary"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-[9px] ring-4 ring-background" />

              {/* Experience Card */}
              <div className="bg-card rounded-xl border border-border hover:border-primary transition-all duration-300 p-6 md:p-8 transform hover:scale-[1.02]">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-primary font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col md:items-end gap-1">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="CalendarIcon" size={16} variant="outline" />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="MapPinIcon" size={16} variant="outline" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-3 mb-6">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Icon
                        name="CheckCircleIcon"
                        size={20}
                        variant="solid"
                        className="text-primary flex-shrink-0 mt-0.5"
                      />
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
          >
            View Detailed Experience
            <Icon name="ArrowRightIcon" size={20} variant="solid" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePreview;