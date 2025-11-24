'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface TimelineEvent {
  year: string;
  title: string;
  organization: string;
  description: string;
  achievements: string[];
  type: 'education' | 'experience' | 'achievement';
}

interface JourneyTimelineProps {
  events: TimelineEvent[];
}

export default function JourneyTimeline({ events }: JourneyTimelineProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'education':
        return 'AcademicCapIcon';
      case 'experience':
        return 'BriefcaseIcon';
      case 'achievement':
        return 'TrophyIcon';
      default:
        return 'StarIcon';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'education':
        return 'bg-accent/10 border-accent text-accent';
      case 'experience':
        return 'bg-primary/10 border-primary text-primary';
      case 'achievement':
        return 'bg-warning/10 border-warning text-warning';
      default:
        return 'bg-muted/10 border-muted text-muted-foreground';
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            My <span className="text-primary">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From academic foundations to professional milestones - a timeline of growth and learning
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
          
          <div className="space-y-8">
            {events.map((event, index) => (
              <div key={index} className="relative">
                <div className="flex items-start gap-6">
                  <div className={`hidden md:flex w-16 h-16 rounded-full border-4 ${getTypeColor(event.type)} items-center justify-center flex-shrink-0 relative z-10 bg-card`}>
                    <Icon name={getTypeIcon(event.type) as any} size={24} variant="solid" />
                  </div>
                  
                  <div className="flex-1">
                    <div
                      className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 cursor-pointer"
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    >
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-mono rounded-full">
                              {event.year}
                            </span>
                            <div className={`md:hidden w-8 h-8 rounded-full border-2 ${getTypeColor(event.type)} flex items-center justify-center`}>
                              <Icon name={getTypeIcon(event.type) as any} size={16} variant="solid" />
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-foreground mb-1">
                            {event.title}
                          </h3>
                          <p className="text-muted-foreground font-medium">
                            {event.organization}
                          </p>
                        </div>
                        <Icon
                          name={expandedIndex === index ? 'ChevronUpIcon' : 'ChevronDownIcon'}
                          size={24}
                          className="text-muted-foreground flex-shrink-0"
                          variant="outline"
                        />
                      </div>
                      
                      {expandedIndex === index && (
                        <div className="space-y-4 pt-4 border-t border-border animate-slide-up">
                          <p className="text-muted-foreground leading-relaxed">
                            {event.description}
                          </p>
                          
                          {event.achievements.length > 0 && (
                            <div>
                              <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                                <Icon name="CheckBadgeIcon" size={18} className="text-primary" variant="solid" />
                                Key Achievements
                              </h4>
                              <ul className="space-y-2">
                                {event.achievements.map((achievement, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                                    <Icon name="ChevronRightIcon" size={16} className="text-primary mt-1 flex-shrink-0" variant="outline" />
                                    <span>{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}