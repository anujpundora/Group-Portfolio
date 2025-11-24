import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ResumeHeader from './components/ResumeHeader';
import ResumeSummary from './components/ResumeSummary';
import ResumeExperience from './components/ResumeExperience';
import ResumeEducation from './components/ResumeEducation';
import ResumeSkills from './components/ResumeSkills';
import ResumeDownload from './components/ResumeDownload';

export const metadata: Metadata = {
  title: 'Resume - Ayush Rawat Portfolio',
  description: 'Download Ayush Rawat\'s professional resume. View detailed work experience, education, technical skills, and achievements in software engineering and backend development.',
};

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  achievements: string[];
}

interface SkillCategory {
  category: string;
  skills: string[];
}

export default function ResumePage() {
  const personalInfo = {
    name: 'Ayush Rawat',
    title: 'Backend Engineer & Full Stack Developer',
    email: 'ayush.rawat@email.com',
    phone: '+91 98765 43210',
    location: 'Bangalore, India',
    linkedin: 'linkedin.com/in/ayushrawat',
    github: 'github.com/ayushrawat',
    website: 'ayushrawat.dev',
  };

  const summary = `Passionate Backend Engineer with 2+ years of experience building scalable web applications and RESTful APIs. 
  Specialized in Node.js, Python, and cloud technologies with proven ability to optimize system performance and reduce response times. 
  Strong foundation in data structures, algorithms, and distributed systems. Experienced in collaborating with cross-functional teams 
  to deliver high-quality software solutions. Seeking challenging opportunities to leverage technical expertise in building robust 
  backend systems and contributing to innovative projects.`;

  const experiences: Experience[] = [
    {
      title: 'Software Engineering Intern',
      company: 'IIT Kharagpur - Technology Innovation Hub',
      location: 'Kharagpur, West Bengal',
      period: 'Jan 2024 - Present',
      description: 'Contributing to research projects focusing on scalable backend systems and data processing pipelines.',
      responsibilities: [
        'Designed and implemented RESTful APIs using Node.js and Express.js serving 10,000+ daily requests',
        'Optimized PostgreSQL database queries reducing response time by 40% through indexing and query optimization',
        'Developed microservices architecture for distributed data processing using Docker and Kubernetes',
        'Implemented Redis caching layer improving API performance by 60%',
        'Collaborated with PhD students on research papers related to distributed systems optimization',
        'Mentored 3 junior developers on best practices for backend development and code reviews',
      ],
      technologies: ['Node.js', 'Express.js', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'AWS'],
    },
    {
      title: 'Backend Developer Intern',
      company: 'Tech Startup Solutions',
      location: 'Bangalore, India',
      period: 'Jun 2023 - Dec 2023',
      description: 'Worked on developing scalable backend solutions for e-commerce platform.',
      responsibilities: [
        'Built payment integration system processing 1000+ transactions daily with 99.9% success rate',
        'Implemented JWT-based authentication and authorization for secure API access',
        'Developed automated testing suite with 85% code coverage using Jest and Supertest',
        'Created comprehensive API documentation using Swagger/OpenAPI specifications',
        'Participated in Agile ceremonies including sprint planning, standups, and retrospectives',
      ],
      technologies: ['Python', 'Django', 'MongoDB', 'JWT', 'Stripe API', 'Jest', 'Git'],
    },
  ];

  const education: Education[] = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Premier Engineering College',
      location: 'India',
      period: '2021 - 2025',
      gpa: '8.7/10.0',
      achievements: [
        "Dean's List recognition for academic excellence (2022, 2023)",
        'Led college coding club with 200+ active members organizing weekly workshops',
        'Won 1st place in inter-college hackathon focusing on backend optimization (2023)',
        'Published research paper on "Distributed Systems Optimization Techniques" in IEEE conference',
        'Core team member of technical symposium managing 5,000+ participants',
      ],
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'National Public School',
      location: 'India',
      period: '2019 - 2021',
      gpa: '92%',
      achievements: [
        'School topper in Computer Science with 98% marks',
        'Represented school in national-level coding olympiad',
        'Led robotics club and built autonomous line-following robot',
      ],
    },
  ];

  const skillCategories: SkillCategory[] = [
    {
      category: 'Programming Languages',
      skills: ['JavaScript/TypeScript', 'Python', 'Java', 'C++', 'SQL'],
    },
    {
      category: 'Backend Technologies',
      skills: ['Node.js', 'Express.js', 'Django', 'FastAPI', 'Flask', 'REST APIs', 'GraphQL'],
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'DynamoDB'],
    },
    {
      category: 'Cloud & DevOps',
      skills: ['AWS (EC2, S3, Lambda)', 'Docker', 'Kubernetes', 'CI/CD', 'Jenkins', 'GitHub Actions'],
    },
    {
      category: 'Tools & Frameworks',
      skills: ['Git', 'Postman', 'Swagger', 'Jest', 'Pytest', 'Linux', 'Nginx'],
    },
    {
      category: 'Concepts',
      skills: ['Data Structures', 'Algorithms', 'System Design', 'Microservices', 'API Design', 'Database Optimization'],
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <ResumeHeader personalInfo={personalInfo} />
      
      <ResumeSummary summary={summary} />
      
      <ResumeExperience experiences={experiences} />
      
      <ResumeEducation education={education} />
      
      <ResumeSkills skillCategories={skillCategories} />
      
      <ResumeDownload />
    </main>
  );
}