import AppImage from '@/components/ui/AppImage';

interface HeroSectionProps {
  name: string;
  title: string;
  image: string;
  imageAlt: string;
}

export default function HeroSection({ name, title, image, imageAlt }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-card via-background to-card py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, var(--color-primary) 2px, var(--color-primary) 3px),
                           repeating-linear-gradient(90deg, transparent, transparent 2px, var(--color-primary) 2px, var(--color-primary) 3px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <span className="text-primary font-mono text-sm">About Me</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Hi, I'm <span className="text-primary">{name}</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
              {title}
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              A passionate software engineer with a strong foundation in computer science and hands-on experience building scalable backend systems. I believe in writing clean, maintainable code and continuously learning to stay ahead in this ever-evolving field.
            </p>
          </div>
          
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-brand-secondary rounded-2xl transform rotate-6 opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-tl from-accent to-brand-secondary rounded-2xl transform -rotate-6 opacity-20" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
                <AppImage
                  src={image}
                  alt={imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}