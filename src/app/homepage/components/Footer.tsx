'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const Footer = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentYear, setCurrentYear] = useState(2025);

  useEffect(() => {
    setIsHydrated(true);
    setCurrentYear(new Date().getFullYear());
  }, []);

  const footerLinks = {
    navigation: [
      { label: 'Home', href: '/homepage' },
      { label: 'About', href: '/about' },
      { label: 'Experience', href: '/experience' },
      { label: 'Projects', href: '/projects' },
      { label: 'Skills', href: '/skills' },
      { label: 'Contact', href: '/contact' },
    ],
    social: [
      {
        name: 'GitHub',
        icon: 'CodeBracketIcon',
        url: 'https://github.com/ayushrawat',
      },
      {
        name: 'LinkedIn',
        icon: 'BriefcaseIcon',
        url: 'https://linkedin.com/in/ayushrawat',
      },
      {
        name: 'Twitter',
        icon: 'AtSymbolIcon',
        url: 'https://twitter.com/ayushrawat',
      },
      {
        name: 'Email',
        icon: 'EnvelopeIcon',
        url: 'mailto:ayush.rawat@example.com',
      },
    ],
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/homepage" className="flex items-center space-x-2 group">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:scale-110"
              >
                <rect width="40" height="40" rx="8" fill="url(#gradient)" />
                <path
                  d="M12 28L16 12H20L24 28H20L19 24H15L14 28H12ZM15.5 21H18.5L17 15L15.5 21Z"
                  fill="currentColor"
                  className="text-background"
                />
                <path
                  d="M24 28V12H28C29.1 12 30 12.4 30.6 13.2C31.2 14 31.5 15 31.5 16.2V17.8C31.5 19 31.2 20 30.6 20.8C30 21.6 29.1 22 28 22H27V28H24ZM27 19H28C28.3 19 28.5 18.9 28.7 18.7C28.9 18.5 29 18.2 29 17.8V16.2C29 15.8 28.9 15.5 28.7 15.3C28.5 15.1 28.3 15 28 15H27V19Z"
                  fill="currentColor"
                  className="text-background"
                />
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="40" y2="40">
                    <stop offset="0%" stopColor="var(--color-primary)" />
                    <stop offset="100%" stopColor="var(--color-brand-secondary)" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-xl font-bold text-foreground font-mono">
                Ayush<span className="text-primary">.</span>dev
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Backend Engineer & Problem Solver building scalable systems and
              elegant solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Quick Links
            </h3>
            <nav className="grid grid-cols-2 gap-2">
              {footerLinks.navigation.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Connect With Me
            </h3>
            <div className="flex gap-4">
              {footerLinks.social.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="p-3 rounded-lg bg-background hover:bg-primary/10 border border-border hover:border-primary transition-all duration-300 transform hover:scale-110 group"
                >
                  <Icon
                    name={social.icon as any}
                    size={20}
                    variant="outline"
                    className="text-muted-foreground group-hover:text-primary transition-colors duration-300"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            {isHydrated ? (
              <>© {currentYear} Ayush Rawat. All rights reserved.</>
            ) : (
              <>© 2025 Ayush Rawat. All rights reserved.</>
            )}
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <Icon name="HeartIcon" size={16} variant="solid" className="text-primary" />
            <span>and Next.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;