import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Interest {
  icon: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

interface PersonalitySectionProps {
  interests: Interest[];
}

export default function PersonalitySection({ interests }: PersonalitySectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Beyond the <span className="text-primary">Code</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            When I'm not debugging or optimizing systems, you'll find me exploring these passions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="relative h-48 overflow-hidden">
                <AppImage
                  src={interest.image}
                  alt={interest.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-primary/90 rounded-lg flex items-center justify-center">
                  <Icon name={interest.icon as any} size={24} className="text-background" variant="solid" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {interest.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {interest.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}