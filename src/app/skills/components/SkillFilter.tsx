'use client';


import Icon from '@/components/ui/AppIcon';

interface SkillFilterProps {
  categories: string[];
  onFilterChange: (category: string) => void;
  activeFilter: string;
}

export default function SkillFilter({ categories, onFilterChange, activeFilter }: SkillFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
            activeFilter === category
              ? 'bg-primary text-primary-foreground shadow-lg scale-105'
              : 'bg-card text-muted-foreground hover:bg-muted hover:text-foreground border border-border'
          }`}
        >
          {activeFilter === category && (
            <Icon name="CheckIcon" size={16} variant="solid" />
          )}
          {category}
        </button>
      ))}
    </div>
  );
}