'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  inquiryType: string;
  message: string;
  resume: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    inquiryType: 'job',
    message: '',
    resume: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const inquiryTypes = [
    { value: 'job', label: 'Job Opportunity', icon: 'BriefcaseIcon' },
    { value: 'collaboration', label: 'Collaboration', icon: 'UserGroupIcon' },
    { value: 'mentorship', label: 'Mentorship', icon: 'AcademicCapIcon' },
    { value: 'technical', label: 'Technical Discussion', icon: 'CodeBracketIcon' },
    { value: 'other', label: 'Other', icon: 'ChatBubbleLeftRightIcon' },
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.phone && !/^\+?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Message must be at least 20 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      inquiryType: 'job',
      message: '',
      resume: false,
    });

    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear error for this field
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  if (!isHydrated) {
    return (
      <div className="bg-card rounded-lg p-8 border border-border">
        <div className="animate-pulse space-y-6">
          <div className="h-12 bg-muted rounded"></div>
          <div className="h-12 bg-muted rounded"></div>
          <div className="h-12 bg-muted rounded"></div>
          <div className="h-32 bg-muted rounded"></div>
          <div className="h-12 bg-muted rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg p-6 sm:p-8 border border-border">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Send a Message</h2>
        <p className="text-muted-foreground">
          Fill out the form below and I'll get back to you within 24-48 hours.
        </p>
      </div>

      {submitSuccess && (
        <div className="mb-6 p-4 bg-success/10 border border-success rounded-lg flex items-start space-x-3">
          <Icon name="CheckCircleIcon" size={24} variant="solid" className="text-success flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-success mb-1">Message Sent Successfully!</h3>
            <p className="text-sm text-success-foreground">
              Thank you for reaching out. I'll review your message and respond as soon as possible.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Full Name <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-input border ${
              errors.name ? 'border-destructive' : 'border-border'
            } rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all`}
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-destructive flex items-center space-x-1">
              <Icon name="ExclamationCircleIcon" size={16} variant="solid" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        {/* Email and Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email Address <span className="text-destructive">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-input border ${
                errors.email ? 'border-destructive' : 'border-border'
              } rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all`}
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-destructive flex items-center space-x-1">
                <Icon name="ExclamationCircleIcon" size={16} variant="solid" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
              Phone Number <span className="text-muted-foreground text-xs">(Optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-input border ${
                errors.phone ? 'border-destructive' : 'border-border'
              } rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all`}
              placeholder="+1 (555) 123-4567"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-destructive flex items-center space-x-1">
                <Icon name="ExclamationCircleIcon" size={16} variant="solid" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>
        </div>

        {/* Inquiry Type */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Inquiry Type <span className="text-destructive">*</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {inquiryTypes.map((type) => (
              <label
                key={type.value}
                className={`relative flex flex-col items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  formData.inquiryType === type.value
                    ? 'border-primary bg-primary/10' :'border-border hover:border-muted-foreground'
                }`}
              >
                <input
                  type="radio"
                  name="inquiryType"
                  value={type.value}
                  checked={formData.inquiryType === type.value}
                  onChange={handleChange}
                  className="sr-only"
                />
                <Icon
                  name={type.icon as any}
                  size={24}
                  variant={formData.inquiryType === type.value ? 'solid' : 'outline'}
                  className={`mb-2 ${
                    formData.inquiryType === type.value ? 'text-primary' : 'text-muted-foreground'
                  }`}
                />
                <span
                  className={`text-xs font-medium text-center ${
                    formData.inquiryType === type.value ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {type.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
            Subject <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-input border ${
              errors.subject ? 'border-destructive' : 'border-border'
            } rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all`}
            placeholder="Backend Developer Position - Full Stack Role"
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-destructive flex items-center space-x-1">
              <Icon name="ExclamationCircleIcon" size={16} variant="solid" />
              <span>{errors.subject}</span>
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Message <span className="text-destructive">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className={`w-full px-4 py-3 bg-input border ${
              errors.message ? 'border-destructive' : 'border-border'
            } rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none`}
            placeholder="Tell me about the opportunity, project, or how I can help..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-destructive flex items-center space-x-1">
              <Icon name="ExclamationCircleIcon" size={16} variant="solid" />
              <span>{errors.message}</span>
            </p>
          )}
          <p className="mt-1 text-xs text-muted-foreground">
            Minimum 20 characters ({formData.message.length}/20)
          </p>
        </div>

        {/* Resume Request */}
        <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
          <input
            type="checkbox"
            id="resume"
            name="resume"
            checked={formData.resume}
            onChange={handleChange}
            className="mt-1 w-4 h-4 text-primary bg-input border-border rounded focus:ring-2 focus:ring-primary cursor-pointer"
          />
          <label htmlFor="resume" className="text-sm text-foreground cursor-pointer">
            <span className="font-medium">Request Resume & Portfolio</span>
            <p className="text-muted-foreground mt-1">
              I'll include my latest resume and detailed project portfolio in my response.
            </p>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
              <span>Sending Message...</span>
            </>
          ) : (
            <>
              <Icon name="PaperAirplaneIcon" size={20} variant="solid" />
              <span>Send Message</span>
            </>
          )}
        </button>

        <p className="text-xs text-muted-foreground text-center">
          By submitting this form, you agree to receive a response via email within 24-48 hours.
        </p>
      </form>
    </div>
  );
}