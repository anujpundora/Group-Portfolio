import Icon from '@/components/ui/AppIcon';

interface ResumeSummaryProps {
  summary: string;
}

const ResumeSummary = ({ summary }: ResumeSummaryProps) => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center mb-6">
          <Icon name="DocumentTextIcon" size={28} className="text-primary mr-3" />
          <h2 className="text-3xl font-bold text-foreground">Professional Summary</h2>
        </div>
        
        <div className="bg-card rounded-lg p-6 sm:p-8 border border-border shadow-sm">
          <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
            {summary}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResumeSummary;