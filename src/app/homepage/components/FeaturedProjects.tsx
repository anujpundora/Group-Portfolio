import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Technology {
  name: string;
  color: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  technologies: Technology[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

const FeaturedProjects = () => {
  const projects: Project[] = [
  {
    id: 1,
    title: 'Distributed Task Scheduler',
    description:
    'Built a scalable task scheduling system handling 10,000+ concurrent jobs with Redis queue management and PostgreSQL persistence. Implemented worker pool architecture with automatic failover and retry mechanisms.',
    image: "https://images.unsplash.com/photo-1498502153174-e65bbd350bd3",
    alt: 'Computer screen displaying colorful code editor with multiple terminal windows showing system monitoring and task execution logs',
    technologies: [
    { name: 'Python', color: 'bg-blue-500' },
    { name: 'Redis', color: 'bg-red-500' },
    { name: 'PostgreSQL', color: 'bg-indigo-500' },
    { name: 'Docker', color: 'bg-cyan-500' }],

    githubUrl: 'https://github.com/ayushrawat/task-scheduler',
    liveUrl: 'https://task-scheduler-demo.com',
    featured: true
  },
  {
    id: 2,
    title: 'Real-time Analytics Pipeline',
    description:
    'Designed and implemented a real-time data processing pipeline using Apache Kafka and Spark. Reduced data processing latency by 60% and enabled live dashboard updates for business intelligence.',
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74",
    alt: 'Dashboard interface showing real-time analytics graphs with streaming data visualizations and performance metrics on dark background',
    technologies: [
    { name: 'Apache Kafka', color: 'bg-gray-700' },
    { name: 'Spark', color: 'bg-orange-500' },
    { name: 'Python', color: 'bg-blue-500' },
    { name: 'MongoDB', color: 'bg-green-500' }],

    githubUrl: 'https://github.com/ayushrawat/analytics-pipeline',
    liveUrl: 'https://analytics-demo.com',
    featured: true
  },
  {
    id: 3,
    title: 'API Gateway with Rate Limiting',
    description:
    'Developed a high-performance API gateway with intelligent rate limiting, request routing, and authentication. Handles 50,000+ requests per second with sub-10ms latency using Go and Redis.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_106a0ae06-1763923490996.png",
    alt: 'Network diagram visualization showing API gateway architecture with multiple service connections and data flow paths on dark interface',
    technologies: [
    { name: 'Go', color: 'bg-cyan-400' },
    { name: 'Redis', color: 'bg-red-500' },
    { name: 'Docker', color: 'bg-cyan-500' },
    { name: 'Kubernetes', color: 'bg-blue-600' }],

    githubUrl: 'https://github.com/ayushrawat/api-gateway',
    liveUrl: 'https://gateway-demo.com',
    featured: true
  }];


  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-mono text-sm uppercase tracking-wider">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing technical depth, problem-solving approach, and ability to
            build scalable systems
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) =>
          <div
            key={project.id}
            className="group bg-card rounded-xl border border-border hover:border-primary transition-all duration-300 overflow-hidden transform hover:scale-105">

              {/* Project Image */}
              <div className="relative w-full h-48 overflow-hidden">
                <AppImage
                src={project.image}
                alt={project.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) =>
                <span
                  key={index}
                  className={`px-3 py-1 ${tech.color} text-white text-xs font-medium rounded-full`}>

                      {tech.name}
                    </span>
                )}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300">

                    <Icon name="CodeBracketIcon" size={18} variant="outline" />
                    Code
                  </a>
                  <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300">

                    <Icon name="ArrowTopRightOnSquareIcon" size={18} variant="outline" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">

            View All Projects
            <Icon name="ArrowRightIcon" size={20} variant="solid" />
          </Link>
        </div>
      </div>
    </section>);

};

export default FeaturedProjects;