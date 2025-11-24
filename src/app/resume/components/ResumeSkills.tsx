import Icon from '@/components/ui/AppIcon';

interface SkillCategory {
  category: string;
  skills: string[];
}

interface ResumeSkillsProps {
  skillCategories: SkillCategory[];
}

const ResumeSkills = ({ skillCategories }: ResumeSkillsProps) => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center mb-8">
          <Icon name="CpuChipIcon" size={28} className="text-primary mr-3" />
          <h2 className="text-3xl font-bold text-foreground">Technical Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center">
                <Icon name="SparklesIcon" size={20} className="mr-2 text-primary" />
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-2 bg-muted text-foreground text-sm font-medium rounded-md border border-border hover:border-primary hover:bg-primary/5 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResumeSkills;
