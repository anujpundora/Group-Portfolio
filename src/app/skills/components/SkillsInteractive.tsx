'use client';

import { useState, useEffect } from 'react';
import SkillCategory from './SkillCategory';
import CertificationCard from './CertificationCard';
import EducationCard from './EducationCard';
import SkillEndorsement from './SkillEndorsement';
import SkillFilter from './SkillFilter';

interface Skill {
  name: string;
  level: number;
  yearsOfExperience: string;
  projects: number;
}

interface SkillCategoryData {
  title: string;
  skills: Skill[];
  icon: string;
  color: string;
  category: string;
}

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  image: string;
  alt: string;
  verifyUrl: string;
}

interface Education {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  gpa: string;
  relevantCourses: string[];
  achievements: string[];
}

interface Endorsement {
  name: string;
  role: string;
  company: string;
  image: string;
  alt: string;
  message: string;
  skills: string[];
}

const skillCategories: SkillCategoryData[] = [
{
  title: "Backend Development",
  category: "Backend",
  icon: "⚙️",
  color: "bg-primary/20",
  skills: [
  { name: "Java", level: 90, yearsOfExperience: "3+ years", projects: 15 },
  { name: "Spring Boot", level: 85, yearsOfExperience: "2+ years", projects: 12 },
  { name: "Node.js", level: 80, yearsOfExperience: "2+ years", projects: 10 },
  { name: "Python", level: 75, yearsOfExperience: "2+ years", projects: 8 },
  { name: "RESTful APIs", level: 90, yearsOfExperience: "3+ years", projects: 20 }]

},
{
  title: "Frontend Development",
  category: "Frontend",
  icon: "🎨",
  color: "bg-accent/20",
  skills: [
  { name: "React.js", level: 85, yearsOfExperience: "2+ years", projects: 14 },
  { name: "Next.js", level: 80, yearsOfExperience: "1+ year", projects: 8 },
  { name: "TypeScript", level: 85, yearsOfExperience: "2+ years", projects: 16 },
  { name: "Tailwind CSS", level: 90, yearsOfExperience: "2+ years", projects: 18 },
  { name: "JavaScript", level: 90, yearsOfExperience: "3+ years", projects: 22 }]

},
{
  title: "Database & Storage",
  category: "Database",
  icon: "💾",
  color: "bg-success/20",
  skills: [
  { name: "PostgreSQL", level: 85, yearsOfExperience: "2+ years", projects: 12 },
  { name: "MongoDB", level: 80, yearsOfExperience: "2+ years", projects: 10 },
  { name: "Redis", level: 75, yearsOfExperience: "1+ year", projects: 6 },
  { name: "MySQL", level: 80, yearsOfExperience: "2+ years", projects: 11 },
  { name: "SQL Optimization", level: 85, yearsOfExperience: "2+ years", projects: 15 }]

},
{
  title: "DevOps & Cloud",
  category: "DevOps",
  icon: "☁️",
  color: "bg-brand-secondary/20",
  skills: [
  { name: "Docker", level: 80, yearsOfExperience: "2+ years", projects: 13 },
  { name: "Kubernetes", level: 70, yearsOfExperience: "1+ year", projects: 5 },
  { name: "AWS", level: 75, yearsOfExperience: "1+ year", projects: 8 },
  { name: "CI/CD", level: 80, yearsOfExperience: "2+ years", projects: 14 },
  { name: "Git", level: 95, yearsOfExperience: "3+ years", projects: 25 }]

},
{
  title: "Tools & Methodologies",
  category: "Tools",
  icon: "🛠️",
  color: "bg-warning/20",
  skills: [
  { name: "Agile/Scrum", level: 85, yearsOfExperience: "2+ years", projects: 18 },
  { name: "System Design", level: 80, yearsOfExperience: "2+ years", projects: 10 },
  { name: "Debugging", level: 90, yearsOfExperience: "3+ years", projects: 30 },
  { name: "Performance Optimization", level: 85, yearsOfExperience: "2+ years", projects: 15 },
  { name: "Code Review", level: 85, yearsOfExperience: "2+ years", projects: 20 }]

},
{
  title: "Testing & Quality",
  category: "Testing",
  icon: "✅",
  color: "bg-conversion/20",
  skills: [
  { name: "Jest", level: 80, yearsOfExperience: "2+ years", projects: 12 },
  { name: "JUnit", level: 85, yearsOfExperience: "2+ years", projects: 14 },
  { name: "Integration Testing", level: 80, yearsOfExperience: "2+ years", projects: 16 },
  { name: "Test-Driven Development", level: 75, yearsOfExperience: "1+ year", projects: 8 },
  { name: "API Testing", level: 85, yearsOfExperience: "2+ years", projects: 18 }]

}];


const certifications: Certification[] = [
{
  title: "AWS Certified Solutions Architect - Associate",
  issuer: "Amazon Web Services",
  date: "September 2024",
  credentialId: "AWS-SAA-2024-09-12345",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_13bb10da4-1763923489902.png",
  alt: "AWS certification badge with orange and white cloud logo on dark background",
  verifyUrl: "https://aws.amazon.com/verification"
},
{
  title: "Oracle Certified Professional: Java SE 11 Developer",
  issuer: "Oracle",
  date: "June 2024",
  credentialId: "OCP-JAVA-2024-06-67890",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e2604e72-1763923491487.png",
  alt: "Oracle Java certification badge with red and white logo on professional background",
  verifyUrl: "https://education.oracle.com/verification"
},
{
  title: "MongoDB Certified Developer Associate",
  issuer: "MongoDB University",
  date: "March 2024",
  credentialId: "MDB-DEV-2024-03-11223",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1aa7b2d85-1763923491242.png",
  alt: "MongoDB certification badge with green leaf logo on dark technology background",
  verifyUrl: "https://university.mongodb.com/verification"
},
{
  title: "Docker Certified Associate",
  issuer: "Docker Inc.",
  date: "January 2024",
  credentialId: "DCA-2024-01-44556",
  image: "https://images.unsplash.com/photo-1650264526473-b4a9f9473664",
  alt: "Docker certification badge with blue whale logo on container technology background",
  verifyUrl: "https://docker.com/certification/verify"
}];


