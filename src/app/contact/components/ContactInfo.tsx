import Icon from '@/components/ui/AppIcon';

interface ContactMethod {
  icon: string;
  label: string;
  value: string;
  href: string;
  description: string;
  responseTime: string;
}

export default function ContactInfo() {
  const contactMethods: ContactMethod[] = [
    {
      icon: 'EnvelopeIcon',
      label: 'Email',
      value: 'ayush.rawat@example.com',
      href: 'mailto:ayush.rawat@example.com',
      description: 'Best for detailed inquiries and job opportunities',
      responseTime: '24-48 hours',
    },
    {
      icon: 'PhoneIcon',
      label: 'Phone',
      value: '+91 98765 43210',
      href: 'tel:+919876543210',
      description: 'Available for urgent technical discussions',
      responseTime: 'Mon-Fri, 10 AM - 6 PM IST',
    },
    {
      icon: 'MapPinIcon',
      label: 'Location',
      value: 'Kharagpur, West Bengal, India',
      href: 'https://maps.google.com/?q=22.3149,87.3105',
      description: 'Open to remote opportunities worldwide',
      responseTime: 'UTC+5:30 (IST)',
    },
  ];

  const socialLinks = [
    {
      icon: 'CodeBracketIcon',
      label: 'GitHub',
      username: '@ayushrawat',
      href: 'https://github.com/ayushrawat',
      color: 'text-foreground',
    },
    {
      icon: 'BriefcaseIcon',
      label: 'LinkedIn',
      username: 'Ayush Rawat',
      href: 'https://linkedin.com/in/ayushrawat',
      color: 'text-blue-500',
    },
    {
      icon: 'ChatBubbleLeftRightIcon',
      label: 'Twitter',
      username: '@ayushrawat_dev',
      href: 'https://twitter.com/ayushrawat_dev',
      color: 'text-blue-400',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Availability Status */}
      <div className="bg-success/10 border border-success rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <div className="relative flex-shrink-0">
            <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
            <div className="absolute inset-0 w-3 h-3 bg-success rounded-full animate-ping"></div>
          </div>
          <div>
            <h3 className="font-semibold text-success mb-1">Available for Opportunities</h3>
            <p className="text-sm text-success-foreground">
              Currently seeking full-time backend/full-stack developer positions. Open to remote work and relocation.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="bg-card rounded-lg p-6 border border-border">
        <h2 className="text-xl font-bold text-foreground mb-4">Contact Information</h2>
        <div className="space-y-4">
          {contactMethods.map((method) => (
            <a
              key={method.label}
              href={method.href}
              target={method.label === 'Location' ? '_blank' : undefined}
              rel={method.label === 'Location' ? 'noopener noreferrer' : undefined}
              className="block p-4 bg-muted/50 rounded-lg hover:bg-muted transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon name={method.icon as any} size={20} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-foreground">{method.label}</h3>
                    <Icon
                      name="ArrowTopRightOnSquareIcon"
                      size={16}
                      className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <p className="text-sm font-mono text-primary mb-1">{method.value}</p>
                  <p className="text-xs text-muted-foreground mb-1">{method.description}</p>
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Icon name="ClockIcon" size={14} />
                    <span>{method.responseTime}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="bg-card rounded-lg p-6 border border-border">
        <h2 className="text-xl font-bold text-foreground mb-4">Connect on Social Media</h2>
        <div className="space-y-3">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-all duration-300 group"
            >
              <div className="flex items-center space-x-3">
                <Icon name={social.icon as any} size={20} className={social.color} />
                <div>
                  <h3 className="font-semibold text-foreground">{social.label}</h3>
                  <p className="text-sm text-muted-foreground">{social.username}</p>
                </div>
              </div>
              <Icon
                name="ArrowTopRightOnSquareIcon"
                size={16}
                className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-card rounded-lg p-6 border border-border">
        <h2 className="text-xl font-bold text-foreground mb-4">Quick Actions</h2>
        <div className="space-y-3">
          <a
            href="/assets/resume/ayush-rawat-resume.pdf"
            download
            className="flex items-center justify-between p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-all duration-300 group"
          >
            <div className="flex items-center space-x-3">
              <Icon name="DocumentArrowDownIcon" size={20} className="text-primary" />
              <div>
                <h3 className="font-semibold text-foreground">Download Resume</h3>
                <p className="text-sm text-muted-foreground">PDF format, updated Nov 2025</p>
              </div>
            </div>
            <Icon
              name="ArrowDownTrayIcon"
              size={16}
              className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </a>

          <a
            href="https://calendly.com/ayushrawat"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-accent/10 rounded-lg hover:bg-accent/20 transition-all duration-300 group"
          >
            <div className="flex items-center space-x-3">
              <Icon name="CalendarIcon" size={20} className="text-accent" />
              <div>
                <h3 className="font-semibold text-foreground">Schedule a Meeting</h3>
                <p className="text-sm text-muted-foreground">Book a 30-minute call</p>
              </div>
            </div>
            <Icon
              name="ArrowTopRightOnSquareIcon"
              size={16}
              className="text-accent opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </a>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-br from-primary/10 to-brand-secondary/10 rounded-lg p-6 border border-primary/20">
        <div className="flex items-start space-x-3 mb-4">
          <Icon name="EnvelopeOpenIcon" size={24} className="text-primary flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-foreground mb-1">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to receive career updates, new projects, and technical blog posts.
            </p>
          </div>
        </div>
        <form className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="your.email@example.com"
            className="flex-1 px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}