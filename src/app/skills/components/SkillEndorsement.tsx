import AppImage from '@/components/ui/AppImage';

interface Endorsement {
  name: string;
  role: string;
  company: string;
  image: string;
  alt: string;
  message: string;
  skills: string[];
}

interface SkillEndorsementProps {
  endorsement: Endorsement;
}

export default function SkillEndorsement({ endorsement }: SkillEndorsementProps) {
  return (
    <div className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary">
          <AppImage
            src={endorsement.image}
            alt={endorsement.alt}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 space-y-3">
          <div>
            <h4 className="text-lg font-bold text-foreground">{endorsement.name}</h4>
            <p className="text-sm text-muted-foreground">{endorsement.role} at {endorsement.company}</p>
          </div>
          
          <p className="text-sm text-foreground italic">&quot;{endorsement.message}&quot;</p>
          
          <div className="flex flex-wrap gap-2">
            {endorsement.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary/10 text-xs text-primary rounded-full border border-primary/30 font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}