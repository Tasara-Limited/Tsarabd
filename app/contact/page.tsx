
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
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Info Cards (Staggered Animation) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
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
              </div>
            ))}
          </div>

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
                </CardContent>
              </Card>
            </div>

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
                </CardContent>
              </Card>

              {/* Why Contact Us */}
              <Card className="bg-gray-50/70 border-gray-100 shadow-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-bold text-gray-900">Why Contact Us?</CardTitle>
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
                        <span className="text-emerald-500 font-bold mr-2.5 mt-0.5">✓</span>
                        <span className="font-medium text-sm md:text-base text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4489.299162301807!2d90.40211607533973!3d23.873787778586454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c563c4c13fab%3A0x40a842d2104318fe!2sTasara%20Limited!5e1!3m2!1sen!2sbd!4v1783692740517!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Tasara Limited Location"
              ></iframe>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}








// // app/contact/page.tsx
// 'use client';

// import { useEffect } from 'react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Label } from '@/components/ui/label';
// import { MapPin, Phone, Mail, Clock } from 'lucide-react';


// export default function ContactPage() {
//   // Show success message if redirected from FormSubmit
//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     if (urlParams.get('success') === 'true') {
//       alert('Thank you! Your message has been sent. We’ll get back to you soon.');
//     }
//   }, []);

//   return (
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
