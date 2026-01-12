import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import {
  Package,
  Truck,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Globe,
  Shield,
  Zap,
  FileCheck,
  MessageSquare,
  TrendingUp,
} from 'lucide-react';




export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-32 pb-20">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Comprehensive supply chain solutions tailored to your plastic materials needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              {
                icon: Package,
                title: 'Indenting Services',
                description: 'Authorized agent for global plastic manufacturers',
                color: 'brand',
              },
              {
                icon: Truck,
                title: 'Trading, Sourcing & Procurement',
                description: 'Global network for specialty materials',
                color: 'brand',
              },
              {
                icon: BarChart3,
                title: 'Supply Chain Solutions',
                description: 'End-to-end logistics optimization',
                color: 'brand',
              },
            ].map((service) => (
              <Card key={service.title} className="text-center hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="w-20 h-20 bg-brand-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="w-16 h-16 bg-brand-500 rounded-lg flex items-center justify-center mb-6">
                <Package className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Indenting Services</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                As authorized agents for leading global plastic manufacturers, we provide direct
                access to factory-sourced materials with competitive pricing and full manufacturer
                warranties. Our established relationships ensure reliability and quality.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Direct factory sourcing from verified manufacturers',
                  'Competitive pricing with no middleman markup',
                  'Full manufacturer warranties and quality guarantees',
                  'Transparent pricing and delivery timelines',
                  'Technical documentation and material certifications',
                ].map((item) => (
                  <div key={item} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Globe, label: 'Global Network' },
                { icon: Shield, label: 'Quality Assured' },
                { icon: TrendingUp, label: 'Best Prices' },
                { icon: FileCheck, label: 'Certified Materials' },
              ].map((feature) => (
                <Card key={feature.label} className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-6 w-6 text-brand-500" />
                    </div>
                    <p className="font-semibold text-gray-900">{feature.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              {[
                { icon: Globe, label: 'Specialty Materials' },
                { icon: MessageSquare, label: 'Expert Consultation' },
                { icon: FileCheck, label: 'Sample Testing' },
                { icon: Shield, label: 'Quality Control' },
              ].map((feature) => (
                <Card key={feature.label} className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-6 w-6 text-brand-500" />
                    </div>
                    <p className="font-semibold text-gray-900">{feature.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 bg-brand-500 rounded-lg flex items-center justify-center mb-6">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Trading, Sourcing & Procurement</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Leverage our extensive global network to access both specialty and standard plastic
                materials. Our procurement experts provide material specification matching, quality
                assurance, and sample evaluation assistance.
              </p>

              <div className="space-y-4">
                {[
                  'Global network of verified suppliers',
                  'Material specification matching services',
                  'Quality assurance and testing protocols',
                  'Sample evaluation and technical support',
                  'Custom formulation assistance',
                ].map((item) => (
                  <div key={item} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-brand-500 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Supply Chain Solutions</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Optimize your operations with our comprehensive supply chain management services.
                From inventory management to just-in-time delivery, we ensure your materials arrive
                when and where you need them.
              </p>

              <div className="space-y-4">
                {[
                  'Inventory management and forecasting',
                  'Just-in-time delivery coordination',
                  'Logistics optimization and cost reduction',
                  'Customs and documentation support',
                  'Real-time shipment tracking',
                ].map((item) => (
                  <div key={item} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Zap, label: 'Fast Delivery' },
                { icon: BarChart3, label: 'Inventory Mgmt' },
                { icon: Globe, label: 'Global Logistics' },
                { icon: FileCheck, label: 'Documentation' },
              ].map((feature) => (
                <Card key={feature.label} className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-6 w-6 text-brand-500" />
                    </div>
                    <p className="font-semibold text-gray-900">{feature.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>


      

<section id="materials-list" className="py-20 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Materials We Supply
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        High-quality industrial materials and accessories
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          name: [
            'Polypropylene (PP) – Virgin',
            'Polystyrene (PS) – Virgin',
            'Polyethylene (PE) – Virgin'
          ],
          types: ['Pellets'],
          applications: 'Packaging, automotive parts, textiles, medical devices, Bottles, films, pipes, containers, industrial products',
          bgColor: 'bg-[#919191]' // Matches the grey in your screenshot
        },
        {
          name: [
            'Polypropylene (PP) – Recycled',
            'Polystyrene (PS) – Recycled',
            'Polyethylene (PE) – Recycled'
          ],
          types: ['Pellets'],
          applications: 'Packaging, automotive parts, textiles, medical devices, Bottles, films, pipes, containers, industrial products',
          bgColor: 'bg-[#919191]'
        },
        {
          name: [
            'Industrious Accessories',
            'Leather',
            'Leather Goods & Footwear'
          ],
          types: [
            'Industrial & garment accessories',
            'Raw & finished leather',
            'Leather goods',
            'Footwear (fashion & safety)'
          ],
          applications: 'Garments & accessories, Bags & leather goods, Footwear manufacturing, Industrial & commercial use',
          bgColor: 'bg-[#919191]'
        },
      ].map((material, index) => (
        <Card
          key={index}
          /* Updated styling: rounded corners and background color from image */
          className={`relative overflow-hidden rounded-[3rem] border-none ${material.bgColor} p-8 min-h-[500px] text-white shadow-lg`}
        >
          <div className="relative z-10 flex flex-col h-full">
            <div className="text-center mb-8">
              {/* Maps through the multiple names per box */}
              {material.name.map((line, i) => (
                <h3 key={i} className="text-lg font-bold leading-tight">
                  {line}
                </h3>
              ))}
            </div>

            <div className="mb-8">
              <p className="font-semibold mb-3">Available Types:</p>
              <ul className="space-y-2">
                {material.types.map((type) => (
                  <li key={type} className="flex items-start text-sm">
                    <span className="mr-2">•</span>
                    {type}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto">
              <p className="font-semibold mb-2">Applications:</p>
              <p className="text-sm leading-relaxed">
                {material.applications}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </div>
</section>






      

      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-xl text-gray-300">
                Trusted by businesses across multiple sectors worldwide
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'Packaging',
                'Automotive',
                'Construction',
                'Electronics',
                'Medical Devices',
                'Consumer Goods',
                'Agriculture',
                'Industrial Manufacturing',
                'Textiles',
              ].map((industry) => (
                <Card key={industry} className="bg-gray-800 border-gray-700 hover:bg-brand-500 transition-colors">
                  <CardContent className="pt-6 text-center">
                    <p className="font-semibold text-white">{industry}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Request a Quote Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get competitive pricing and expert consultation for your plastic materials needs
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-brand-500 hover:bg-gray-100 text-lg px-8 py-6">
            <Link href="/contact">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
