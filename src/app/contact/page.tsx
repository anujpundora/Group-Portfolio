import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import FAQSection from './components/FAQSection';

export const metadata: Metadata = {
  title: 'Contact - Ayush Rawat Portfolio',
  description: 'Get in touch with Ayush Rawat for job opportunities, technical discussions, collaborations, or mentorship. Available for full-time backend and full-stack developer positions with 24-48 hour response time.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-primary">Available for Opportunities</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Let's <span className="text-primary">Connect</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you have a job opportunity, want to discuss a technical challenge, or explore collaboration possibilities, I'd love to hear from you.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Form - Takes 2 columns on large screens */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <ContactInfo />
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-12">
            <FAQSection />
          </div>

          {/* Location Map */}
          <div className="bg-card rounded-lg p-6 border border-border">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-foreground mb-2">Location</h2>
              <p className="text-muted-foreground">
                Based in Kharagpur, West Bengal, India. Open to remote work and relocation opportunities worldwide.
              </p>
            </div>
            <div className="w-full h-96 rounded-lg overflow-hidden border border-border">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="Kharagpur, West Bengal, India"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=22.3149,87.3105&z=14&output=embed"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Trust Signals */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg p-6 border border-border text-center">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-1">Verified Professional</h3>
              <p className="text-sm text-muted-foreground">IIT Kharagpur Internship</p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-1">24-48 Hour Response</h3>
              <p className="text-sm text-muted-foreground">Quick turnaround time</p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-1">Secure Communication</h3>
              <p className="text-sm text-muted-foreground">SSL encrypted contact</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-border bg-card mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Ayush Rawat. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}