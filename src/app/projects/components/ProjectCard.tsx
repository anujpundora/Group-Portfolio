'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Technology {
  name: string;
  category: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  alt: string;
  technologies: Technology[];
  category: string;
  githubUrl: string;
  liveUrl?: string;
  stars: number;
  forks: number;
  lastUpdated: string;
  highlights: string[];
  problemStatement: string;
  solution: string;
  impact: string;
  teamSize: number;
  duration: string;
  role: string;
  codeSnippet?: string;
}

interface ProjectCardProps {
  project: Project;
  isExpanded: boolean;
  onToggleExpand: () => void;
  compareMode: boolean;
  isSelected: boolean;
  onSelect: () => void;
}

const ProjectCard = ({ project, isExpanded, onToggleExpand, compareMode, isSelected, onSelect }: ProjectCardProps) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className={`bg-card border rounded-lg overflow-hidden transition-all duration-300 ${isSelected ? 'border-primary ring-2 ring-primary/20' : 'border-border hover:border-primary/50'}`}>
      {/* Image */}
      <div className="relative h-48 overflow-hidden group">
        <AppImage
          src={project.image}
          alt={project.alt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-background/80 rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Icon name="CodeBracketIcon" size={20} variant="outline" />
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/80 rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Icon name="ArrowTopRightOnSquareIcon" size={20} variant="outline" />
              </a>
            )}
          </div>
        </div>
        {compareMode && (
          <button
            onClick={onSelect}
            className={`absolute top-4 right-4 p-2 rounded-md transition-colors ${isSelected ? 'bg-primary text-primary-foreground' : 'bg-background/80 text-foreground hover:bg-primary hover:text-primary-foreground'}`}
          >
            <Icon name={isSelected ? "CheckIcon" : "PlusIcon"} size={20} variant="solid" />
          </button>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
          <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
            {project.category}
          </span>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Stats */}
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Icon name="StarIcon" size={16} variant="solid" className="text-warning" />
            <span>{project.stars}</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="CodeBracketIcon" size={16} variant="outline" />
            <span>{project.forks}</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="ClockIcon" size={16} variant="outline" />
            <span>{project.duration}</span>
          </div>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
            >
              {tech.name}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Expand Button */}
        <button
          onClick={onToggleExpand}
          className="w-full py-2 bg-muted text-foreground rounded-md hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center gap-2"
        >
          <span className="text-sm font-medium">
            {isExpanded ? 'Show Less' : 'View Details'}
          </span>
          <Icon
            name={isExpanded ? "ChevronUpIcon" : "ChevronDownIcon"}
            size={16}
            variant="outline"
          />
        </button>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-6 space-y-6 animate-slide-up">
            {/* Long Description */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">Overview</h4>
              <p className="text-sm text-muted-foreground">{project.longDescription}</p>
            </div>

            {/* Highlights */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">Key Highlights</h4>
              <ul className="space-y-2">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Icon name="CheckCircleIcon" size={16} variant="solid" className="text-success mt-0.5 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Problem & Solution */}
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-muted/50 p-4 rounded-md">
                <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Icon name="ExclamationTriangleIcon" size={16} variant="outline" className="text-warning" />
                  Problem Statement
                </h4>
                <p className="text-sm text-muted-foreground">{project.problemStatement}</p>
              </div>
              <div className="bg-muted/50 p-4 rounded-md">
                <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Icon name="LightBulbIcon" size={16} variant="solid" className="text-primary" />
                  Solution
                </h4>
                <p className="text-sm text-muted-foreground">{project.solution}</p>
              </div>
            </div>

            {/* Impact */}
            <div className="bg-success/10 border border-success/20 p-4 rounded-md">
              <h4 className="text-sm font-semibold text-success mb-2 flex items-center gap-2">
                <Icon name="ChartBarIcon" size={16} variant="solid" />
                Impact & Results
              </h4>
              <p className="text-sm text-success/90">{project.impact}</p>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-xs font-semibold text-muted-foreground mb-1">Team Size</h4>
                <p className="text-sm text-foreground">{project.teamSize} {project.teamSize === 1 ? 'Developer' : 'Developers'}</p>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-muted-foreground mb-1">Role</h4>
                <p className="text-sm text-foreground">{project.role}</p>
              </div>
            </div>

            {/* Code Snippet */}
            {project.codeSnippet && (
              <div>
                <button
                  onClick={() => setShowCode(!showCode)}
                  className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors mb-2"
                >
                  <Icon name="CodeBracketSquareIcon" size={16} variant="outline" />
                  {showCode ? 'Hide Code Sample' : 'View Code Sample'}
                </button>
                {showCode && (
                  <pre className="bg-background border border-border p-4 rounded-md overflow-x-auto text-xs text-foreground font-mono">
                    <code>{project.codeSnippet}</code>
                  </pre>
                )}
              </div>
            )}

            {/* All Technologies */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">Technology Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;