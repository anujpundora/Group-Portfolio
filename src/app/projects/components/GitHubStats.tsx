'use client';

import Icon from '@/components/ui/AppIcon';

const GitHubStats = () => {
  const stats = [
    {
      label: 'Total Repositories',
      value: '42',
      icon: 'CodeBracketIcon' as const,
      color: 'text-primary'
    },
    {
      label: 'Total Stars',
      value: '1,590',
      icon: 'StarIcon' as const,
      color: 'text-warning'
    },
    {
      label: 'Total Forks',
      value: '315',
      icon: 'ArrowPathIcon' as const,
      color: 'text-accent'
    },
    {
      label: 'Contributions',
      value: '2,847',
      icon: 'ChartBarIcon' as const,
      color: 'text-success'
    }
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-foreground">GitHub Activity</h2>
        <a
          href="https://github.com/ayushrawat"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
        >
          <span>View Profile</span>
          <Icon name="ArrowTopRightOnSquareIcon" size={16} variant="outline" />
        </a>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-muted/50 p-4 rounded-lg hover:bg-muted transition-colors"
          >
            <div className="flex items-center gap-3 mb-2">
              <Icon name={stat.icon} size={24} variant="solid" className={stat.color} />
              <span className="text-2xl font-bold text-foreground">{stat.value}</span>
            </div>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Contribution Graph Placeholder */}
      <div className="mt-6">
        <h3 className="text-sm font-semibold text-foreground mb-3">Contribution Activity</h3>
        <div className="bg-muted/30 rounded-lg p-4 h-32 flex items-center justify-center">
          <p className="text-sm text-muted-foreground">
            GitHub contribution graph visualization
          </p>
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;