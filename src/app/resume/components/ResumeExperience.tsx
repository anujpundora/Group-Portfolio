import Icon from '@/components/ui/AppIcon';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

interface ResumeExperienceProps {
  experiences: Experience[];
}

const ResumeExperience = ({ experiences }: ResumeExperienceProps) => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center mb-8">
          <Icon name="BriefcaseIcon" size={28} className="text-primary mr-3" />
          <h2 className="text-3xl font-bold text-foreground">Work Experience</h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 sm:p-8 border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Header */}
              <div className="mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                  {exp.title}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-muted-foreground mb-2">
                  <div className="flex items-center mb-2 sm:mb-0">
                    <Icon name="BuildingOfficeIcon" size={18} className="mr-2 text-primary" />
                    <span className="font-semibold">{exp.company}</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="CalendarIcon" size={18} className="mr-2 text-primary" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Icon name="MapPinIcon" size={18} className="mr-2 text-primary" />
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {exp.description}
              </p>

              {/* Responsibilities */}
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                  <Icon name="ClipboardDocumentListIcon" size={20} className="mr-2 text-primary" />
                  Key Responsibilities
                </h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start text-muted-foreground">
                      <Icon
                        name="CheckCircleIcon"
                        size={20}
                        className="mr-3 text-primary flex-shrink-0 mt-0.5"
                      />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center">
                  <Icon name="WrenchScrewdriverIcon" size={18} className="mr-2 text-primary" />
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResumeExperience;