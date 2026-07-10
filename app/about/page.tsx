'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import {
  Target,
  Eye,
  Award,
  Globe,
  Users,
  Leaf,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up" data-aos-duration="1000">
            <span className="inline-block text-sm font-semibold tracking-wider text-brand-400 uppercase mb-4 bg-brand-500/10 px-4 py-1.5 rounded-full">
              Who We Are
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
              About Tasara Limited
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Your trusted partner in global plastic materials supply and indenting services. Connecting suppliers with international buyers.
            </p>
          </div>
        </div>
      </section>

      {/* Story & Stats Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right" data-aos-duration="800" data-aos-delay="100">
              <span className="text-brand-600 font-bold text-sm tracking-wider uppercase block mb-3">Our Journey</span>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-8 tracking-tight">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify hyphens-auto [text-wrap:pretty]">
                <p>
                  <strong>Tasara Limited</strong>, established on <strong>4 July 2024</strong> in Dhaka, Bangladesh, is a dynamic private limited company specializing in <strong>plastic materials, leather, and industrial accessories</strong>. As both a <strong>supplier and indenting service provider</strong>, we connect clients with <strong>trusted global partners</strong>, delivering <strong>customized, reliable, and sustainable solutions</strong> across industries.
                </p>
                <p>
                  All our products meet international standards. We work with GRS-certified suppliers to arrange and provide recycled polymers, reflecting our commitment to sustainable and responsible sourcing. These materials are compliant with FR, REACH, BHT, TPCH, and Heavy Metal—Free standards, ensuring clients receive <strong>certified, sustainable, and future-ready recycled polymers</strong>.
                </p>
                <p>
                  Operating from Bangladesh, a rapidly growing industrial hub in South Asia, Tasara empowers industries with <strong>premium materials and accessories</strong>, supporting <strong>operational efficiency, innovation, and long-term growth</strong>. Our focus on <strong>timely delivery, expert guidance, and customer-centric service</strong> ensures seamless support for every business we serve.
                </p>
                <p>
                  Through <strong>strong global partnerships and sustainable practices</strong>, Tasara Limited aspires to be a <strong>leading supplier and indenting partner</strong>, helping industries worldwide <strong>thrive responsibly, innovate continuously, and succeed in an evolving marketplace.</strong>
                </p>
              </div>
            </div>

            {/* Grid Stats with AOS Stagger Effects */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Award, label: 'GRS & Quality', value: 'Trusted suppliers', color: 'bg-blue-50 text-blue-600' },
                { icon: Globe, label: 'Global Reach', value: 'Worldwide connections', color: 'bg-purple-50 text-purple-600' },
                { icon: Users, label: 'Expert Team', value: 'Industry professionals', color: 'bg-orange-50 text-orange-600' },
                { icon: Leaf, label: 'Sustainability', value: 'Responsible sourcing', color: 'bg-emerald-50 text-emerald-600' },
              ].map((stat, index) => (
                <div 
                  key={stat.label} 
                  data-aos="zoom-in" 
                  data-aos-duration="600" 
                  data-aos-delay={index * 150}
                >
                  {/* এখানে border-gray-200 এবং hover:border-brand-500 যোগ করা হয়েছে */}
                  <Card className="h-full border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-brand-500 transition-all duration-300">
                    <CardHeader className="pb-2">
                      <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 hover:rotate-6`}>
                        <stat.icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.label}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xl font-bold text-gray-900 leading-tight">{stat.value}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Mission */}
            <div data-aos="fade-right" data-aos-duration="800">
              {/* বর্ডার ইফেক্ট এবং হোভার ট্রানজিশন যোগ করা হয়েছে */}
              <Card className="h-full border-t-4 border-t-brand-500 border-x border-b border-gray-200 shadow-sm hover:shadow-md hover:border-brand-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-brand-500 rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-brand-500/20">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-gray-900">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To redefine plastic material sourcing through uncompromising quality, intelligent solutions, and sustainable innovation. We are committed to delivering cost-effective, high-performance materials that enhance efficiency, reliability, and environmental responsibility for businesses worldwide.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Vision */}
            <div data-aos="fade-left" data-aos-duration="800">
              {/* বর্ডার ইফেক্ট এবং হোভার ট্রানজিশন যোগ করা হয়েছে */}
              <Card className="h-full border-t-4 border-t-brand-500 border-x border-b border-gray-200 shadow-sm hover:shadow-md hover:border-brand-500/50 transition-all duration-300 flex flex-col justify-between">
                <CardHeader>
                  <div className="w-16 h-16 bg-brand-500 rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-brand-500/20">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-gray-900">Our Vision</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To lead the industry with cutting-edge plastic solutions, setting new benchmarks in quality, sustainability, and innovation. Through strategic partnerships and forward-thinking solutions, we aim to build a smarter, more responsible, and future-ready industrial landscape.
                  </p>
                  <div className="p-4 bg-brand-50/50 border-l-4 border-brand-500 rounded-r-lg">
                    <p className="text-lg italic font-medium text-brand-900">
                      &ldquo;Innovating plastic solutions for a smarter, sustainable tomorrow.&rdquo;
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="800">
            <span className="text-brand-600 font-bold text-sm tracking-wider uppercase block mb-2">Our Foundations</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Integrity', description: 'We conduct business with honesty, transparency, and ethical practices in all our dealings.' },
              { title: 'Quality Excellence', description: '100% quality with GRS-certified suppliers and full chemical compliance.' },
              { title: 'Customer Focus', description: 'Your success is our success. We prioritize understanding and meeting your unique needs.' },
              { title: 'Innovation', description: 'Continuously improving our services and solutions to stay ahead of industry trends.' },
              { title: 'Sustainability', description: 'Committed to environmental responsibility through our GreenCycle recycling initiative.' },
              { title: 'Global Partnership', description: 'Connecting global manufacturers and customers through sourcing, support, and reliable supply.' },
            ].map((value, index) => (
              <div 
                key={value.title} 
                data-aos="fade-up" 
                data-aos-duration="600" 
                data-aos-delay={index * 100}
              >
                {/* এখানে border-gray-200 এবং hover:border-brand-500 যোগ করা হয়েছে */}
                <Card className="h-full border border-gray-200 shadow-sm hover:shadow-xl hover:border-brand-500 transition-all duration-300 group">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold flex items-center text-gray-900 group-hover:text-brand-600 transition-colors">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-24 bg-gray-950 text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="800">
              <span className="text-emerald-400 font-bold text-sm tracking-wider uppercase block mb-2">Eco-Driven Sourcing</span>
              <h2 className="text-4xl font-bold mb-4">Sustainability Commitment</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Info Box */}
              <div className="lg:col-span-7 bg-gray-900 border border-gray-800 rounded-2xl p-8 lg:p-10 shadow-xl" data-aos="fade-right" data-aos-duration="800">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                  <h3 className="text-2xl font-bold text-brand-400">GreenCycle Initiative</h3>
                </div>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Committed to responsible sourcing and sustainable practices. Partnering with GRS-certified suppliers, we prioritize recycled materials, reduced waste, and chemical compliance while delivering high-quality solutions globally.
                </p>

                <div className="grid grid-cols-3 gap-4 border-t border-gray-800 pt-8 text-center">
                  <div>
                    <div className="text-3xl lg:text-4xl font-extrabold text-emerald-400 mb-1">3,000+</div>
                    <div className="text-xs lg:text-sm text-gray-400 font-medium">Tons Recycled Annually</div>
                  </div>
                  <div>
                    <div className="text-3xl lg:text-4xl font-extrabold text-emerald-400 mb-1">1,200+</div>
                    <div className="text-xs lg:text-sm text-gray-400 font-medium">Tons CO₂ Saved</div>
                  </div>
                  <div>
                    <div className="text-3xl lg:text-4xl font-extrabold text-emerald-400 mb-1">8%</div>
                    <div className="text-xs lg:text-sm text-gray-400 font-medium">Energy Reduction</div>
                  </div>
                </div>
              </div>

              {/* Right Checklist */}
              <div className="lg:col-span-5 space-y-5" data-aos="fade-left" data-aos-duration="800">
                {[
                  'Responsible sourcing & recycling through trusted partnerships',
                  'GRS-certified suppliers ensuring quality and sustainability',
                  'Chemical compliance in all products and operations',
                  'Supporting a circular economy and reducing environmental impact',
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 bg-gray-900/40 p-4 rounded-xl border border-gray-900 hover:border-gray-800 transition-colors">
                    <CheckCircle className="h-6 w-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" data-aos="zoom-in" data-aos-duration="700">
          <h2 className="text-4xl font-bold mb-6 tracking-tight">Ready to Work Together?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90 font-light">
            Experience the Tasara Limited difference. Let&apos;s discuss your plastic materials needs.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-brand-600 hover:bg-gray-100 font-semibold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
            <Link href="/contact" className="flex items-center">
              Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
















// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import Link from 'next/link';
// import {
//   Target,
//   Eye,
//   Award,
//   Users,
//   Globe,
//   Leaf,
//   ArrowRight,
//   CheckCircle,
// } from 'lucide-react';



// export default function AboutPage() {
//   return (
//     <div className="min-h-screen">
//       <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-32 pb-20">
//         <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="max-w-4xl mx-auto text-center">
//             <h1 className="text-5xl md:text-6xl font-bold mb-6">About Tasara Limited</h1>
//             <p className="text-xl text-gray-300 leading-relaxed">
//               Your trusted partner in global plastic materials supply and indenting services. Connecting suppliers with international buyers.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div className="max-w-4xl mx-auto px-4">
//               <h2 className="text-4xl font-extrabold text-gray-900 mb-8 tracking-tight">Our Story</h2>
//                 <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify hyphens-auto [text-wrap:pretty]">
                
//                 <p>
//         <strong>Tasara Limited</strong>, established on <strong>4 July 2024</strong> in Dhaka, Bangladesh, is a dynamic private limited company specializing in <strong>plastic materials, leather, and industrial accessories</strong>. As both a <strong>supplier and indenting service provider</strong>, we connect clients with <strong>trusted global partners</strong>, delivering <strong>customized, reliable, and sustainable solutions</strong> across industries.
//     </p>

//     <p>
//         All our products meet international standards. We work with GRS-certified suppliers to arrange and provide recycled polymers, reflecting our commitment to sustainable and responsible sourcing. These materials are compliant with FR, REACH, BHT, TPCH, and Heavy Metal—Free standards, ensuring clients receive <strong>certified, sustainable, and future-ready recycled polymers</strong>.
//     </p>

//     <p>
//         Operating from Bangladesh, a rapidly growing industrial hub in South Asia, Tasara empowers industries with <strong>premium materials and accessories</strong>, supporting <strong>operational efficiency, innovation, and long-term growth</strong>. Our focus on <strong>timely delivery, expert guidance, and customer-centric service</strong> ensures seamless support for every business we serve.
//     </p>

//     <p>
//         Through <strong>strong global partnerships and sustainable practices</strong>, Tasara Limited aspires to be a <strong>leading supplier and indenting partner</strong>, helping industries worldwide <strong>thrive responsibly, innovate continuously, and succeed in an evolving marketplace.</strong>
//     </p>

                
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               {[
//                 { icon: Award, label: 'GRS & Quality', value: 'Trusted suppliers' },
//                 { icon: Globe, label: 'Global Reach', value: 'Worldwide connections' },
//                 { icon: Users, label: 'Expert Team', value: 'Industry professionals' },
//                 { icon: Leaf, label: 'Sustainability', value: 'Responsible sourcing' },
//               ].map((stat) => (
//                 <Card key={stat.label} className="text-center hover:shadow-lg transition-shadow">
//                   <CardHeader>
//                     <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mx-auto mb-2">
//                       <stat.icon className="h-6 w-6 text-brand-500" />
//                     </div>
//                     <CardTitle className="text-sm text-gray-600">{stat.label}</CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             <Card className="border-2 border-brand-500">
//               <CardHeader>
//                 <div className="w-16 h-16 bg-brand-500 rounded-lg flex items-center justify-center mb-4">
//                   <Target className="h-8 w-8 text-white" />
//                 </div>
//                 <CardTitle className="text-3xl mb-4">Our Mission</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-lg text-gray-700 leading-relaxed">
//                  To redefine plastic material sourcing through uncompromising quality, intelligent solutions, and sustainable innovation. We are committed to delivering cost-effective, high-performance materials that enhance efficiency, reliability, and environmental responsibility for businesses worldwide.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="border-2 border-brand-500">
//               <CardHeader>
//                 <div className="w-16 h-16 bg-brand-500 rounded-lg flex items-center justify-center mb-4">
//                   <Eye className="h-8 w-8 text-white" />
//                 </div>
//                 <CardTitle className="text-3xl mb-4">Our Vision</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-lg text-gray-700 leading-relaxed">
//                   To lead the industry with cutting-edge plastic solutions,
// setting new benchmarks in quality, sustainability, and
// innovation. Through strategic partnerships and forwardthinking solutions, we aim to build a smarter, more
// responsible, and future-ready industrial landscape.
//                 </p>
  
//                 <p className="text-[20px] mt-5 text-gray-700 leading-relaxed"><strong>"Innovating plastic solutions for a smarter, sustainable tomorrow."</strong></p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               The principles that guide everything we do
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: 'Integrity',
//                 description: 'We conduct business with honesty, transparency, and ethical practices in all our dealings.',
//               },
//               {
//                 title: 'Quality Excellence',
//                 description: '100% quality with GRS-certified suppliers and full chemical compliance.',
//               },
//               {
//                 title: 'Customer Focus',
//                 description: 'Your success is our success. We prioritize understanding and meeting your unique needs.',
//               },
//               {
//                 title: 'Innovation',
//                 description: 'Continuously improving our services and solutions to stay ahead of industry trends.',
//               },
//               {
//                 title: 'Sustainability',
//                 description: 'Committed to environmental responsibility through our GreenCycle recycling initiative.',
//               },
//               {
//                 title: 'Global Partnership',
//                 description: 'Connecting global manufacturers and customers through sourcing, support, and reliable supply.',
//               },
//             ].map((value) => (
//               <Card key={value.title} className="hover:shadow-lg transition-shadow">
//                 <CardHeader>
//                   <CardTitle className="text-xl flex items-center">
//                     <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
//                     {value.title}
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-gray-700">{value.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-20 bg-gray-900 text-white">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-4xl font-bold mb-8 text-center">Sustainability Commitment</h2>

//             <div className="bg-gray-800 rounded-lg p-8 mb-8">
//               <h3 className="text-2xl font-bold text-brand-400 mb-4">GreenCycle Initiative</h3>
//               <p className="text-lg text-gray-300 mb-6 leading-relaxed">
//                 Committed to responsible sourcing and sustainable practices. Partnering with GRS-certified suppliers, we prioritize recycled materials, reduced waste, and chemical compliance while delivering high-quality solutions globally.
//               </p>

//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <div className="text-center">
//                   <div className="text-4xl font-bold text-brand-400 mb-2">3000</div>
//                   <div className="text-gray-400">Tons Recycled Annually</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-4xl font-bold text-brand-400 mb-2">1200</div>
//                   <div className="text-gray-400">Tons CO₂ Saved</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-4xl font-bold text-brand-400 mb-2">8%</div>
//                   <div className="text-gray-400">Energy Reduction</div>
//                 </div>
//               </div>
//             </div>

//             <div className="space-y-4">
//               {[
//                 'Responsible sourcing & recycling through trusted partnerships',
//                 'GRS-certified suppliers ensuring quality and sustainability',
//                 'Chemical compliance in all products and operations',
//                 'Supporting a circular economy and reducing environmental impact',
//               ].map((item) => (
//                 <div key={item} className="flex items-start space-x-3">
//                   <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
//                   <span className="text-gray-300">{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-20 bg-brand-500 text-white">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
//           <p className="text-xl mb-8 max-w-2xl mx-auto">
//             Experience the Tasara Limited difference. Let&apos;s discuss your plastic materials needs.
//           </p>
//           <Button asChild size="lg" variant="secondary" className="bg-white text-brand-500 hover:bg-gray-100 text-lg px-8 py-6">
//             <Link href="/contact">
//               Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
//             </Link>
//           </Button>
//         </div>
//       </section>
//     </div>
//   );
// }
