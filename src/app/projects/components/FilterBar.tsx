'use client';

import Icon from '@/components/ui/AppIcon';

interface FilterBarProps {
  categories: string[];
  technologies: string[];
  selectedCategory: string;
  selectedTech: string;
  onCategoryChange: (category: string) => void;
  onTechChange: (tech: string) => void;
  compareMode: boolean;
  onCompareModeToggle: () => void;
}

const FilterBar = ({
  categories,
  technologies,
  selectedCategory,
  selectedTech,
  onCategoryChange,
  onTechChange,
  compareMode,
  onCompareModeToggle
}: FilterBarProps) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        {/* Categories */}
        <div className="flex-1">
          <label className="text-sm font-semibold text-foreground mb-3 block">
            Filter by Category
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="flex-1">
          <label className="text-sm font-semibold text-foreground mb-3 block">
            Filter by Technology
          </label>
          <select
            value={selectedTech}
            onChange={(e) => onTechChange(e.target.value)}
            className="w-full px-4 py-2 bg-input border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {technologies.map(tech => (
              <option key={tech} value={tech}>
                {tech}
              </option>
            ))}
          </select>
        </div>

        {/* Compare Mode Toggle */}
        <div className="flex items-center">
          <button
            onClick={onCompareModeToggle}
            className={`flex items-center gap-2 px-6 py-2 rounded-md font-medium transition-all duration-300 ${
              compareMode
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            <Icon name="ArrowsRightLeftIcon" size={20} variant="outline" />
            <span className="hidden sm:inline">Compare Projects</span>
            <span className="sm:hidden">Compare</span>
          </button>
        </div>
      </div>

      {compareMode && (
        <div className="mt-4 p-3 bg-primary/10 border border-primary/20 rounded-md">
          <p className="text-sm text-primary flex items-center gap-2">
            <Icon name="InformationCircleIcon" size={16} variant="solid" />
            Select up to 2 projects to compare side-by-side
          </p>
        </div>
      )}
    </div>
  );
};

export default FilterBar;