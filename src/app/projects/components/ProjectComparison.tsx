'use client';

import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

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

interface ProjectComparisonProps {
  projects: Project[];
  onClose: () => void;
}

const ProjectComparison = ({ projects, onClose }: ProjectComparisonProps) => {
  if (projects.length !== 2) return null;

  const [project1, project2] = projects;

  const comparisonMetrics = [
    { label: 'Category', key: 'category' as const },
    { label: 'Team Size', key: 'teamSize' as const },
    { label: 'Duration', key: 'duration' as const },
    { label: 'Role', key: 'role' as const },
    { label: 'GitHub Stars', key: 'stars' as const },
    { label: 'Forks', key: 'forks' as const }
  ];

  return (
    <div className="fixed inset-0 bg-background/95 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">Project Comparison</h2>
            <button
              onClick={onClose}
              className="p-2 bg-muted rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Icon name="XMarkIcon" size={24} variant="outline" />
            </button>
          </div>

          {/* Comparison Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <AppImage
                  src={project1.image}
                  alt={project1.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{project1.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project1.description}</p>
                
                {/* Metrics */}
                <div className="space-y-3 mb-6">
                  {comparisonMetrics.map(metric => (
                    <div key={metric.label} className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-sm font-medium text-muted-foreground">{metric.label}</span>
                      <span className="text-sm font-semibold text-foreground">
                        {metric.key === 'teamSize' ? `${project1[metric.key]} ${project1[metric.key] === 1 ? 'Dev' : 'Devs'}` : project1[metric.key]}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project1.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Highlights</h4>
                  <ul className="space-y-2">
                    {project1.highlights.slice(0, 3).map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Icon name="CheckCircleIcon" size={16} variant="solid" className="text-success mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project1.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 bg-muted text-foreground rounded-md hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center gap-2"
                  >
                    <Icon name="CodeBracketIcon" size={16} variant="outline" />
                    <span className="text-sm font-medium">GitHub</span>
                  </a>
                  {project1.liveUrl && (
                    <a
                      href={project1.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                    >
                      <Icon name="ArrowTopRightOnSquareIcon" size={16} variant="outline" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <AppImage
                  src={project2.image}
                  alt={project2.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{project2.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project2.description}</p>
                
                {/* Metrics */}
                <div className="space-y-3 mb-6">
                  {comparisonMetrics.map(metric => (
                    <div key={metric.label} className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-sm font-medium text-muted-foreground">{metric.label}</span>
                      <span className="text-sm font-semibold text-foreground">
                        {metric.key === 'teamSize' ? `${project2[metric.key]} ${project2[metric.key] === 1 ? 'Dev' : 'Devs'}` : project2[metric.key]}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project2.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Highlights</h4>
                  <ul className="space-y-2">
                    {project2.highlights.slice(0, 3).map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Icon name="CheckCircleIcon" size={16} variant="solid" className="text-success mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project2.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 bg-muted text-foreground rounded-md hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center gap-2"
                  >
                    <Icon name="CodeBracketIcon" size={16} variant="outline" />
                    <span className="text-sm font-medium">GitHub</span>
                  </a>
                  {project2.liveUrl && (
                    <a
                      href={project2.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                    >
                      <Icon name="ArrowTopRightOnSquareIcon" size={16} variant="outline" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectComparison;