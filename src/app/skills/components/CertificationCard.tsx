import AppImage from '@/components/ui/AppImage';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  image: string;
  alt: string;
  verifyUrl: string;
}

interface CertificationCardProps {
  certification: Certification;
}

export default function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <div className="bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden group">
      <div className="relative h-48 overflow-hidden bg-muted">
        <AppImage
          src={certification.image}
          alt={certification.alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6 space-y-3">
        <h4 className="text-lg font-bold text-foreground line-clamp-2">{certification.title}</h4>
        <p className="text-sm text-muted-foreground">{certification.issuer}</p>
        <p className="text-xs text-muted-foreground">Issued: {certification.date}</p>
        <p className="text-xs text-muted-foreground font-mono">ID: {certification.credentialId}</p>
        
        <a
          href={certification.verifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
        >
          Verify Credential
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
}