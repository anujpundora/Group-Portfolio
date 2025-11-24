import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import PhilosophySection from './components/PhilosophySection';
import JourneyTimeline from './components/JourneyTimeline';
import PersonalitySection from './components/PersonalitySection';
import ValuesSection from './components/ValuesSection';
import CTASection from './components/CTASection';

export const metadata: Metadata = {
  title: 'About - Ayush Rawat Portfolio',
  description: 'Learn about Ayush Rawat\'s journey as a software engineer, technical philosophy, core values, and the experiences that shaped his career in backend development and full-stack engineering.'
};

interface PhilosophyItem {
  icon: string;
  title: string;
  description: string;
}

interface TimelineEvent {
  year: string;
  title: string;
  organization: string;
  description: string;
  achievements: string[];
  type: 'education' | 'experience' | 'achievement';
}

interface Interest {
  icon: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

interface Value {
  icon: string;
  title: string;
  description: string;
  quote: string;
}

export default function AboutPage() {
  const heroData = {
    name: "Ayush Rawat",
    title: "Backend Engineer & Problem Solver",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f3f78660-1763295972306.png",
    imageAlt: "Professional headshot of young Indian male software engineer with short black hair wearing navy blue shirt against neutral background"
  };

  const philosophies: PhilosophyItem[] = [
  {
    icon: "LightBulbIcon",
    title: "Continuous Learning",
    description: "Technology evolves rapidly. I dedicate time daily to learning new frameworks, patterns, and best practices to stay relevant and effective."
  },
  {
    icon: "CodeBracketSquareIcon",
    title: "Clean Code",
    description: "Code is read more than written. I prioritize readability, maintainability, and proper documentation to ensure long-term project success."
  },
  {
    icon: "ChartBarIcon",
    title: "Performance First",
    description: "Optimization isn't premature when done right. I focus on writing efficient algorithms and scalable architectures from the ground up."
  },
  {
    icon: "UserGroupIcon",
    title: "Team Collaboration",
    description: "Great software is built by great teams. I value clear communication, code reviews, and knowledge sharing to elevate collective expertise."
  }];


  const timelineEvents: TimelineEvent[] = [
  {
    year: "2024",
    title: "Software Engineering Intern",
    organization: "IIT Kharagpur - Technology Innovation Hub",
    description: "Contributed to cutting-edge research projects focusing on scalable backend systems and data processing pipelines. Worked closely with professors and PhD students on real-world problem-solving.",
    achievements: [
    "Optimized database queries reducing response time by 40%",
    "Implemented RESTful APIs serving 10,000+ daily requests",
    "Collaborated with cross-functional teams on microservices architecture",
    "Mentored junior developers on best coding practices"],

    type: "experience"
  },
  {
    year: "2023",
    title: "Bachelor of Technology in Computer Science",
    organization: "Premier Engineering College",
    description: "Built strong foundations in data structures, algorithms, operating systems, and database management. Maintained excellent academic performance while actively participating in coding competitions.",
    achievements: [
    "CGPA: 8.7/10.0 with Dean's List recognition",
    "Led college coding club with 200+ active members",
    "Won 3 inter-college hackathons focusing on backend solutions",
    "Published research paper on distributed systems optimization"],

    type: "education"
  },
  {
    year: "2022",
    title: "Technical Lead - College Fest",
    organization: "Annual Technical Symposium",
    description: "Managed technical infrastructure for college's largest annual event with 5,000+ participants. Coordinated with 15-member technical team to ensure seamless event execution.",
    achievements: [
    "Developed event management system handling 5,000+ registrations",
    "Implemented real-time leaderboard for coding competitions",
    "Zero downtime during 3-day event with 50+ concurrent sessions",
    "Received Best Technical Team award from college administration"],

    type: "achievement"
  },
  {
    year: "2021",
    title: "First Open Source Contribution",
    organization: "Major Python Framework",
    description: "Made first significant contribution to open-source community by fixing critical bug in popular Python web framework. This experience sparked passion for collaborative development.",
    achievements: [
    "Pull request merged into main branch with 50K+ stars",
    "Bug fix improved performance for 100,000+ developers",
    "Received mentorship from core maintainers",
    "Started contributing regularly to multiple projects"],

    type: "achievement"
  }];


  const interests: Interest[] = [
  {
    icon: "BookOpenIcon",
    title: "Technical Reading",
    description: "Constantly exploring system design books, research papers, and technical blogs to deepen understanding of distributed systems and scalability patterns.",
    image: "https://images.unsplash.com/photo-1684679601884-a6061e4f12ec",
    imageAlt: "Stack of technical programming books on wooden desk with laptop and coffee mug in background"
  },
  {
    icon: "MusicalNoteIcon",
    title: "Music Production",
    description: "Creating electronic music as a creative outlet. The logical patterns in music composition surprisingly mirror software architecture principles.",
    image: "https://images.unsplash.com/photo-1625017134591-7b7db7bcd640",
    imageAlt: "Digital audio workstation software interface on laptop screen with MIDI keyboard and studio monitors"
  },
  {
    icon: "CameraIcon",
    title: "Photography",
    description: "Capturing moments through street and landscape photography. The attention to detail required translates well into debugging and code optimization.",
    image: "https://images.unsplash.com/photo-1640110441124-d22c2d51767e",
    imageAlt: "Professional DSLR camera with telephoto lens on tripod overlooking mountain landscape at sunset"
  }];


  const values: Value[] = [
  {
    icon: "ShieldCheckIcon",
    title: "Reliability",
    description: "I take ownership of my work and ensure deliverables meet the highest standards. When I commit to a deadline or feature, stakeholders can trust it will be delivered with quality and on time.",
    quote: "Reliability is doing what you say you'll do, when you say you'll do it"
  },
  {
    icon: "AcademicCapIcon",
    title: "Growth Mindset",
    description: "Every challenge is an opportunity to learn. I embrace failures as learning experiences and actively seek feedback to continuously improve my technical and soft skills.",
    quote: "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice"
  },
  {
    icon: "HandRaisedIcon",
    title: "Transparency",
    description: "Open communication builds trust. I believe in sharing progress honestly, raising blockers early, and maintaining clear documentation so teams can collaborate effectively.",
    quote: "Transparency breeds trust, and trust is the foundation of great teams"
  },
  {
    icon: "SparklesIcon",
    title: "Excellence",
    description: "Good enough is never good enough. I strive for excellence in every line of code, every system design, and every interaction, pushing boundaries while maintaining pragmatism.",
    quote: "Excellence is not a destination; it's a continuous journey that never ends"
  }];


  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <HeroSection
        name={heroData.name}
        title={heroData.title}
        image={heroData.image}
        imageAlt={heroData.imageAlt} />

      
      <PhilosophySection philosophies={philosophies} />
      
      <JourneyTimeline events={timelineEvents} />
      
      <PersonalitySection interests={interests} />
      
      <ValuesSection values={values} />
      
      <CTASection bioUrl="/assets/ayush-rawat-bio.pdf" />
    </main>);

}