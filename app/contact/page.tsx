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
    <>
      <div className="min-h-screen">
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-32 pb-20">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Get in touch with our team for quotes, inquiries, or partnership opportunities
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: MapPin,
                  title: 'Our Office',
                  content: 'House No # 15 , Road No: 05 , Sector 11, Uttara, Dhaka, Bangladesh',
                },
                {
                  icon: Phone,
                  title: 'Phone',
                  content: '+8801886538187',
                },
                {
                  icon: Mail,
                  title: 'Email',
                  content: 'sales@tasarabd.com',
                },
              ].map((item) => (
                <Card key={item.title} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-6 w-6 text-brand-500" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-3xl">Send Us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we&apos;ll get back to you within 24 hours
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form
                      action="https://formsubmit.co/munnasazzad9@gmail.com"
                      method="POST"
                      className="space-y-6"
                    >
                      <div>
                        <Label htmlFor="email"> Full Name <span className="text-red-500">*</span></Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="John Doe"
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email"> Email Address <span className="text-red-500">*</span></Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="john@company.com"
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          placeholder="ABC Corporation"
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+880 1XXX XXXXXX"
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email"> Message <span className="text-red-500">*</span></Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          placeholder="Tell us about your plastic materials needs..."
                          className="mt-1 min-h-[150px]"
                        />
                      </div>

                      {/* Disable CAPTCHA (optional) */}
                      <input type="hidden" name="_captcha" value="false" />

                      {/* Redirect after success */}
                      <input
                        type="hidden"
                        name="_next"
                        value="https://tasara123-dmay.vercel.app//contact?success=true"
                      />

                      <Button
                        type="submit"
                        className="w-full bg-brand-500 hover:bg-red-700"
                        size="lg"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                      <Clock className="h-6 w-6 text-brand-500" />
                    </div>
                    <CardTitle>Business Hours</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex justify-between">
                        <span className="font-semibold">Monday - Friday:</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">Saturday:</span>
                        <span>9:00 AM - 1:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">Sunday:</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-50">
                  <CardHeader>
                    <CardTitle>Why Contact Us?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-brand-500 mr-2">✓</span>
                        <span>Get competitive quotes for plastic materials</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand-500 mr-2">✓</span>
                        <span>Expert consultation on material selection</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand-500 mr-2">✓</span>
                        <span>Discuss partnership opportunities</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand-500 mr-2">✓</span>
                        <span>Technical support and documentation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-brand-500 mr-2">✓</span>
                        <span>Custom sourcing and procurement inquiries</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* "Need Immediate Assistance?" card — unchanged */}
                <Card className="bg-brand-500 text-white">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-2">Need Immediate Assistance?</h3>
                    <p className="mb-4">
                      For urgent inquiries, call us directly Whatsapp or wechat during business hours
                    </p>
                    <a

                      className="text-2xl font-bold hover:underline"
                    >
                      +8801886538187
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
