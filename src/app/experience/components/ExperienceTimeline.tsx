import Icon from '@/components/ui/AppIcon';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface ExperienceTimelineProps {
  items: TimelineItem[];
}

const ExperienceTimeline = ({ items }: ExperienceTimelineProps) => {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

      {/* Timeline Items */}
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="relative pl-12">
            {/* Timeline Dot */}
            <div className="absolute left-0 top-1 w-8 h-8 bg-primary rounded-full flex items-center justify-center border-4 border-background">
              <Icon name="BriefcaseIcon" size={16} variant="solid" className="text-primary-foreground" />
            </div>

            {/* Content */}
            <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                  {item.year}
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;