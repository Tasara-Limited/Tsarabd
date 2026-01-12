import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  Globe,
  Shield,
  TrendingUp,
  Users,
  Award,
  Zap,
  CheckCircle,
  Package,
  Truck,
  BarChart3,
} from 'lucide-react';






export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Tasara Limited
              <span className="block text-brand-400 text-[20px] mt-[9px]">United intend Unique solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Your trusted partner in global plastic materials and accessories supply and indenting services. Connecting suppliers with international buyers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-brand-500 hover:bg-brand-600 text-lg px-8 py-6">
                <Link href="/contact">
                  Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-black hover:bg-white hover:hover:bg-gray-300">
                <Link href="/services">
                  Our Services
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4
gap-6 sm:gap-8 md:gap-10
mt-16 sm:mt-20
max-w-5xl lg:max-w-7xl xl:max-w-8xl mx-auto
">
  {[
    { number: 'Globality', label: 'A trusted global network.' },
    { number: 'Quality First', label: 'Certified material standards' },
    { number: 'Integrated services', label: 'Innovative Flow' },
    { number: '2024', label: 'Established' },
  ].map((stat) => (
    <div key={stat.label} className="text-center px-4">
      <div className="text-2xl sm:text-3xl font-bold text-brand-400 mb-2 md:whitespace-nowrap">
        {stat.number}
      </div>
      <div className="text-sm sm:text-base text-gray-400 md:whitespace-nowrap">
        {stat.label}
      </div>
    </div>
  ))}
</div>



          
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Tasara Limited</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Building global connections between suppliers and businesses worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: 'Global Network',
                description: 'Connect global manufacturers with customers through direct sourcing, technical support, and reliable supply coordination.',
              },
              {
                icon: Shield,
                title: 'Quality Assurance',
                description: 'Tasara ensures 100% quality, working with GRS-certified suppliers and complying with FR, REACH, BHT, TPCH, and Heavy Metal–Free standards, meeting global chemical compliance requirements.',
              },
              {
                icon: TrendingUp,
                title: 'Competitive Pricing',
                description: 'On-time delivery, competitive pricing, and consistent quality to streamline your operations',
              },
              {
                icon: Zap,
                title: 'Reliable Partnerships',
                description: 'Delivering the best materials at the right time with trusted guidance, building lasting relationships.',
              },
              {
                icon: Users,
                title: 'Industry Experience',
                description: 'Our team brings expertise from the hanger and packaging sectors, ensuring tailored solutions for both virgin and recycled plastics.',
              },
              {
                icon: Award,
                title: 'Sustainability Focus',
                description: 'We offer sustainable options to meet your business’s environmental goals.',
              },
            ].map((feature) => (
              <Card key={feature.title} className="border-2 hover:border-brand-500 transition-colors hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-brand-500" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for your plastic materials supply chain needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Package,
                title: 'Indenting Services',
                description: 'Authorized agent for global plastic manufacturers with competitive pricing and factory warranties',
                features: ['Direct Factory Sourcing', 'Manufacturer Warranties', 'Competitive Rates'],
              },
              {
                icon: Truck,
                title: 'Trading, Sourcing & Procurement',
                description: 'Leverage our global network for specialty and standard materials with quality assurance',
                features: ['Global Network Access', 'Material Matching', 'Sample Evaluation'],
              },
              {
                icon: BarChart3,
                title: 'Supply Chain Solutions',
                description: 'End-to-end inventory management and logistics optimization for efficient operations',
                features: ['Inventory Management', 'Just-in-Time Delivery', 'Logistics Optimization'],
              },
            ].map((service) => (
              <Card key={service.title} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-brand-500 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-brand-500 hover:bg-brand-600">
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Materials We Supply</h2>
              <p className="text-xl text-gray-300 mb-8">
                High-quality plastic materials for diverse industries worldwide
              </p>




    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {[
    {
      name: 'Virgin Plastics',
      titles: ['PP – Virgin', 'PS – Virgin', 'PE – Virgin'],
      image: '/materials/pp-material.png',
      types: 'Pellets',
    },
    {
      name: 'Recycled Plastics',
      titles: ['PP – Recycled', 'PS – Recycled', 'PE – Recycled'],
      image: '/materials/ps-material.png',
      types: 'Regrind, Pellets, Chips',
    },
    {
      name: 'Specialized Goods',
      titles: ['Accessories', 'Leather', 'Footwear'],
      image: '/materials/pe-material.png',
      types: 'Industrial Accs, Leather & Safety Goods',
    },
  ].map((material, idx) => (
    <Link
      key={idx}
      href="/services#materials-list"
      className="group relative overflow-hidden bg-gray-900 rounded-2xl transition-all duration-500 ease-in-out hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] cursor-pointer h-64 block border border-white/5"
    >
      {/* Background Image with Zoom */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90"
        style={{ backgroundImage: `url(${material.image})` }}
      />
      
      {/* Dynamic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/40 to-transparent" />

      {/* Content Area */}
      <div className="absolute inset-0 p-5 flex flex-col justify-end">
        
        {/* Category Label (Sky Blue) */}
        <p className="text-[#73d9f5] text-[10px] font-black uppercase tracking-[0.2em] mb-1">
          {material.name}
        </p>

        {/* Concise Titles */}
        <div className="mb-2">
          {material.titles.map((title, i) => (
            <h3 key={i} className="text-[15px] font-bold text-white leading-tight">
              {title}
            </h3>
          ))}
        </div>

        {/* Hover Reveal: Types only */}
        <div className="max-h-0 opacity-0 group-hover:max-h-12 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
          <div className="pt-2 border-t border-white/20">
            <p className="text-[12px] text-gray-200 font-medium">
              Types: <span className="text-white font-bold">{material.types}</span>
            </p>
          </div>
        </div>

        {/* Interactive Accent Bar */}
        <div className="h-1 w-8 bg-[#73d9f5] rounded-full mt-2 transition-all duration-500 group-hover:w-16 shadow-[0_0_8px_rgba(115,217,245,0.4)]" />
      </div>
    </Link>
  ))}
</div>
                        
</div>

        <div>
              <h3 className="text-3xl font-bold mb-6">Industries We Serve</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Packaging',
                  'Automotive',
                  'Construction',
                  'Electronics',
                  'Medical Devices',
                  'Consumer Goods',
                ].map((industry) => (
                  <div
                    key={industry}
                    className="bg-gray-800 p-4 rounded-lg text-center hover:bg-brand-500 transition-colors cursor-pointer"
                  >
                    {industry}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get competitive quotes and expert consultation for your plastic materials needs
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-brand-500 hover:bg-gray-100 text-lg px-8 py-6">
            <Link href="/contact">
              Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
