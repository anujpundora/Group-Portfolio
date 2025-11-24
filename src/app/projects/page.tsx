import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ProjectsInteractive from './components/ProjectsInteractive';

export const metadata: Metadata = {
  title: 'Projects - Ayush Rawat Portfolio',
  description: 'Explore my software engineering projects showcasing backend development, full-stack capabilities, and scalable system architecture with live demos and code repositories.',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ProjectsInteractive />
    </div>
  );
}