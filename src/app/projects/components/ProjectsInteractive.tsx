'use client';

import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import FilterBar from './FilterBar';
import GitHubStats from './GitHubStats';
import ProjectComparison from './ProjectComparison';

interface Technology {
  name: string;
  category: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  alt: string;
  technologies: Technology[];
  category: string;
  githubUrl: string;
  liveUrl?: string;
  stars: number;
  forks: number;
  lastUpdated: string;
  highlights: string[];
  problemStatement: string;
  solution: string;
  impact: string;
  teamSize: number;
  duration: string;
  role: string;
  codeSnippet?: string;
}

const ProjectsInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTech, setSelectedTech] = useState<string>('All');
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [compareMode, setCompareMode] = useState(false);
  const [selectedProjects, setSelectedProjects] = useState<number[]>([]);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const projects: Project[] = [
  {
    id: 1,
    title: "Distributed Task Scheduler",
    description: "High-performance task scheduling system handling 10K+ concurrent jobs with Redis-based queue management and horizontal scaling capabilities.",
    longDescription: "Built a production-grade distributed task scheduler that processes over 10,000 concurrent jobs with sub-second latency. Implemented Redis-based queue management, worker pool optimization, and automatic failure recovery mechanisms.",
    image: "https://images.unsplash.com/photo-1543355584-e708a2e4d2f6",
    alt: "Modern server room with blue LED lights showing distributed computing infrastructure",
    technologies: [
    { name: "Python", category: "Backend" },
    { name: "Redis", category: "Database" },
    { name: "Docker", category: "DevOps" },
    { name: "Kubernetes", category: "DevOps" }],

    category: "Backend",
    githubUrl: "https://github.com/ayushrawat/distributed-scheduler",
    liveUrl: "https://scheduler-demo.ayushrawat.dev",
    stars: 234,
    forks: 45,
    lastUpdated: "2025-11-15",
    highlights: [
    "99.9% uptime with automatic failover",
    "Reduced job processing time by 60%",
    "Handles 10K+ concurrent tasks",
    "Zero-downtime deployments"],

    problemStatement: "Existing task scheduling solutions couldn't handle our scale requirements and lacked proper failure recovery mechanisms, leading to job losses during peak loads.",
    solution: "Designed a distributed architecture using Redis for queue management, implemented worker pools with dynamic scaling, and built comprehensive monitoring with Prometheus and Grafana.",
    impact: "Reduced infrastructure costs by 40% while improving reliability. System now processes 2M+ tasks daily with 99.9% success rate.",
    teamSize: 1,
    duration: "4 months",
    role: "Solo Developer",
    codeSnippet: "class TaskScheduler:\n    def __init__(self, redis_client):\n        self.queue = redis_client\n        self.workers = WorkerPool()\n    \n    async def schedule(self, task):\n        await self.queue.enqueue(task)\n        return task.id"
  },
  {
    id: 2,
    title: "Real-Time Analytics Dashboard",
    description: "WebSocket-powered analytics platform processing 1M+ events per hour with sub-100ms latency and interactive data visualization.",
    longDescription: "Developed a real-time analytics dashboard that ingests and processes over 1 million events per hour. Features WebSocket connections for live updates, time-series data aggregation, and interactive charts.",
    image: "https://images.unsplash.com/photo-1562071674-4e2b15a4c839",
    alt: "Multiple computer monitors displaying colorful data analytics charts and graphs in dark office",
    technologies: [
    { name: "Node.js", category: "Backend" },
    { name: "WebSocket", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "React", category: "Frontend" },
    { name: "D3.js", category: "Frontend" }],

    category: "Full-Stack",
    githubUrl: "https://github.com/ayushrawat/analytics-dashboard",
    liveUrl: "https://analytics.ayushrawat.dev",
    stars: 189,
    forks: 32,
    lastUpdated: "2025-11-20",
    highlights: [
    "Sub-100ms event processing latency",
    "Handles 1M+ events per hour",
    "Real-time WebSocket updates",
    "Custom time-series aggregation"],

    problemStatement: "Marketing team needed real-time insights into user behavior but existing tools had 5-10 minute delays and couldn't handle our event volume.",
    solution: "Built event ingestion pipeline with Node.js streams, implemented WebSocket broadcasting for live updates, and optimized PostgreSQL queries with materialized views for fast aggregations.",
    impact: "Enabled data-driven decision making with real-time insights. Marketing team increased campaign ROI by 35% using live analytics.",
    teamSize: 2,
    duration: "3 months",
    role: "Backend Lead",
    codeSnippet: "io.on('connection', (socket) => {\n    const stream = eventStream.subscribe();\n    stream.on('data', (event) => {\n        socket.emit('analytics', event);\n    });\n});"
  },
  {
    id: 3,
    title: "API Gateway with Rate Limiting",
    description: "Production-ready API gateway handling 50K+ requests per second with intelligent rate limiting, caching, and authentication middleware.",
    longDescription: "Engineered a high-performance API gateway that serves as the entry point for all microservices. Implements token bucket rate limiting, Redis caching, JWT authentication, and request routing with sub-10ms overhead.",
    image: "https://images.unsplash.com/photo-1649682892309-e10e0b7cd40b",
    alt: "Digital network visualization with glowing blue connection nodes and data streams",
    technologies: [
    { name: "Go", category: "Backend" },
    { name: "Redis", category: "Database" },
    { name: "Nginx", category: "DevOps" },
    { name: "JWT", category: "Backend" }],

    category: "Backend",
    githubUrl: "https://github.com/ayushrawat/api-gateway",
    stars: 312,
    forks: 67,
    lastUpdated: "2025-11-18",
    highlights: [
    "Handles 50K+ requests per second",
    "Sub-10ms routing overhead",
    "Intelligent rate limiting",
    "99.99% uptime SLA"],

    problemStatement: "Microservices architecture lacked centralized authentication and rate limiting, leading to service abuse and inconsistent security policies.",
    solution: "Developed lightweight gateway in Go for maximum performance, implemented token bucket algorithm for rate limiting, and integrated Redis for distributed caching and session management.",
    impact: "Reduced API abuse by 95% and improved overall system security. Gateway now protects 15+ microservices with consistent policies.",
    teamSize: 1,
    duration: "2 months",
    role: "Solo Developer",
    codeSnippet: "func rateLimiter(next http.Handler) http.Handler {\n    return http.HandlerFunc(func(w, r) {\n        if !limiter.Allow(r.RemoteAddr) {\n            http.Error(w, \"Rate limit exceeded\", 429)\n            return\n        }\n        next.ServeHTTP(w, r)\n    })\n}"
  },
  {
    id: 4,
    title: "Microservices Monitoring System",
    description: "Comprehensive monitoring solution with distributed tracing, custom metrics collection, and intelligent alerting for microservices architecture.",
    longDescription: "Built end-to-end monitoring system for microservices using Prometheus, Grafana, and Jaeger. Features custom metric exporters, distributed tracing, and ML-based anomaly detection for proactive alerting.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3",
    alt: "Business analytics dashboard showing performance metrics and graphs on laptop screen",
    technologies: [
    { name: "Prometheus", category: "DevOps" },
    { name: "Grafana", category: "DevOps" },
    { name: "Jaeger", category: "DevOps" },
    { name: "Python", category: "Backend" },
    { name: "Go", category: "Backend" }],

    category: "DevOps",
    githubUrl: "https://github.com/ayushrawat/microservices-monitoring",
    stars: 156,
    forks: 28,
    lastUpdated: "2025-11-10",
    highlights: [
    "Distributed tracing across 20+ services",
    "Custom metric exporters",
    "ML-based anomaly detection",
    "Reduced MTTR by 70%"],

    problemStatement: "Debugging issues in microservices architecture was time-consuming due to lack of visibility into service interactions and performance bottlenecks.",
    solution: "Implemented distributed tracing with Jaeger for request flow visualization, built custom Prometheus exporters for business metrics, and developed anomaly detection using statistical models.",
    impact: "Reduced mean time to resolution (MTTR) by 70%. Team can now identify and fix issues 3x faster with complete visibility into system behavior.",
    teamSize: 3,
    duration: "5 months",
    role: "Technical Lead",
    codeSnippet: "tracer := jaeger.NewTracer(\n    \"service-name\",\n    sampler.NewConstSampler(true),\n    reporter,\n)\nspan := tracer.StartSpan(\"operation\")\ndefer span.Finish()"
  },
  {
    id: 5,
    title: "Database Migration Tool",
    description: "Zero-downtime database migration system supporting PostgreSQL, MySQL, and MongoDB with automatic rollback and data validation.",
    longDescription: "Created a robust database migration tool that enables zero-downtime schema changes for production databases. Features automatic rollback on failure, data integrity validation, and support for multiple database engines.",
    image: "https://images.unsplash.com/photo-1655158990554-33b392c5f240",
    alt: "Close-up of database server storage with blue indicator lights in data center",
    technologies: [
    { name: "Python", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MySQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "Docker", category: "DevOps" }],

    category: "Backend",
    githubUrl: "https://github.com/ayushrawat/db-migration-tool",
    stars: 278,
    forks: 54,
    lastUpdated: "2025-11-12",
    highlights: [
    "Zero-downtime migrations",
    "Automatic rollback on failure",
    "Multi-database support",
    "Data integrity validation"],

    problemStatement: "Database schema changes required downtime and manual intervention, risking data loss and service disruption during deployments.",
    solution: "Developed migration engine with shadow table technique for zero-downtime changes, implemented comprehensive validation checks, and built automatic rollback mechanism for failed migrations.",
    impact: "Eliminated database-related downtime completely. Team now deploys schema changes 10x more frequently with zero incidents.",
    teamSize: 2,
    duration: "3 months",
    role: "Backend Developer",
    codeSnippet: "class Migration:\n    def up(self):\n        # Create shadow table\n        self.create_shadow_table()\n        # Copy data with validation\n        self.copy_and_validate()\n        # Atomic swap\n        self.swap_tables()"
  },
  {
    id: 6,
    title: "Event-Driven Architecture Framework",
    description: "Scalable event-driven framework using Apache Kafka for asynchronous communication between 30+ microservices with guaranteed delivery.",
    longDescription: "Architected event-driven communication framework handling 5M+ events daily across microservices. Features event sourcing, CQRS pattern implementation, and guaranteed message delivery with idempotency.",
    image: "https://images.unsplash.com/photo-1733295928625-439a9692ba63",
    alt: "Abstract visualization of data flow with orange and blue light streams representing event processing",
    technologies: [
    { name: "Apache Kafka", category: "Backend" },
    { name: "Java", category: "Backend" },
    { name: "Spring Boot", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Docker", category: "DevOps" }],

    category: "Backend",
    githubUrl: "https://github.com/ayushrawat/event-driven-framework",
    stars: 421,
    forks: 89,
    lastUpdated: "2025-11-22",
    highlights: [
    "Processes 5M+ events daily",
    "Guaranteed message delivery",
    "Event sourcing implementation",
    "CQRS pattern support"],

    problemStatement: "Tight coupling between microservices caused cascading failures and made it difficult to add new services without affecting existing ones.",
    solution: "Implemented event-driven architecture using Kafka for asynchronous communication, built event sourcing for audit trails, and applied CQRS pattern for read/write optimization.",
    impact: "Reduced service coupling by 80% and improved system resilience. New services can be added without modifying existing ones, accelerating feature development.",
    teamSize: 4,
    duration: "6 months",
    role: "Architecture Lead",
    codeSnippet: "@KafkaListener(topics = \"orders\")\npublic void handleOrder(OrderEvent event) {\n    // Idempotency check\n    if (processed(event.getId())) return;\n    // Process event\n    processOrder(event);\n    // Mark as processed\n    markProcessed(event.getId());\n}"
  }];


  const categories = ['All', 'Backend', 'Full-Stack', 'DevOps'];
  const technologies = ['All', 'Python', 'Node.js', 'Go', 'Java', 'React', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'];

  const filteredProjects = projects.filter((project) => {
    const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory;
    const techMatch = selectedTech === 'All' || project.technologies.some((tech) => tech.name === selectedTech);
    return categoryMatch && techMatch;
  });

  const handleProjectSelect = (projectId: number) => {
    if (selectedProjects.includes(projectId)) {
      setSelectedProjects(selectedProjects.filter((id) => id !== projectId));
    } else if (selectedProjects.length < 2) {
      setSelectedProjects([...selectedProjects, projectId]);
    }
  };

  if (!isHydrated) {
    return (
      <main className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="h-12 bg-muted rounded-lg animate-pulse mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) =>
            <div key={i} className="h-96 bg-muted rounded-lg animate-pulse"></div>
            )}
          </div>
        </div>
      </main>);

  }

  return (
    <main className="w-full px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Project <span className="text-primary">Portfolio</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore my software engineering projects showcasing backend development, scalable architectures, and full-stack capabilities. Each project demonstrates problem-solving methodologies and technical depth.
          </p>
        </div>

        {/* GitHub Stats */}
        <GitHubStats />

        {/* Filter Bar */}
        <FilterBar
          categories={categories}
          technologies={technologies}
          selectedCategory={selectedCategory}
          selectedTech={selectedTech}
          onCategoryChange={setSelectedCategory}
          onTechChange={setSelectedTech}
          compareMode={compareMode}
          onCompareModeToggle={() => {
            setCompareMode(!compareMode);
            setSelectedProjects([]);
          }} />


        {/* Comparison View */}
        {compareMode && selectedProjects.length === 2 &&
        <ProjectComparison
          projects={projects.filter((p) => selectedProjects.includes(p.id))}
          onClose={() => {
            setCompareMode(false);
            setSelectedProjects([]);
          }} />

        }

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project) =>
          <ProjectCard
            key={project.id}
            project={project}
            isExpanded={expandedProject === project.id}
            onToggleExpand={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
            compareMode={compareMode}
            isSelected={selectedProjects.includes(project.id)}
            onSelect={() => handleProjectSelect(project.id)} />

          )}
        </div>

        {filteredProjects.length === 0 &&
        <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No projects found matching your filters.</p>
          </div>
        }

        {/* Open Source Contribution CTA */}
        <div className="bg-card border border-border rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Open Source Contributions</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            All projects are open source and available on GitHub. Feel free to explore the code, raise issues, or contribute to ongoing development.
          </p>
          <a
            href="https://github.com/ayushrawat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-all duration-300">

            View GitHub Profile
          </a>
        </div>
      </div>
    </main>);

};

export default ProjectsInteractive;