const education: Education = {
  degree: "Bachelor of Technology in Computer Science and Engineering",
  institution: "Indian Institute of Technology Kharagpur",
  location: "Kharagpur, West Bengal, India",
  duration: "2021 - 2025",
  gpa: "8.7/10.0",
  relevantCourses: [
  "Data Structures & Algorithms",
  "Database Management Systems",
  "Operating Systems",
  "Computer Networks",
  "Software Engineering",
  "Distributed Systems",
  "Machine Learning",
  "Cloud Computing",
  "System Design",
  "Web Technologies"],

  achievements: [
  "Dean's List for Academic Excellence (2022, 2023, 2024)",
  "Winner of IIT Kharagpur Hackathon 2023 - Built scalable microservices architecture",
  "Teaching Assistant for Data Structures course - Mentored 50+ students",
  "Published research paper on distributed system optimization in IEEE conference",
  "Led team of 5 developers in building campus event management platform"]

};

const endorsements: Endorsement[] = [
{
  name: "Dr. Rajesh Kumar",
  role: "Professor",
  company: "IIT Kharagpur",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_16b02e5f7-1763295683744.png",
  alt: "Middle-aged Indian professor with glasses in formal attire smiling at camera in academic office",
  message: "Ayush demonstrated exceptional problem-solving skills and deep understanding of backend systems. His ability to optimize database queries reduced response time by 40% in our research project.",
  skills: ["Java", "Database Optimization", "System Design"]
},
{
  name: "Priya Sharma",
  role: "Senior Software Engineer",
  company: "Tech Solutions Inc.",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_15b1bc935-1763293351349.png",
  alt: "Young Indian woman software engineer with long black hair in business casual attire at modern tech office",
  message: "Working with Ayush during his internship was a pleasure. His debugging skills are remarkable, and he consistently delivered clean, maintainable code. A true team player with strong technical foundation.",
  skills: ["Spring Boot", "RESTful APIs", "Code Quality"]
},
{
  name: "Michael Chen",
  role: "Tech Lead",
  company: "CloudScale Systems",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1bd81bcbd-1763299899173.png",
  alt: "Asian male tech professional in casual shirt smiling confidently in modern startup office environment",
  message: "Ayush's contribution to our microservices migration was invaluable. He quickly grasped complex architectural patterns and implemented scalable solutions that improved system performance by 35%.",
  skills: ["Microservices", "Docker", "Performance Optimization"]
},
{
  name: "Sarah Johnson",
  role: "Engineering Manager",
  company: "DataFlow Analytics",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c67099f2-1763299021772.png",
  alt: "Professional woman with blonde hair in navy blazer smiling warmly in corporate office setting",
  message: "Ayush stands out for his systematic approach to debugging and his continuous learning mindset. He proactively identified and resolved critical production issues, demonstrating maturity beyond his experience level.",
  skills: ["Debugging", "Production Support", "Agile Methodology"]
}];


export default function SkillsInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-muted rounded w-1/3"></div>
            <div className="h-6 bg-muted rounded w-2/3"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) =>
              <div key={i} className="h-64 bg-muted rounded-lg"></div>
              )}
            </div>
          </div>
        </div>
      </div>);

  }

  const categories = ['All', 'Backend', 'Frontend', 'Database', 'DevOps', 'Tools', 'Testing'];

  const filteredSkills = activeFilter === 'All' ?
  skillCategories :
  skillCategories.filter((cat) => cat.category === activeFilter);

  return (
    <div className="w-full space-y-16">
      {/* Skills Filter */}
      <section>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Filter by Category</h2>
            <p className="text-muted-foreground mt-1">Explore skills by technology domain</p>
          </div>
        </div>
        <SkillFilter
          categories={categories}
          onFilterChange={setActiveFilter}
          activeFilter={activeFilter} />

      </section>

      {/* Skills Matrix */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredSkills.map((category, index) =>
          <SkillCategory
            key={index}
            title={category.title}
            skills={category.skills}
            icon={category.icon}
            color={category.color} />

          )}
        </div>
      </section>

      {/* Education */}
      <section>
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Education</h2>
          <p className="text-muted-foreground">Academic foundation and achievements</p>
        </div>
        <EducationCard education={education} />
      </section>

      {/* Certifications */}
      <section>
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Certifications</h2>
          <p className="text-muted-foreground">Professional credentials and technical validations</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) =>
          <CertificationCard key={index} certification={cert} />
          )}
        </div>
      </section>

      {/* Skill Endorsements */}
      <section>
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Skill Endorsements</h2>
          <p className="text-muted-foreground">Testimonials from colleagues and mentors</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {endorsements.map((endorsement, index) =>
          <SkillEndorsement key={index} endorsement={endorsement} />
          )}
        </div>
      </section>

      {/* Skills Summary Stats */}
      <section className="bg-card rounded-lg p-8 border border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">25+</div>
            <div className="text-sm text-muted-foreground">Technologies Mastered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">150+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-success mb-2">4</div>
            <div className="text-sm text-muted-foreground">Certifications Earned</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-warning mb-2">3+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </section>
    </div>);

}