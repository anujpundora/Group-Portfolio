'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface SkillsFilterProps {
  skills: string[];
  onFilterChange: (selectedSkills: string[]) => void;
}

const SkillsFilter = ({ skills, onFilterChange }: SkillsFilterProps) => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSkill = (skill: string) => {
    const newSelection = selectedSkills.includes(skill)
      ? selectedSkills.filter(s => s !== skill)
      : [...selectedSkills, skill];
    
    setSelectedSkills(newSelection);
    onFilterChange(newSelection);
  };

  const clearFilters = () => {
    setSelectedSkills([]);
    onFilterChange([]);
  };

  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Icon name="FunnelIcon" size={20} variant="outline" className="text-primary" />
          <h3 className="font-semibold text-foreground">Filter by Skills</h3>
          {selectedSkills.length > 0 && (
            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
              {selectedSkills.length} selected
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {selectedSkills.length > 0 && (
            <button
              onClick={clearFilters}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Clear all
            </button>
          )}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 hover:bg-muted rounded transition-colors duration-300"
            aria-label={isExpanded ? 'Collapse filters' : 'Expand filters'}
          >
            <Icon
              name={isExpanded ? 'ChevronUpIcon' : 'ChevronDownIcon'}
              size={20}
              variant="outline"
            />
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="flex flex-wrap gap-2 animate-slide-up">
          {skills.map((skill) => (
            <button
              key={skill}
              onClick={() => toggleSkill(skill)}
              className={`px-3 py-1.5 text-sm rounded-full border transition-all duration-300 ${
                selectedSkills.includes(skill)
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-muted text-foreground border-border hover:border-primary/50'
              }`}
            >
              {skill}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillsFilter;