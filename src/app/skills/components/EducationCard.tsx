interface Education {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  gpa: string;
  relevantCourses: string[];
  achievements: string[];
}

interface EducationCardProps {
  education: Education;
}

export default function EducationCard({ education }: EducationCardProps) {
  return (
    <div className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300">
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-foreground">{education.degree}</h3>
          <p className="text-lg text-primary font-semibold mt-1">{education.institution}</p>
          <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
            <span>{education.location}</span>
            <span>•</span>
            <span>{education.duration}</span>
            <span>•</span>
            <span className="text-primary font-semibold">GPA: {education.gpa}</span>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-2">Relevant Coursework:</h4>
          <div className="flex flex-wrap gap-2">
            {education.relevantCourses.map((course, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-muted text-xs text-foreground rounded-full border border-border"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-2">Achievements:</h4>
          <ul className="space-y-1">
            {education.achievements.map((achievement, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-1">▸</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}