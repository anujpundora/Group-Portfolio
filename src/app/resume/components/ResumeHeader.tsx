import Icon from '@/components/ui/AppIcon';

interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  website: string;
}

interface ResumeHeaderProps {
  personalInfo: PersonalInfo;
}

const ResumeHeader = ({ personalInfo }: ResumeHeaderProps) => {
  const contactItems = [
    { icon: 'EnvelopeIcon', value: personalInfo.email, link: `mailto:${personalInfo.email}` },
    { icon: 'PhoneIcon', value: personalInfo.phone, link: `tel:${personalInfo.phone}` },
    { icon: 'MapPinIcon', value: personalInfo.location, link: null },
  ];

  const socialItems = [
    { icon: 'LinkIcon', value: personalInfo.linkedin, link: `https://${personalInfo.linkedin}` },
    { icon: 'CodeBracketIcon', value: personalInfo.github, link: `https://${personalInfo.github}` },
    { icon: 'GlobeAltIcon', value: personalInfo.website, link: `https://${personalInfo.website}` },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-primary/5 via-background to-brand-secondary/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-3 font-mono">
            {personalInfo.name}
          </h1>
          <p className="text-xl sm:text-2xl text-primary font-semibold">
            {personalInfo.title}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Contact Information */}
          <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
              <Icon name="InformationCircleIcon" size={20} className="mr-2 text-primary" />
              Contact Information
            </h3>
            <div className="space-y-3">
              {contactItems.map((item, index) => (
                <div key={index} className="flex items-center text-muted-foreground">
                  <Icon name={item.icon} size={18} className="mr-3 text-primary flex-shrink-0" />
                  {item.link ? (
                    <a
                      href={item.link}
                      className="hover:text-primary transition-colors duration-200"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
              <Icon name="ShareIcon" size={20} className="mr-2 text-primary" />
              Online Presence
            </h3>
            <div className="space-y-3">
              {socialItems.map((item, index) => (
                <div key={index} className="flex items-center text-muted-foreground">
                  <Icon name={item.icon} size={18} className="mr-3 text-primary flex-shrink-0" />
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors duration-200 truncate"
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeHeader;