'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface CodeSnippet {
  id: number;
  code: string;
  language: string;
  top: string;
  left: string;
  delay: number;
}

const HeroSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = 'Backend Engineer & Problem Solver';

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [isHydrated]);

  const codeSnippets: CodeSnippet[] = [
    {
      id: 1,
      code: 'const solve = (problem) => {\n  return optimized(solution);\n}',
      language: 'javascript',
      top: '10%',
      left: '5%',
      delay: 0,
    },
    {
      id: 2,
      code: 'def optimize(algorithm):\n    return performance * 2',
      language: 'python',
      top: '60%',
      left: '80%',
      delay: 0.5,
    },
    {
      id: 3,
      code: 'SELECT * FROM skills\nWHERE expertise > 0.8',
      language: 'sql',
      top: '75%',
      left: '10%',
      delay: 1,
    },
    {
      id: 4,
      code: 'public class Engineer {\n  private final String passion;\n}',
      language: 'java',
      top: '20%',
      left: '85%',
      delay: 1.5,
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: 'CodeBracketIcon',
      url: 'https://github.com/ayushrawat',
      label: 'View GitHub Profile',
    },
    {
      name: 'LinkedIn',
      icon: 'BriefcaseIcon',
      url: 'https://linkedin.com/in/ayushrawat',
      label: 'Connect on LinkedIn',
    },
    {
      name: 'Email',
      icon: 'EnvelopeIcon',
      url: 'mailto:ayush.rawat@example.com',
      label: 'Send Email',
    },
  ];

  const stats = [
    { label: 'Years Experience', value: '2+' },
    { label: 'Projects Completed', value: '15+' },
    { label: 'Technologies', value: '20+' },
    { label: 'Code Commits', value: '1000+' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Code Snippets Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {codeSnippets.map((snippet) => (
          <div
            key={snippet.id}
            className="absolute font-mono text-xs text-primary animate-float"
            style={{
              top: snippet.top,
              left: snippet.left,
              animationDelay: `${snippet.delay}s`,
            }}
          >
            <pre className="whitespace-pre-wrap">{snippet.code}</pre>
          </div>
        ))}
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* Greeting */}
          <div className="space-y-2 animate-fade-in">
            <p className="text-primary font-mono text-sm sm:text-base">
              Hi, my name is
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground">
              Ayush Rawat
            </h1>
          </div>

          {/* Typed Role */}
          <div className="h-16 sm:h-20 flex items-center justify-center">
            {isHydrated ? (
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-muted-foreground font-mono">
                {typedText}
                <span className="animate-blink">|</span>
              </h2>
            ) : (
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-muted-foreground font-mono">
                Backend Engineer & Problem Solver
              </h2>
            )}
          </div>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed animate-fade-in-delay">
            I build scalable backend systems and solve complex problems with
            clean, efficient code. Specializing in system optimization,
            debugging, and creating robust architectures that power modern
            applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 animate-fade-in-delay-2">
            <Link
              href="/projects"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-elevation flex items-center justify-center gap-2"
            >
              <Icon name="RocketLaunchIcon" size={20} variant="solid" />
              View My Work
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-card text-foreground font-semibold rounded-lg border-2 border-primary hover:bg-primary/10 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={20} variant="outline" />
              Get In Touch
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 pt-8 animate-fade-in-delay-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-3 rounded-lg bg-card hover:bg-primary/10 border border-border hover:border-primary transition-all duration-300 transform hover:scale-110 group"
              >
                <Icon
                  name={link.icon as any}
                  size={24}
                  variant="outline"
                  className="text-muted-foreground group-hover:text-primary transition-colors duration-300"
                />
              </a>
            ))}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-16 max-w-4xl mx-auto animate-fade-in-delay-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-lg border border-border hover:border-primary transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-3xl sm:text-4xl font-bold text-primary font-mono">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="pt-16 animate-bounce">
            <Icon
              name="ChevronDownIcon"
              size={32}
              variant="outline"
              className="text-primary mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;