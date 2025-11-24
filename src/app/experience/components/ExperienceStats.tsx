import Icon from '@/components/ui/AppIcon';

interface Stat {
  label: string;
  value: string;
  icon: string;
  color: string;
}

interface ExperienceStatsProps {
  stats: Stat[];
}

const ExperienceStats = ({ stats }: ExperienceStatsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.color}`}>
              <Icon name={stat.icon as any} size={24} variant="outline" />
            </div>
          </div>
          <p className="text-3xl font-bold text-foreground mb-2">{stat.value}</p>
          <p className="text-sm text-muted-foreground">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default ExperienceStats;