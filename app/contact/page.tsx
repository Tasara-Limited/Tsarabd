<<<<<<< HEAD
// app/contact/page.tsx
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
} from 'lucide-react';

// ---------- Types ----------
type FormFields = {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof FormFields, string>>;

const MESSAGE_MAX = 1000;
const MESSAGE_MIN = 10;

export default function ContactPage() {
  const [formData, setFormData] = useState<FormFields>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormFields, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // ---------- Validation ----------
  const validateField = (field: keyof FormFields, value: string): string => {
    switch (field) {
      case 'name':
        if (!value.trim()) return 'Please enter your full name.';
        if (value.trim().length < 2) return 'Name must be at least 2 characters.';
        return '';
      case 'email':
        if (!value.trim()) return 'Please enter your email address.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return 'Please enter a valid email address.';
        return '';
      case 'phone':
        if (value && !/^[+\d\s()-]{7,20}$/.test(value))
          return 'Please enter a valid phone number.';
        return '';
      case 'message':
        if (!value.trim()) return 'Please write a message.';
        if (value.trim().length < MESSAGE_MIN)
          return `Message must be at least ${MESSAGE_MIN} characters.`;
        if (value.length > MESSAGE_MAX)
          return `Message cannot exceed ${MESSAGE_MAX} characters.`;
        return '';
      default:
        return '';
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Live validation: only re-validate if field was touched
    if (touched[name as keyof FormFields]) {
      const error = validateField(name as keyof FormFields, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name as keyof FormFields, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  // ---------- Submit ----------
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: FieldErrors = {};
    (Object.keys(formData) as (keyof FormFields)[]).forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });

    setTouched({
      name: true,
      email: true,
      company: true,
      phone: true,
      message: true,
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      // Scroll to first error
      const firstErrorField = Object.keys(newErrors)[0];
      const el = document.getElementById(firstErrorField);
      el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el?.focus();
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', phone: '', message: '' });
        setTouched({});
        setErrors({});
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      setErrorMessage(
        'Network error. Please check your connection and try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitStatus('idle');
    setErrorMessage('');
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* ============ Hero Section ============ */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-28 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className="max-w-4xl mx-auto text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6 text-sm">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-gray-200">We&apos;re online — reply within 24 hours</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Get in touch with our team for quotes, inquiries, or partnership
              opportunities
=======

// app/contact/page.tsx
'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  // Show success message if redirected from FormSubmit
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      alert('Thank you! Your message has been sent. We’ll get back to you soon.');
    }
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up" data-aos-duration="1000">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Get in touch with our team for quotes, inquiries, or partnership opportunities
>>>>>>> 66836520f39302f443cfccb6428169fdaac62986
            </p>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* ============ Main Content ============ */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* ===== Top Info Cards ===== */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
=======
      {/* Main Content Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Info Cards (Staggered Animation) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
>>>>>>> 66836520f39302f443cfccb6428169fdaac62986
            {[
              {
                icon: MapPin,
                title: 'Our Office',
<<<<<<< HEAD
                content:
                  'House No # 15, Road No: 05, Sector 11, Uttara, Dhaka, Bangladesh',
                href: 'https://maps.google.com/?q=Tasara+Limited+Uttara+Dhaka',
=======
                content: 'House No # 15 , Road No: 05 , Sector 11, Uttara, Dhaka, Bangladesh',
>>>>>>> 66836520f39302f443cfccb6428169fdaac62986
              },
              {
                icon: Phone,
                title: 'Phone',
                content: '+8801886538187',
<<<<<<< HEAD
                href: 'tel:+8801886538187',
=======
>>>>>>> 66836520f39302f443cfccb6428169fdaac62986
              },
              {
                icon: Mail,
                title: 'Email',
                content: 'sales@tasarabd.com',
<<<<<<< HEAD
                href: 'mailto:sales@tasarabd.com',
              },
            ].map((item, index) => (
              <div
                key={item.title}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={index * 150}
              >
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <Card className="text-center h-full hover:shadow-xl border-gray-100 transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                    <CardContent className="pt-8 pb-8">
                      <div className="w-14 h-14 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-sm transition-transform duration-300 group-hover:scale-110">
                        <item.icon className="h-6 w-6 text-brand-500" />
                      </div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed px-2 text-sm sm:text-base">
                        {item.content}
                      </p>
                    </CardContent>
                  </Card>
                </a>
=======
              },
            ].map((item, index) => (
              <div 
                key={item.title}
                data-aos="fade-up" 
                data-aos-duration="800" 
                data-aos-delay={index * 150}
              >
                <Card className="text-center h-full hover:shadow-xl border-gray-100 transition-all duration-300 hover:-translate-y-1 group">
                  <CardContent className="pt-8">
                    <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-sm transition-transform duration-300 group-hover:scale-110">
                      <item.icon className="h-6 w-6 text-brand-500" />
                    </div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed px-4">{item.content}</p>
                  </CardContent>
                </Card>
>>>>>>> 66836520f39302f443cfccb6428169fdaac62986
              </div>
            ))}
          </div>

<<<<<<< HEAD
          {/* ===== Form + Side Info ===== */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start mb-12 lg:mb-16">
            {/* ---- Contact Form (span 3) ---- */}
            <div
              className="lg:col-span-3"
              data-aos="fade-right"
              data-aos-duration="900"
            >
              <Card className="border-gray-100 shadow-lg shadow-gray-100/50 overflow-hidden">
                {/* Card header with success indicator */}
                <CardHeader className="pb-4 border-b border-gray-50 bg-gradient-to-br from-gray-50/50 to-white">
                  <CardTitle className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Send Us a Message
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    Fill out the form below and we&apos;ll get back to you within
                    24 hours
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-6">
                  {/* ===== SUCCESS STATE ===== */}
                  {submitStatus === 'success' ? (
                    <div className="text-center py-10 px-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                        <CheckCircle2 className="h-10 w-10 text-emerald-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-600 mb-2 max-w-md mx-auto">
                        Thank you for reaching out. Our team has received your
                        message and will respond within 24 hours.
                      </p>
                      <p className="text-sm text-gray-400 mb-8">
                        A copy has been sent to our sales team.
                      </p>
                      <Button
                        onClick={resetForm}
                        variant="outline"
                        className="border-brand-500 text-brand-500 hover:bg-brand-50 rounded-xl px-6 h-11"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    /* ===== FORM STATE ===== */
                    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                      {/* Row 1: Name + Email */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <Label
                            htmlFor="name"
                            className="text-gray-700 font-medium text-sm"
                          >
                            Full Name <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            value={formData.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="John Doe"
                            aria-invalid={!!errors.name}
                            aria-describedby={errors.name ? 'name-error' : undefined}
                            className={`mt-1.5 h-11 border-gray-200 focus-visible:ring-brand-500 ${
                              errors.name ? 'border-red-400 focus-visible:ring-red-400' : ''
                            }`}
                          />
                          {errors.name && (
                            <p
                              id="name-error"
                              className="text-red-500 text-xs mt-1.5 flex items-center gap-1"
                            >
                              <AlertCircle className="h-3 w-3" />
                              {errors.name}
                            </p>
                          )}
                        </div>

                        <div>
                          <Label
                            htmlFor="email"
                            className="text-gray-700 font-medium text-sm"
                          >
                            Email Address <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="john@company.com"
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? 'email-error' : undefined}
                            className={`mt-1.5 h-11 border-gray-200 focus-visible:ring-brand-500 ${
                              errors.email ? 'border-red-400 focus-visible:ring-red-400' : ''
                            }`}
                          />
                          {errors.email && (
                            <p
                              id="email-error"
                              className="text-red-500 text-xs mt-1.5 flex items-center gap-1"
                            >
                              <AlertCircle className="h-3 w-3" />
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Row 2: Company + Phone */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <Label
                            htmlFor="company"
                            className="text-gray-700 font-medium text-sm"
                          >
                            Company Name
                          </Label>
                          <Input
                            id="company"
                            name="company"
                            type="text"
                            autoComplete="organization"
                            value={formData.company}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="ABC Corporation"
                            className="mt-1.5 h-11 border-gray-200 focus-visible:ring-brand-500"
                          />
                        </div>

                        <div>
                          <Label
                            htmlFor="phone"
                            className="text-gray-700 font-medium text-sm"
                          >
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            autoComplete="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="+880 1XXX XXXXXX"
                            aria-invalid={!!errors.phone}
                            aria-describedby={errors.phone ? 'phone-error' : undefined}
                            className={`mt-1.5 h-11 border-gray-200 focus-visible:ring-brand-500 ${
                              errors.phone ? 'border-red-400 focus-visible:ring-red-400' : ''
                            }`}
                          />
                          {errors.phone && (
                            <p
                              id="phone-error"
                              className="text-red-500 text-xs mt-1.5 flex items-center gap-1"
                            >
                              <AlertCircle className="h-3 w-3" />
                              {errors.phone}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Row 3: Message + Counter */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <Label
                            htmlFor="message"
                            className="text-gray-700 font-medium text-sm"
                          >
                            Message <span className="text-red-500">*</span>
                          </Label>
                          <span
                            className={`text-xs ${
                              formData.message.length > MESSAGE_MAX
                                ? 'text-red-500'
                                : 'text-gray-400'
                            }`}
                          >
                            {formData.message.length}/{MESSAGE_MAX}
                          </span>
                        </div>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Tell us about your plastic materials needs..."
                          aria-invalid={!!errors.message}
                          aria-describedby={errors.message ? 'message-error' : undefined}
                          className={`min-h-[150px] border-gray-200 focus-visible:ring-brand-500 resize-y ${
                            errors.message ? 'border-red-400 focus-visible:ring-red-400' : ''
                          }`}
                        />
                        {errors.message && (
                          <p
                            id="message-error"
                            className="text-red-500 text-xs mt-1.5 flex items-center gap-1"
                          >
                            <AlertCircle className="h-3 w-3" />
                            {errors.message}
                          </p>
                        )}
                      </div>

                      {/* Trust note */}
                      <div className="flex items-start gap-2 text-xs text-gray-500 bg-gray-50 rounded-lg p-3 border border-gray-100">
                        <ShieldCheck className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>
                          Your information is safe with us. We never share your
                          data with third parties.
                        </span>
                      </div>

                      {/* Global error */}
                      {submitStatus === 'error' && (
                        <div
                          role="alert"
                          className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-800 rounded-xl p-4 text-sm"
                        >
                          <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                          <span>{errorMessage}</span>
                        </div>
                      )}

                      {/* Submit */}
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 font-semibold text-base h-12 rounded-xl transition-all shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                        size="lg"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          'Send Message'
                        )}
                      </Button>

                      <p className="text-xs text-gray-400 text-center">
                        By submitting, you agree to be contacted regarding your
                        inquiry. Fields marked with <span className="text-red-500">*</span> are required.
                      </p>
                    </form>
                  )}
=======
          {/* Form and Side Block Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            
            {/* Contact Form Block */}
            <div data-aos="fade-right" data-aos-duration="900">
              <Card className="border-gray-100 shadow-md">
                <CardHeader className="pb-4">
                  <CardTitle className="text-3xl font-bold text-gray-900">Send Us a Message</CardTitle>
                  <CardDescription className="text-base">
                    Fill out the form below and we&apos;ll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form
                    action="https://formsubmit.co/tasaralimited@gmail.com"
                    method="POST"
                    className="space-y-6"
                  >
                    <div>
                      <Label htmlFor="name" className="text-gray-700 font-medium"> Full Name <span className="text-red-500">*</span></Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="John Doe"
                        className="mt-1.5 h-11 border-gray-200 focus-visible:ring-brand-500"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-medium"> Email Address <span className="text-red-500">*</span></Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="john@company.com"
                        className="mt-1.5 h-11 border-gray-200 focus-visible:ring-brand-500"
                      />
                    </div>

                    <div>
                      <Label htmlFor="company" className="text-gray-700 font-medium">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="ABC Corporation"
                        className="mt-1.5 h-11 border-gray-200 focus-visible:ring-brand-500"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+880 1XXX XXXXXX"
                        className="mt-1.5 h-11 border-gray-200 focus-visible:ring-brand-500"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-gray-700 font-medium"> Message <span className="text-red-500">*</span></Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Tell us about your plastic materials needs..."
                        className="mt-1.5 min-h-[150px] border-gray-200 focus-visible:ring-brand-500"
                      />
                    </div>

                    {/* Disable CAPTCHA */}
                    <input type="hidden" name="_captcha" value="false" />

                    {/* Redirect after success */}
                    <input
                      type="hidden"
                      name="_next"
                      value="https://tasarabd.com/contact?success=true"
                    />

                    <Button
                      type="submit"
                      className="w-full bg-brand-500 hover:bg-brand-600 font-semibold text-base h-12 rounded-xl transition-colors shadow-md"
                      size="lg"
                    >
                      Send Message
                    </Button>
                  </form>
>>>>>>> 66836520f39302f443cfccb6428169fdaac62986
                </CardContent>
              </Card>
            </div>

<<<<<<< HEAD
            {/* ---- Side Info (span 2) ---- */}
            <div
              className="lg:col-span-2 space-y-6"
              data-aos="fade-left"
              data-aos-duration="900"
            >
              {/* Business Hours */}
              <Card className="border-gray-100 shadow-sm">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-50 to-red-100 rounded-xl flex items-center justify-center mb-3">
                    <Clock className="h-6 w-6 text-brand-500" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-gray-700 text-sm">
                    <div className="flex justify-between border-b border-gray-50 pb-2.5">
                      <span className="font-medium">Monday - Friday</span>
                      <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-50 pb-2.5">
                      <span className="font-medium">Saturday</span>
                      <span className="text-gray-600">9:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between pb-1">
                      <span className="font-medium">Sunday</span>
                      <span className="text-red-500 font-medium">Closed</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-50 flex items-center gap-2 text-xs text-emerald-600">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span>Currently accepting new inquiries</span>
                  </div>
=======
            {/* Side Info Block */}
            <div className="space-y-6" data-aos="fade-left" data-aos-duration="900">
              
              {/* Business Hours */}
              <Card className="border-gray-100 shadow-sm">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-2">
                    <Clock className="h-6 w-6 text-brand-500" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Business Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex justify-between border-b border-gray-50 pb-2">
                      <span className="font-medium">Monday - Friday:</span>
                      <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-50 pb-2">
                      <span className="font-medium">Saturday:</span>
                      <span className="text-gray-600">9:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between pb-1">
                      <span className="font-medium">Sunday:</span>
                      <span className="text-red-500 font-medium">Closed</span>
                    </div>
                  </div>
>>>>>>> 66836520f39302f443cfccb6428169fdaac62986
                </CardContent>
              </Card>

              {/* Why Contact Us */}
              <Card className="bg-gray-50/70 border-gray-100 shadow-sm">
                <CardHeader className="pb-3">
<<<<<<< HEAD
                  <CardTitle className="text-xl font-bold text-gray-900">
                    Why Contact Us?
                  </CardTitle>
=======
                  <CardTitle className="text-xl font-bold text-gray-900">Why Contact Us?</CardTitle>
>>>>>>> 66836520f39302f443cfccb6428169fdaac62986
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3.5 text-gray-700">
                    {[
                      'Get competitive quotes for plastic materials',
                      'Expert consultation on material selection',
                      'Discuss partnership opportunities',
                      'Technical support and documentation',
                      'Custom sourcing and procurement inquiries',
                    ].map((benefit) => (
                      <li key={benefit} className="flex items-start">
<<<<<<< HEAD
                        <span className="text-emerald-500 font-bold mr-2.5 mt-0.5 flex-shrink-0">
                          ✓
                        </span>
                        <span className="font-medium text-sm text-gray-600">
                          {benefit}
                        </span>
=======
                        <span className="text-emerald-500 font-bold mr-2.5 mt-0.5">✓</span>
                        <span className="font-medium text-sm md:text-base text-gray-600">{benefit}</span>
>>>>>>> 66836520f39302f443cfccb6428169fdaac62986
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

<<<<<<< HEAD
              {/* WhatsApp CTA */}
              <Card className="bg-gradient-to-br from-brand-500 to-brand-600 text-white border-none shadow-lg shadow-brand-500/20 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                <CardContent className="pt-8 pb-8 relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">
                    Need Immediate Assistance?
                  </h3>
                  <p className="mb-6 opacity-90 font-light text-sm sm:text-base">
                    For urgent inquiries, message us directly on WhatsApp during
                    business hours.
                  </p>
                  <a
                    href="https://wa.me/8801886538187"
                    className="inline-flex items-center gap-2 text-base sm:text-lg font-bold tracking-tight hover:scale-105 transition-transform bg-white/15 hover:bg-white/25 px-5 py-3 rounded-xl backdrop-blur-sm border border-white/20"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 fill-current"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* ===== Google Maps ===== */}
          <div
            className="w-full"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="p-4 sm:p-6 border-b border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-brand-500" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Visit Our Office</h3>
                  <p className="text-sm text-gray-500">
                    Sector 11, Uttara, Dhaka — Bangladesh
                  </p>
                </div>
              </div>
=======
              {/* Immediate Assistance Emergency Block */}
              <Card className="bg-gradient-to-br from-brand-500 to-brand-600 text-white border-none shadow-lg shadow-brand-500/10">
                <CardContent className="pt-8 pb-8 text-center lg:text-left">
                  <h3 className="text-2xl font-bold mb-2">Need Immediate Assistance?</h3>
                  <p className="mb-6 opacity-90 font-light max-w-md">
                    For urgent inquiries, call us directly on WhatsApp or WeChat during business hours.
                  </p>
                    <a 
                      href="https://wa.me/8801886538187" 
                      className="inline-block text-2xl md:text-3xl font-extrabold tracking-tight hover:underline transition-all bg-white/10 px-5 py-2.5 rounded-xl backdrop-blur-sm"  
                      target="_blank"  
                      rel="noopener noreferrer">
                      Chat on WhatsApp
                    </a>
                </CardContent>
              </Card>
              
            </div>
          </div>

          {/* New Google Maps Section for Tasara Limited */}
          <div className="w-full mt-12" data-aos="fade-up" data-aos-duration="1000">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full min-h-[500px]">
>>>>>>> 66836520f39302f443cfccb6428169fdaac62986
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4489.299162301807!2d90.40211607533973!3d23.873787778586454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c563c4c13fab%3A0x40a842d2104318fe!2sTasara%20Limited!5e1!3m2!1sen!2sbd!4v1783692740517!5m2!1sen!2sbd"
                width="100%"
                height="100%"
<<<<<<< HEAD
                style={{ border: 0, minHeight: '420px' }}
=======
                style={{ border: 0, minHeight: '500px' }}
>>>>>>> 66836520f39302f443cfccb6428169fdaac62986
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Tasara Limited Location"
<<<<<<< HEAD
              />
            </div>
          </div>
=======
              ></iframe>
            </div>
          </div>

>>>>>>> 66836520f39302f443cfccb6428169fdaac62986
        </div>
      </section>
    </div>
  );
}








<<<<<<< HEAD


















=======
>>>>>>> 66836520f39302f443cfccb6428169fdaac62986
// // app/contact/page.tsx
// 'use client';

// import { useEffect } from 'react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Label } from '@/components/ui/label';
// import { MapPin, Phone, Mail, Clock } from 'lucide-react';

<<<<<<< HEAD
=======

>>>>>>> 66836520f39302f443cfccb6428169fdaac62986
// export default function ContactPage() {
//   // Show success message if redirected from FormSubmit
//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     if (urlParams.get('success') === 'true') {
//       alert('Thank you! Your message has been sent. We’ll get back to you soon.');
//     }
//   }, []);

//   return (
<<<<<<< HEAD
//     <div className="min-h-screen overflow-x-hidden">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-32 pb-20 overflow-hidden">
//         <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="max-w-4xl mx-auto text-center" data-aos="fade-up" data-aos-duration="1000">
//             <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
//               Contact Us
//             </h1>
//             <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
//               Get in touch with our team for quotes, inquiries, or partnership opportunities
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Main Content Section */}
//       <section className="py-20 bg-white overflow-hidden">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
//           {/* Top Info Cards (Staggered Animation) */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
//             {[
//               {
//                 icon: MapPin,
//                 title: 'Our Office',
//                 content: 'House No # 15 , Road No: 05 , Sector 11, Uttara, Dhaka, Bangladesh',
//               },
//               {
//                 icon: Phone,
//                 title: 'Phone',
//                 content: '+8801886538187',
//               },
//               {
//                 icon: Mail,
//                 title: 'Email',
//                 content: 'sales@tasarabd.com',
//               },
//             ].map((item, index) => (
//               <div 
//                 key={item.title}
//                 data-aos="fade-up" 
//                 data-aos-duration="800" 
//                 data-aos-delay={index * 150}
//               >
//                 <Card className="text-center h-full hover:shadow-xl border-gray-100 transition-all duration-300 hover:-translate-y-1 group">
//                   <CardContent className="pt-8">
//                     <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-sm transition-transform duration-300 group-hover:scale-110">
//                       <item.icon className="h-6 w-6 text-brand-500" />
//                     </div>
//                     <h3 className="font-bold text-xl text-gray-900 mb-2">{item.title}</h3>
//                     <p className="text-gray-600 leading-relaxed px-4">{item.content}</p>
//                   </CardContent>
//                 </Card>
//               </div>
//             ))}
//           </div>

//           {/* Form and Side Block Layout */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            
//             {/* Contact Form Block */}
//             <div data-aos="fade-right" data-aos-duration="900">
//               <Card className="border-gray-100 shadow-md">
//                 <CardHeader className="pb-4">
//                   <CardTitle className="text-3xl font-bold text-gray-900">Send Us a Message</CardTitle>
//                   <CardDescription className="text-base">
//                     Fill out the form below and we&apos;ll get back to you within 24 hours
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <form
//                     action="https://formsubmit.co/tasaralimited@gmail.com"
//                     method="POST"
//                     className="space-y-6"
//                   >
//                     <div>
//                       <Label htmlFor="name" className="text-gray-700 font-medium"> Full Name <span className="text-red-500">*</span></Label>
//                       <Input
//                         id="name"
//                         name="name"
//                         type="text"
//                         required
//                         placeholder="John Doe"
//                         className="mt-1.5 h-11 border-gray-200 focus-visible:ring-brand-500"
//                       />
//                     </div>

//                     <div>
//                       <Label htmlFor="email" className="text-gray-700 font-medium"> Email Address <span className="text-red-500">*</span></Label>
//                       <Input
//                         id="email"
//                         name="email"
//                         type="email"
//                         required
//                         placeholder="john@company.com"
//                         className="mt-1.5 h-11 border-gray-200 focus-visible:ring-brand-500"
//                       />
//                     </div>

//                     <div>
//                       <Label htmlFor="company" className="text-gray-700 font-medium">Company Name</Label>
//                       <Input
//                         id="company"
//                         name="company"
//                         type="text"
//                         placeholder="ABC Corporation"
//                         className="mt-1.5 h-11 border-gray-200 focus-visible:ring-brand-500"
//                       />
//                     </div>

//                     <div>
//                       <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number</Label>
//                       <Input
//                         id="phone"
//                         name="phone"
//                         type="tel"
//                         placeholder="+880 1XXX XXXXXX"
//                         className="mt-1.5 h-11 border-gray-200 focus-visible:ring-brand-500"
//                       />
//                     </div>

//                     <div>
//                       <Label htmlFor="message" className="text-gray-700 font-medium"> Message <span className="text-red-500">*</span></Label>
//                       <Textarea
//                         id="message"
//                         name="message"
//                         required
//                         placeholder="Tell us about your plastic materials needs..."
//                         className="mt-1.5 min-h-[150px] border-gray-200 focus-visible:ring-brand-500"
//                       />
//                     </div>

//                     {/* Disable CAPTCHA */}
//                     <input type="hidden" name="_captcha" value="false" />

//                     {/* Redirect after success */}
//                     <input
//                       type="hidden"
//                       name="_next"
//                       value="https://tasarabd.com/contact?success=true"
//                     />

//                     <Button
//                       type="submit"
//                       className="w-full bg-brand-500 hover:bg-brand-600 font-semibold text-base h-12 rounded-xl transition-colors shadow-md"
//                       size="lg"
//                     >
//                       Send Message
//                     </Button>
//                   </form>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Side Info Block */}
//             <div className="space-y-6" data-aos="fade-left" data-aos-duration="900">
              
//               {/* Business Hours */}
//               <Card className="border-gray-100 shadow-sm">
//                 <CardHeader className="pb-4">
//                   <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-2">
//                     <Clock className="h-6 w-6 text-brand-500" />
//                   </div>
//                   <CardTitle className="text-xl font-bold text-gray-900">Business Hours</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-3 text-gray-700">
//                     <div className="flex justify-between border-b border-gray-50 pb-2">
//                       <span className="font-medium">Monday - Friday:</span>
//                       <span className="text-gray-600">9:00 AM - 6:00 PM</span>
//                     </div>
//                     <div className="flex justify-between border-b border-gray-50 pb-2">
//                       <span className="font-medium">Saturday:</span>
//                       <span className="text-gray-600">9:00 AM - 1:00 PM</span>
//                     </div>
//                     <div className="flex justify-between pb-1">
//                       <span className="font-medium">Sunday:</span>
//                       <span className="text-red-500 font-medium">Closed</span>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Why Contact Us */}
//               <Card className="bg-gray-50/70 border-gray-100 shadow-sm">
//                 <CardHeader className="pb-3">
//                   <CardTitle className="text-xl font-bold text-gray-900">Why Contact Us?</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <ul className="space-y-3.5 text-gray-700">
//                     {[
//                       'Get competitive quotes for plastic materials',
//                       'Expert consultation on material selection',
//                       'Discuss partnership opportunities',
//                       'Technical support and documentation',
//                       'Custom sourcing and procurement inquiries',
//                     ].map((benefit) => (
//                       <li key={benefit} className="flex items-start">
//                         <span className="text-emerald-500 font-bold mr-2.5 mt-0.5">✓</span>
//                         <span className="font-medium text-sm md:text-base text-gray-600">{benefit}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>

//               {/* Immediate Assistance Emergency Block */}
//               <Card className="bg-gradient-to-br from-brand-500 to-brand-600 text-white border-none shadow-lg shadow-brand-500/10">
//                 <CardContent className="pt-8 pb-8 text-center lg:text-left">
//                   <h3 className="text-2xl font-bold mb-2">Need Immediate Assistance?</h3>
//                   <p className="mb-6 opacity-90 font-light max-w-md">
//                     For urgent inquiries, call us directly on WhatsApp or WeChat during business hours.
//                   </p>
//                     <a 
//                       href="https://wa.me/8801886538187" 
//                       className="inline-block text-2xl md:text-3xl font-extrabold tracking-tight hover:underline transition-all bg-white/10 px-5 py-2.5 rounded-xl backdrop-blur-sm"  
//                       target="_blank"  
//                       rel="noopener noreferrer">
//                       Chat on WhatsApp
//                     </a>
//                 </CardContent>
//               </Card>
              
//             </div>
//           </div>

//           {/* New Google Maps Section for Tasara Limited */}
//           <div className="w-full mt-12" data-aos="fade-up" data-aos-duration="1000">
//             <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full min-h-[500px]">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4489.299162301807!2d90.40211607533973!3d23.873787778586454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c563c4c13fab%3A0x40a842d2104318fe!2sTasara%20Limited!5e1!3m2!1sen!2sbd!4v1783692740517!5m2!1sen!2sbd"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0, minHeight: '500px' }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="strict-origin-when-cross-origin"
//                 title="Tasara Limited Location"
//               ></iframe>
//             </div>
//           </div>

//         </div>
//       </section>
//     </div>
//   );
// }





=======
//     <>
//       <div className="min-h-screen">
//         <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-32 pb-20">
//           <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//             <div className="max-w-4xl mx-auto text-center">
//               <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
//               <p className="text-xl text-gray-300 leading-relaxed">
//                 Get in touch with our team for quotes, inquiries, or partnership opportunities
//               </p>
//             </div>
//           </div>
//         </section>

//         <section className="py-20 bg-white">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
//               {[
//                 {
//                   icon: MapPin,
//                   title: 'Our Office',
//                   content: 'House No # 15 , Road No: 05 , Sector 11, Uttara, Dhaka, Bangladesh',
//                 },
//                 {
//                   icon: Phone,
//                   title: 'Phone',
//                   content: '+8801886538187',
//                 },
//                 {
//                   icon: Mail,
//                   title: 'Email',
//                   content: 'sales@tasarabd.com',
//                 },
//               ].map((item) => (
//                 <Card key={item.title} className="text-center hover:shadow-lg transition-shadow">
//                   <CardContent className="pt-6">
//                     <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
//                       <item.icon className="h-6 w-6 text-brand-500" />
//                     </div>
//                     <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
//                     <p className="text-gray-600">{item.content}</p>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//               <div>
//                 <Card>
//                   <CardHeader>
//                     <CardTitle className="text-3xl">Send Us a Message</CardTitle>
//                     <CardDescription>
//                       Fill out the form below and we&apos;ll get back to you within 24 hours
//                     </CardDescription>
//                   </CardHeader>
//                   <CardContent>


//                    <form
//                       action="https://formsubmit.co/tasaralimited@gmail.com"
//                       method="POST"
//                       className="space-y-6"
//                     >
//                       <div>
//                         <Label htmlFor="email"> Full Name <span className="text-red-500">*</span></Label>
//                         <Input
//                           id="name"
//                           name="name"
//                           type="text"
//                           required
//                           placeholder="John Doe"
//                           className="mt-1"
//                         />
//                       </div>

//                       <div>
//                          <Label htmlFor="email"> Email Address <span className="text-red-500">*</span></Label>
//                         <Input
//                           id="email"
//                           name="email"
//                           type="email"
//                           required
//                           placeholder="john@company.com"
//                           className="mt-1"
//                         />
//                       </div>

//                       <div>
//                         <Label htmlFor="company">Company Name</Label>
//                         <Input
//                           id="company"
//                           name="company"
//                           type="text"
//                           placeholder="ABC Corporation"
//                           className="mt-1"
//                         />
//                       </div>

//                       <div>
//                         <Label htmlFor="phone">Phone Number</Label>
//                         <Input
//                           id="phone"
//                           name="phone"
//                           type="tel"
//                           placeholder="+880 1XXX XXXXXX"
//                           className="mt-1"
//                         />
//                       </div>

//                       <div>
//                         <Label htmlFor="email"> Message <span className="text-red-500">*</span></Label>
//                         <Textarea
//                           id="message"
//                           name="message"
//                           required
//                           placeholder="Tell us about your plastic materials needs..."
//                           className="mt-1 min-h-[150px]"
//                         />
//                       </div>

//                       {/* Disable CAPTCHA (optional) */}
//                       <input type="hidden" name="_captcha" value="false" />

//                       {/* Redirect after success */}
//                       <input
//                         type="hidden"
//                         name="_next"
//                         value="https://tasarabd.com/contact?success=true"
//                       />


//                       <Button
//                         type="submit"
//                         className="w-full bg-brand-500 hover:bg-red-700"
//                         size="lg"
//                       >
//                         Send Message
//                       </Button>
//                     </form>

                    
//                   </CardContent>
//                 </Card>
//               </div>

//               <div className="space-y-6">
//                 <Card>
//                   <CardHeader>
//                     <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
//                       <Clock className="h-6 w-6 text-brand-500" />
//                     </div>
//                     <CardTitle>Business Hours</CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="space-y-2 text-gray-700">
//                       <div className="flex justify-between">
//                         <span className="font-semibold">Monday - Friday:</span>
//                         <span>9:00 AM - 6:00 PM</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="font-semibold">Saturday:</span>
//                         <span>9:00 AM - 1:00 PM</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="font-semibold">Sunday:</span>
//                         <span>Closed</span>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 <Card className="bg-gray-50">
//                   <CardHeader>
//                     <CardTitle>Why Contact Us?</CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <ul className="space-y-3 text-gray-700">
//                       <li className="flex items-start">
//                         <span className="text-brand-500 mr-2">✓</span>
//                         <span>Get competitive quotes for plastic materials</span>
//                       </li>
//                       <li className="flex items-start">
//                         <span className="text-brand-500 mr-2">✓</span>
//                         <span>Expert consultation on material selection</span>
//                       </li>
//                       <li className="flex items-start">
//                         <span className="text-brand-500 mr-2">✓</span>
//                         <span>Discuss partnership opportunities</span>
//                       </li>
//                       <li className="flex items-start">
//                         <span className="text-brand-500 mr-2">✓</span>
//                         <span>Technical support and documentation</span>
//                       </li>
//                       <li className="flex items-start">
//                         <span className="text-brand-500 mr-2">✓</span>
//                         <span>Custom sourcing and procurement inquiries</span>
//                       </li>
//                     </ul>
//                   </CardContent>
//                 </Card>

//                 {/* "Need Immediate Assistance?" card — unchanged */}
//                 <Card className="bg-brand-500 text-white">
//                   <CardContent className="pt-6">
//                     <h3 className="text-xl font-bold mb-2">Need Immediate Assistance?</h3>
//                     <p className="mb-4">
//                       For urgent inquiries, call us directly Whatsapp or wechat during business hours
//                     </p>
//                     <a

//                       className="text-2xl font-bold hover:underline"
//                     >
//                       +8801886538187
//                     </a>
//                   </CardContent>
//                 </Card>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }
>>>>>>> 66836520f39302f443cfccb6428169fdaac62986
