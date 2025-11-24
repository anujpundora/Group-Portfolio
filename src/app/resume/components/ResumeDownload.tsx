'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const ResumeDownload = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    
    // Simulate download delay
    setTimeout(() => {
      // In production, this would trigger actual PDF download
      // For now, we'll just show the loading state
      setIsDownloading(false);
      
      // Actual download implementation would be:
      // const link = document.createElement('a');
      // link.href = '/assets/ayush-rawat-resume.pdf';
      // link.download = 'Ayush_Rawat_Resume.pdf';
      // link.click();
    }, 1500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-primary/5 via-background to-brand-secondary/5">
      <div className="max-w-5xl mx-auto text-center">
        <div className="bg-card rounded-lg p-8 sm:p-12 border border-border shadow-lg">
          <div className="mb-6">
            <Icon name="DocumentArrowDownIcon" size={48} className="text-primary mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Download Resume
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get a PDF copy of my complete resume with all details about my experience, 
              education, and skills. Perfect for sharing with recruiters and hiring managers.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="group px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-3 min-w-[200px] justify-center"
            >
              {isDownloading ? (
                <>
                  <Icon name="ArrowPathIcon" size={20} className="animate-spin" />
                  <span>Downloading...</span>
                </>
              ) : (
                <>
                  <Icon name="ArrowDownTrayIcon" size={20} />
                  <span>Download PDF</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="group px-8 py-4 bg-card text-foreground font-semibold rounded-lg border-2 border-primary hover:bg-primary/5 transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 min-w-[200px] justify-center"
            >
              <Icon name="PrinterIcon" size={20} className="text-primary" />
              <span>Print Resume</span>
            </button>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Last updated: November 2025 • File size: ~150KB • Format: PDF
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeDownload;