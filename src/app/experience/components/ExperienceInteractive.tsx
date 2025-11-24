'use client';

import { useState, useEffect } from 'react';
import ExperienceCard from './ExperienceCard';
import ExperienceTimeline from './ExperienceTimeline';
import SkillsFilter from './SkillsFilter';
import ExperienceStats from './ExperienceStats';
import TestimonialCard from './TestimonialCard';
import Icon from '@/components/ui/AppIcon';

interface TechStack {
  name: string;
  category: string;
}

interface Achievement {
  title: string;
  description: string;
  impact: string;
}

interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  logo: string;
  description: string;
  techStack: TechStack[];
  achievements: Achievement[];
  teamSize: number;
  reportingTo: string;
  keyProjects: string[];
}

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface Stat {
  label: string;
  value: string;
  icon: string;
  color: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  alt: string;
  quote: string;
  rating: number;
}

const ExperienceInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'cards' | 'timeline'>('cards');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const experiences: Experience[] = [
  {
    id: 1,
    company: "Indian Institute of Technology Kharagpur",
    role: "Software Engineering Intern",
    duration: "May 2024 - July 2024",
    location: "Kharagpur, West Bengal",
    type: "Internship",
    logo: "IIT",
    description: "Contributed to cutting-edge research projects in distributed systems and backend optimization. Worked closely with PhD researchers and faculty members to develop scalable solutions for high-performance computing applications.",
    techStack: [
    { name: "Python", category: "Languages" },
    { name: "Java", category: "Languages" },
    { name: "C++", category: "Languages" },
    { name: "Django", category: "Frameworks" },
    { name: "Flask", category: "Frameworks" },
    { name: "PostgreSQL", category: "Databases" },
    { name: "Redis", category: "Databases" },
    { name: "Docker", category: "DevOps" },
    { name: "Kubernetes", category: "DevOps" },
    { name: "Git", category: "Tools" },
    { name: "Linux", category: "Tools" },
    { name: "AWS", category: "Cloud" }],

    achievements: [
    {
      title: "Performance Optimization",
      description: "Optimized database query performance for research data processing pipeline, implementing advanced indexing strategies and query optimization techniques.",
      impact: "Reduced query execution time by 65% and improved overall system throughput by 40%"
    },
    {
      title: "Distributed System Architecture",
      description: "Designed and implemented a distributed task scheduling system for parallel computation workloads using message queues and worker pools.",
      impact: "Enabled processing of 10x larger datasets with 99.9% reliability and fault tolerance"
    },
    {
      title: "API Development",
      description: "Built RESTful APIs for research data access and visualization, implementing proper authentication, rate limiting, and comprehensive documentation.",
      impact: "Facilitated collaboration across 5 research teams with 200+ daily API requests"
    }],

    teamSize: 8,
    reportingTo: "Dr. Rajesh Kumar, Associate Professor",
    keyProjects: [
    "Distributed Computing Framework for Scientific Simulations",
    "Real-time Data Processing Pipeline for IoT Sensor Networks",
    "Research Data Management System with Advanced Analytics",
    "Automated Testing Framework for Backend Services"]

  },
  {
    id: 2,
    company: "TechStart Solutions",
    role: "Backend Developer Intern",
    duration: "January 2024 - April 2024",
    location: "Bangalore, Karnataka",
    type: "Internship",
    logo: "TS",
    description: "Developed and maintained backend services for a fintech startup, focusing on payment processing, user authentication, and data security. Collaborated with cross-functional teams to deliver features on tight deadlines.",
    techStack: [
    { name: "Node.js", category: "Languages" },
    { name: "TypeScript", category: "Languages" },
    { name: "Express.js", category: "Frameworks" },
    { name: "MongoDB", category: "Databases" },
    { name: "MySQL", category: "Databases" },
    { name: "JWT", category: "Security" },
    { name: "OAuth", category: "Security" },
    { name: "Jest", category: "Testing" },
    { name: "Postman", category: "Tools" },
    { name: "GitHub Actions", category: "DevOps" }],

    achievements: [
    {
      title: "Payment Gateway Integration",
      description: "Integrated multiple payment gateways with proper error handling, retry mechanisms, and transaction logging for audit compliance.",
      impact: "Processed $500K+ in transactions with 99.99% success rate and zero security incidents"
    },
    {
      title: "Authentication System",
      description: "Implemented secure JWT-based authentication with refresh tokens, role-based access control, and session management.",
      impact: "Reduced authentication-related support tickets by 80% and improved user experience"
    },
    {
      title: "Database Optimization",
      description: "Refactored database schema and queries, implementing proper indexing and caching strategies for frequently accessed data.",
      impact: "Improved API response times by 55% and reduced database load by 45%"
    }],

    teamSize: 12,
    reportingTo: "Priya Sharma, Engineering Manager",
    keyProjects: [
    "Multi-tenant Payment Processing System",
    "User Authentication and Authorization Service",
    "Transaction Monitoring and Fraud Detection",
    "API Rate Limiting and Throttling Implementation"]

  },
  {
    id: 3,
    company: "CodeCraft Academy",
    role: "Teaching Assistant",
    duration: "August 2023 - December 2023",
    location: "Remote",
    type: "Part-time",
    logo: "CC",
    description: "Mentored students in data structures, algorithms, and backend development. Conducted code reviews, debugging sessions, and technical workshops to help students build strong programming fundamentals.",
    techStack: [
    { name: "Python", category: "Languages" },
    { name: "JavaScript", category: "Languages" },
    { name: "Data Structures", category: "Concepts" },
    { name: "Algorithms", category: "Concepts" },
    { name: "System Design", category: "Concepts" },
    { name: "Git", category: "Tools" },
    { name: "VS Code", category: "Tools" }],

    achievements: [
    {
      title: "Student Mentorship",
      description: "Provided one-on-one mentorship to 50+ students, helping them understand complex programming concepts and debugging techniques.",
      impact: "Achieved 95% student satisfaction rating and 80% course completion rate"
    },
    {
      title: "Curriculum Development",
      description: "Created comprehensive learning materials, coding exercises, and project templates for backend development courses.",
      impact: "Improved student learning outcomes by 40% based on assessment scores"
    },
    {
      title: "Technical Workshops",
      description: "Conducted weekly workshops on debugging strategies, code optimization, and best practices in software development.",
      impact: "Trained 200+ students with 90% positive feedback on workshop effectiveness"
    }],

    teamSize: 5,
    reportingTo: "Amit Verma, Lead Instructor",
    keyProjects: [
    "Interactive Coding Challenges Platform",
    "Automated Code Review System",
    "Student Progress Tracking Dashboard",
    "Technical Interview Preparation Resources"]

  }];


  const timelineItems: TimelineItem[] = [
  {
    year: "2024",
    title: "Software Engineering Intern at IIT Kharagpur",
    description: "Advanced research in distributed systems and backend optimization with focus on scalable architecture design."
  },
  {
    year: "2024",
    title: "Backend Developer Intern at TechStart Solutions",
    description: "Built secure payment processing systems and authentication services for fintech applications."
  },
  {
    year: "2023",
    title: "Teaching Assistant at CodeCraft Academy",
    description: "Mentored students in programming fundamentals and conducted technical workshops on software development."
  },
  {
    year: "2023",
    title: "Started Computer Science Journey",
    description: "Began formal education in computer science with focus on algorithms, data structures, and system design."
  }];


  const stats: Stat[] = [
  {
    label: "Years of Experience",
    value: "2+",
    icon: "CalendarIcon",
    color: "bg-primary/10 text-primary"
  },
  {
    label: "Projects Completed",
    value: "15+",
    icon: "CodeBracketIcon",
    color: "bg-success/10 text-success"
  },
  {
    label: "Technologies Mastered",
    value: "25+",
    icon: "CpuChipIcon",
    color: "bg-accent/10 text-accent"
  },
  {
    label: "Students Mentored",
    value: "200+",
    icon: "AcademicCapIcon",
    color: "bg-warning/10 text-warning"
  }];


  const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    role: "Associate Professor",
    company: "IIT Kharagpur",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18160d972-1763296688320.png",
    alt: "Middle-aged Indian professor with glasses and gray hair in formal attire",
    quote: "Ayush demonstrated exceptional problem-solving skills and a deep understanding of distributed systems. His contributions to our research projects were invaluable, and his ability to optimize complex algorithms was impressive.",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Engineering Manager",
    company: "TechStart Solutions",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1238dde92-1763293896347.png",
    alt: "Professional Indian woman with long black hair in business casual attire smiling",
    quote: "Working with Ayush was a pleasure. He quickly grasped our payment processing requirements and delivered secure, scalable solutions. His attention to detail and commitment to code quality set him apart.",
    rating: 5
  },
  {
    id: 3,
    name: "Amit Verma",
    role: "Lead Instructor",
    company: "CodeCraft Academy",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d577a93f-1763294375859.png",
    alt: "Young Indian man with beard and casual shirt in teaching environment",
    quote: "Ayush has a natural talent for breaking down complex concepts and making them accessible to students. His mentorship helped many students overcome programming challenges and build confidence in their abilities.",
    rating: 5
  }];


  const allSkills = Array.from(
    new Set(experiences.flatMap((exp) => exp.techStack.map((tech) => tech.name)))
  ).sort();

  const filteredExperiences = selectedSkills.length === 0 ?
  experiences :
  experiences.filter((exp) =>
  selectedSkills.some((skill) =>
  exp.techStack.some((tech) => tech.name === skill)
  )
  );

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-muted rounded w-1/3" />
            <div className="h-64 bg-muted rounded" />
            <div className="h-64 bg-muted rounded" />
          </div>
        </div>
      </div>);

  }

  return (
    <div className="space-y-12">
      {/* Stats Section */}
      <ExperienceStats stats={stats} />

      {/* View Toggle and Filter */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex items-center gap-2 bg-card border border-border rounded-lg p-1">
            <button
              onClick={() => setViewMode('cards')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
              viewMode === 'cards' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`
              }>

              <Icon name="Squares2X2Icon" size={20} variant="outline" className="inline mr-2" />
              Card View
            </button>
            <button
              onClick={() => setViewMode('timeline')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
              viewMode === 'timeline' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`
              }>

              <Icon name="ClockIcon" size={20} variant="outline" className="inline mr-2" />
              Timeline View
            </button>
          </div>

          <button
            onClick={() => window.print()}
            className="px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors duration-300 flex items-center gap-2">

            <Icon name="PrinterIcon" size={20} variant="outline" />
            Print View
          </button>
        </div>

        <SkillsFilter skills={allSkills} onFilterChange={setSelectedSkills} />
      </div>

      {/* Experience Display */}
      {viewMode === 'cards' ?
      <div className="space-y-6">
          {filteredExperiences.length > 0 ?
        filteredExperiences.map((experience) =>
        <ExperienceCard key={experience.id} experience={experience} />
        ) :

        <div className="bg-card border border-border rounded-lg p-12 text-center">
              <Icon name="FunnelIcon" size={48} variant="outline" className="mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">No experiences match the selected skills. Try adjusting your filters.</p>
            </div>
        }
        </div> :

      <ExperienceTimeline items={timelineItems} />
      }

      {/* Testimonials Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Icon name="ChatBubbleLeftRightIcon" size={28} variant="outline" className="text-primary" />
          <h2 className="text-3xl font-bold text-foreground">What Colleagues Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) =>
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          )}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-primary/10 to-brand-secondary/10 border border-primary/20 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-foreground mb-4">Interested in Working Together?</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, interesting projects, or potential collaborations. Let's connect and explore how we can work together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg">

            Get in Touch
          </a>
          <a
            href="/projects"
            className="px-8 py-3 bg-card text-foreground font-semibold rounded-lg border border-border hover:border-primary/50 transition-all duration-300">

            View My Projects
          </a>
        </div>
      </div>
    </div>);

};

export default ExperienceInteractive;