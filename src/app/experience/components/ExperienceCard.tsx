'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface TechStack {
  name: string;
  category: string;
}

interface Achievement {
  title: string;
  description: string;
  impact: string;
}

interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  logo: string;
  description: string;
  techStack: TechStack[];
  achievements: Achievement[];
  teamSize: number;
  reportingTo: string;
  keyProjects: string[];
}

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300">
      {/* Header Section */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start space-x-4 flex-1">
          <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-2xl font-bold text-primary">{experience.logo}</span>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground mb-1">{experience.role}</h3>
            <p className="text-lg text-primary font-semibold mb-2">{experience.company}</p>
            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Icon name="CalendarIcon" size={16} variant="outline" />
                {experience.duration}
              </span>
              <span className="flex items-center gap-1">
                <Icon name="MapPinIcon" size={16} variant="outline" />
                {experience.location}
              </span>
              <span className="flex items-center gap-1">
                <Icon name="BriefcaseIcon" size={16} variant="outline" />
                {experience.type}
              </span>
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 hover:bg-muted rounded-lg transition-colors duration-300"
          aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
        >
          <Icon
            name={isExpanded ? 'ChevronUpIcon' : 'ChevronDownIcon'}
            size={24}
            variant="outline"
          />
        </button>
      </div>

      {/* Description */}
      <p className="text-muted-foreground mb-4 leading-relaxed">{experience.description}</p>

      {/* Tech Stack Preview */}
      <div className="flex flex-wrap gap-2 mb-4">
        {experience.techStack.slice(0, 6).map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-muted text-foreground text-sm rounded-full border border-border"
          >
            {tech.name}
          </span>
        ))}
        {experience.techStack.length > 6 && (
          <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/30">
            +{experience.techStack.length - 6} more
          </span>
        )}
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="mt-6 pt-6 border-t border-border space-y-6 animate-slide-up">
          {/* Team Structure */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="UsersIcon" size={20} variant="outline" className="text-primary" />
                <h4 className="font-semibold text-foreground">Team Size</h4>
              </div>
              <p className="text-2xl font-bold text-primary">{experience.teamSize} members</p>
            </div>
            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="UserIcon" size={20} variant="outline" className="text-primary" />
                <h4 className="font-semibold text-foreground">Reporting To</h4>
              </div>
              <p className="text-foreground font-medium">{experience.reportingTo}</p>
            </div>
          </div>

          {/* Key Achievements */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Icon name="TrophyIcon" size={20} variant="outline" className="text-primary" />
              Key Achievements & Impact
            </h4>
            <div className="space-y-3">
              {experience.achievements.map((achievement, index) => (
                <div key={index} className="bg-muted/50 rounded-lg p-4">
                  <h5 className="font-semibold text-foreground mb-2">{achievement.title}</h5>
                  <p className="text-muted-foreground text-sm mb-2">{achievement.description}</p>
                  <div className="flex items-start gap-2 mt-2">
                    <Icon name="ChartBarIcon" size={16} variant="solid" className="text-success mt-1" />
                    <p className="text-success text-sm font-medium">{achievement.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Icon name="CodeBracketIcon" size={20} variant="outline" className="text-primary" />
              Key Projects
            </h4>
            <ul className="space-y-2">
              {experience.keyProjects.map((project, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                  <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-primary flex-shrink-0 mt-0.5" />
                  <span>{project}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Complete Tech Stack */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Icon name="CpuChipIcon" size={20} variant="outline" className="text-primary" />
              Complete Technology Stack
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from(new Set(experience.techStack.map(t => t.category))).map((category) => (
                <div key={category} className="bg-muted/50 rounded-lg p-4">
                  <h5 className="font-semibold text-foreground text-sm mb-2">{category}</h5>
                  <div className="flex flex-wrap gap-2">
                    {experience.techStack
                      .filter(tech => tech.category === category)
                      .map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-background text-foreground text-xs rounded border border-border"
                        >
                          {tech.name}
                        </span>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;