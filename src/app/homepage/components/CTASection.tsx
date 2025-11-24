'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const CTASection = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleResumeDownload = () => {
    if (!isHydrated) return;
    // Mock resume download tracking
    console.log('Resume download tracked');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-brand-secondary/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="p-4 bg-primary/20 rounded-full">
              <Icon
                name="RocketLaunchIcon"
                size={48}
                variant="solid"
                className="text-primary"
              />
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm currently open to new opportunities and exciting projects. Let's discuss how I can contribute to your team's success.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto py-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary font-mono">
                &lt;24h
              </div>
              <div className="text-sm text-muted-foreground">
                Response Time
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary font-mono">
                100%
              </div>
              <div className="text-sm text-muted-foreground">
                Commitment
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary font-mono">
                Remote
              </div>
              <div className="text-sm text-muted-foreground">
                Available
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-elevation flex items-center justify-center gap-2"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={20} variant="solid" />
              Start a Conversation
            </Link>
            <button
              onClick={handleResumeDownload}
              className="w-full sm:w-auto px-8 py-4 bg-card text-foreground font-semibold rounded-lg border-2 border-primary hover:bg-primary/10 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Icon name="DocumentArrowDownIcon" size={20} variant="outline" />
              Download Resume
            </button>
          </div>

          {/* Contact Info */}
          <div className="pt-8 space-y-4">
            <p className="text-sm text-muted-foreground">
              Prefer email? Reach me directly at
            </p>
            <a
              href="mailto:ayush.rawat@example.com"
              className="text-primary hover:text-primary/80 font-mono text-lg transition-colors duration-300"
            >
              ayush.rawat@example.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;