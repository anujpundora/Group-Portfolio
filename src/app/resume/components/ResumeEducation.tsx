import Icon from '@/components/ui/AppIcon';

interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  achievements: string[];
}

interface ResumeEducationProps {
  education: Education[];
}

const ResumeEducation = ({ education }: ResumeEducationProps) => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center mb-8">
          <Icon name="AcademicCapIcon" size={28} className="text-primary mr-3" />
          <h2 className="text-3xl font-bold text-foreground">Education</h2>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 sm:p-8 border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Header */}
              <div className="mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                  {edu.degree}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-muted-foreground mb-2">
                  <div className="flex items-center mb-2 sm:mb-0">
                    <Icon name="BuildingLibraryIcon" size={18} className="mr-2 text-primary" />
                    <span className="font-semibold">{edu.institution}</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="CalendarIcon" size={18} className="mr-2 text-primary" />
                    <span>{edu.period}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-muted-foreground">
                    <Icon name="MapPinIcon" size={18} className="mr-2 text-primary" />
                    <span>{edu.location}</span>
                  </div>
                  {edu.gpa && (
                    <div className="flex items-center">
                      <Icon name="StarIcon" size={18} className="mr-2 text-primary" />
                      <span className="font-semibold text-foreground">GPA: {edu.gpa}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                  <Icon name="TrophyIcon" size={20} className="mr-2 text-primary" />
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start text-muted-foreground">
                      <Icon
                        name="CheckCircleIcon"
                        size={20}
                        className="mr-3 text-primary flex-shrink-0 mt-0.5"
                      />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResumeEducation;