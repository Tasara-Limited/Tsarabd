import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import {
  Target,
  Eye,
  Award,
  Users,
  Globe,
  Leaf,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';



export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-32 pb-20">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Tasara Limited</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Your trusted partner in global plastic materials supply and indenting services. Connecting suppliers with international buyers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                
                <p>
  <strong>Founded on 4 July 2024 in Dhaka, Bangladesh</strong>, <strong>Tasara Limited</strong> is a <strong>new and dynamic trading, indenting, and sourcing company</strong> connecting clients with <strong>trusted GRS-certified suppliers worldwide</strong>.
</p>

<p>
  Our name reflects our philosophy: <strong>“United intend, Unique solutions”</strong> — we <strong>unite suppliers and buyers</strong> with the shared intent of providing <strong>tailored, reliable solutions</strong> for every client’s needs.
</p>

<p>
  As a company committed to <strong>100% quality and chemical compliance</strong>, Tasara ensures all products meet <strong>international standards</strong>, including <strong>FR, REACH, BHT, TPCH, and Heavy Metal–Free requirements</strong>. We pride ourselves on <strong>timely delivery</strong>, <strong>trusted guidance</strong>, and <strong>customer-focused service</strong>, building <strong>strong partnerships across the globe</strong>.
</p>

                
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Award, label: 'GRS & Quality', value: 'Trusted suppliers' },
                { icon: Globe, label: 'Global Reach', value: 'Worldwide connections' },
                { icon: Users, label: 'Expert Team', value: 'Industry professionals' },
                { icon: Leaf, label: 'Sustainability', value: 'Responsible sourcing' },
              ].map((stat) => (
                <Card key={stat.label} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <stat.icon className="h-6 w-6 text-brand-500" />
                    </div>
                    <CardTitle className="text-sm text-gray-600">{stat.label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="border-2 border-brand-500">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-500 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-3xl mb-4">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                 To redefine plastic material sourcing through uncompromising quality, intelligent solutions, and sustainable innovation. We are committed to delivering cost-effective, high-performance materials that enhance efficiency, reliability, and environmental responsibility for businesses worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-500">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-500 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-3xl mb-4">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To lead the industry with cutting-edge plastic solutions,
setting new benchmarks in quality, sustainability, and
innovation. Through strategic partnerships and forwardthinking solutions, we aim to build a smarter, more
responsible, and future-ready industrial landscape.
                </p>
  
                <p className="text-[20px] mt-5 text-gray-700 leading-relaxed"><strong>"Innovating plastic solutions for a smarter, sustainable tomorrow."</strong></p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Integrity',
                description: 'We conduct business with honesty, transparency, and ethical practices in all our dealings.',
              },
              {
                title: 'Quality Excellence',
                description: '100% quality with GRS-certified suppliers and full chemical compliance.',
              },
              {
                title: 'Customer Focus',
                description: 'Your success is our success. We prioritize understanding and meeting your unique needs.',
              },
              {
                title: 'Innovation',
                description: 'Continuously improving our services and solutions to stay ahead of industry trends.',
              },
              {
                title: 'Sustainability',
                description: 'Committed to environmental responsibility through our GreenCycle recycling initiative.',
              },
              {
                title: 'Global Partnership',
                description: 'Connecting global manufacturers and customers through sourcing, support, and reliable supply.',
              },
            ].map((value) => (
              <Card key={value.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Sustainability Commitment</h2>

            <div className="bg-gray-800 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-brand-400 mb-4">GreenCycle Initiative</h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Committed to responsible sourcing and sustainable practices. Partnering with GRS-certified suppliers, we prioritize recycled materials, reduced waste, and chemical compliance while delivering high-quality solutions globally.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-400 mb-2">3000</div>
                  <div className="text-gray-400">Tons Recycled Annually</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-400 mb-2">1200</div>
                  <div className="text-gray-400">Tons CO₂ Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-400 mb-2">8%</div>
                  <div className="text-gray-400">Energy Reduction</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {[
                'Responsible sourcing & recycling through trusted partnerships',
                'GRS-certified suppliers ensuring quality and sustainability',
                'Chemical compliance in all products and operations',
                'Supporting a circular economy and reducing environmental impact',
              ].map((item) => (
                <div key={item} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the Tasara Limited difference. Let&apos;s discuss your plastic materials needs.
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
