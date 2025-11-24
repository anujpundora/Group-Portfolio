interface Skill {
  name: string;
  level: number;
  yearsOfExperience: string;
  projects: number;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  icon: string;
  color: string;
}

export default function SkillCategory({ title, skills, icon, color }: SkillCategoryProps) {
  return (
    <div className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center`}>
          <span className="text-2xl">{icon}</span>
        </div>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
      </div>
      
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-foreground">{skill.name}</span>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">{skill.yearsOfExperience}</span>
                <span className="text-xs text-primary font-semibold">{skill.level}%</span>
              </div>
            </div>
            <div className="relative h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-brand-secondary rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${skill.level}%` }}
              />
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <span>{skill.projects} projects</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}