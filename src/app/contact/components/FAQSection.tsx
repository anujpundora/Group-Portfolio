'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export default function FAQSection() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const faqs: FAQ[] = [
    {
      question: 'What is your typical response time?',
      answer: 'I aim to respond to all inquiries within 24-48 hours during business days. For urgent technical discussions or job opportunities, I prioritize responses and typically reply within 12-24 hours.',
      category: 'General',
    },
    {
      question: 'Are you available for remote work?',
      answer: 'Yes, I am open to fully remote positions as well as hybrid arrangements. I have experience working in distributed teams and am comfortable with asynchronous communication and remote collaboration tools.',
      category: 'Availability',
    },
    {
      question: 'What types of opportunities are you seeking?',
      answer: 'I am primarily seeking full-time backend or full-stack developer positions where I can leverage my expertise in Java, Spring Boot, and system design. I am particularly interested in roles that involve building scalable systems, optimizing performance, and solving complex technical challenges.',
      category: 'Career',
    },
    {
      question: 'Do you accept freelance or contract work?',
      answer: 'While my primary focus is on full-time opportunities, I am open to discussing interesting contract projects, especially those involving backend architecture, API development, or performance optimization. Please reach out with project details.',
      category: 'Work Type',
    },
    {
      question: 'Can you provide references or recommendations?',
      answer: 'Yes, I can provide professional references from my internship at IIT Kharagpur and academic mentors. LinkedIn recommendations are also available on my profile. Please request these during the interview process.',
      category: 'References',
    },
    {
      question: 'What is your preferred tech stack?',
      answer: 'My core expertise is in Java, Spring Boot, MySQL, and RESTful API development. I also have experience with React, Next.js, and modern frontend technologies. I am always eager to learn new technologies that align with project requirements.',
      category: 'Technical',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!isHydrated) {
    return (
      <div className="bg-card rounded-lg p-6 sm:p-8 border border-border">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-muted rounded w-1/3"></div>
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-16 bg-muted rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg p-6 sm:p-8 border border-border">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Frequently Asked Questions</h2>
        <p className="text-muted-foreground">
          Quick answers to common questions about availability, work preferences, and collaboration.
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-border rounded-lg overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 flex items-center justify-between bg-muted/50 hover:bg-muted transition-colors text-left"
            >
              <div className="flex-1 pr-4">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                    {faq.category}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground">{faq.question}</h3>
              </div>
              <Icon
                name="ChevronDownIcon"
                size={20}
                className={`text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="px-6 py-4 bg-background">
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
        <div className="flex items-start space-x-3">
          <Icon name="QuestionMarkCircleIcon" size={20} className="text-primary flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-foreground mb-1">Still have questions?</h3>
            <p className="text-sm text-muted-foreground">
              Don't hesitate to reach out through the contact form above. I'm happy to discuss any specific questions about my experience, skills, or availability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}