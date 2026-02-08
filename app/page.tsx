'use client';

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
import { useState, useEffect, useRef, useCallback } from 'react';

const CAROUSEL_CONFIG = {
  backgroundColor: 'bg-gradient-to-r from-blue-50 to-purple-50',
  titleColor: 'text-gray-900',
  descriptionColor: 'text-gray-600',
  leftColumnRatio: 'lg:w-2/5',
  rightColumnRatio: 'lg:w-3/5',
  slideSpeed: 1500,
  transitionSpeed: 0.4,
  hoverTransitionSpeed: 0.3,
};

const ProductCardCarousel = () => {
  const [index, setIndex] = useState(2);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [blurOpacity, setBlurOpacity] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const productImages = [
    "/materialimg/PP-natural-compound.png",
    "/materialimg/PP-natural-compound2.png",
    "/materialimg/p3.png",
    "/materialimg/p4.png",
    "/materialimg/p5.png",
    "/materialimg/p6.png",
    "/materialimg/p7.png",
    "/materialimg/p8.png",
    "/materialimg/p9.png",
    "/materialimg/p10.png",
    "/materialimg/p11.png",
    "/materialimg/p12.png",
    "/materialimg/p13.png",
  ];

  const cards = [...productImages, ...productImages, ...productImages];
  const step = 288;
  const centerOffset = 2;

  const move = useCallback((dir: number) => {
    setIsTransitioning(true);
    setIndex((prev) => {
      const newIndex = prev + dir;
      
      setTimeout(() => {
        setIsTransitioning(false);
        if (newIndex <= centerOffset) {
          setIndex(cards.length - centerOffset - 1 + dir);
        } else if (newIndex >= cards.length - centerOffset) {
          setIndex(centerOffset + dir);
        }
      }, CAROUSEL_CONFIG.transitionSpeed * 1000);
      
      return newIndex;
    });
  }, [cards.length, centerOffset]);

  useEffect(() => {
    autoPlayRef.current = setInterval(() => move(1), CAROUSEL_CONFIG.slideSpeed);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [move]);

  const handleMouseEnter = useCallback(() => {
    setBlurOpacity(0.8);
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setBlurOpacity(0);
    autoPlayRef.current = setInterval(() => move(1), CAROUSEL_CONFIG.slideSpeed);
  }, [move]);

  return (
    <section className={`py-20 ${CAROUSEL_CONFIG.backgroundColor}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* LEFT COLUMN: Title & Paragraph (40%) */}
          <div className={`${CAROUSEL_CONFIG.leftColumnRatio} w-full`}>
            <div className="lg:text-left lg:pr-10">
              <h2 className={`text-4xl font-bold mb-8 ${CAROUSEL_CONFIG.titleColor} tracking-tight`}>
                Tasara Limited
              </h2>
              
              {/* 🔴 IMPROVED TEXT STYLING */}
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify [text-wrap:pretty] hyphens-auto">
                <p className="tracking-[0.01em]">
                  <strong>Tasara Limited</strong>, based in Bangladesh, specializes in 
                  <strong> plastic materials, leather, and industrial accessories</strong>, 
                  providing <strong>supplier and indenting services</strong> through 
                  <strong> trusted global partners</strong>.
                </p>

                <p className="tracking-[0.01em]">
                  We source from <strong>GRS-certified suppliers</strong> and offer recycled polymers 
                  compliant with <strong>FR, REACH, BHT, TPCH, and Heavy Metal–Free</strong> standards, 
                  ensuring clients receive <strong>certified, sustainable, and future-ready materials</strong>.
                </p>

                <p className="tracking-[0.01em] font-medium bg-gray-50/50 p-5 rounded-xl border-l-4 border-brand-500">
                  Our goal is to be a <strong>reliable, sustainable supplier and indenting partner</strong>, 
                  supporting industries with <strong>quality materials and responsible sourcing</strong>.
                </p>
              </div>

            </div>
          </div>
          
          {/* RIGHT COLUMN: Carousel (60%) */}
          <div className={`${CAROUSEL_CONFIG.rightColumnRatio} w-full`}>
            <div className="relative h-[560px]">
              {/* Blur Background */}
              <div
                className="absolute inset-0 bg-cover bg-center rounded-2xl transition-all duration-500"
                style={{
                  backgroundImage: `url(${cards[index]})`,
                  filter: 'blur(10px)',
                  opacity: blurOpacity,
                  zIndex: 0,
                  transition: `opacity ${CAROUSEL_CONFIG.hoverTransitionSpeed}s ease`,
                }}
              />

              {/* Carousel Container */}
              <div
                className="relative w-full h-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/20 to-gray-800/20"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  ref={trackRef}
                  className="flex items-center h-full"
                  style={{
                    transform: `translateX(${-index * step + 320}px)`,
                    transition: isTransitioning 
                      ? `transform ${CAROUSEL_CONFIG.transitionSpeed}s cubic-bezier(0.4, 0, 0.2, 1)` 
                      : 'none',
                  }}
                >
                  {cards.map((src, i) => (
                    <div
                      key={i}
                      className={`flex-none w-[240px] h-[360px] mx-[24px] rounded-2xl overflow-hidden transition-all cursor-pointer transform-gpu ${
                        i === index 
                          ? 'scale-[1.45] brightness-100 z-20 shadow-2xl shadow-black/30' 
                          : 'scale-[0.85] brightness-[0.65] hover:scale-[0.9] hover:brightness-75'
                      }`}
                      style={{
                        transition: `all ${CAROUSEL_CONFIG.transitionSpeed}s cubic-bezier(0.4, 0, 0.2, 1)`,
                      }}
                    >
                      <img 
                        src={src} 
                        alt={`Product ${i % productImages.length + 1}`} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="absolute inset-0 pointer-events-none z-30">
                <button
                  onClick={() => move(-1)}
                  className="absolute left-[-40px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gray-900/80 hover:bg-gray-900 text-white flex items-center justify-center backdrop-blur-sm transition-all pointer-events-auto hover:scale-110 border border-white/20"
                  aria-label="Previous product"
                >
                  <span className="text-lg font-bold">❮</span>
                </button>
                
                <button
                  onClick={() => move(1)}
                  className="absolute right-[-40px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gray-900/80 hover:bg-gray-900 text-white flex items-center justify-center backdrop-blur-sm transition-all pointer-events-auto hover:scale-110 border border-white/20"
                  aria-label="Next product"
                >
                  <span className="text-lg font-bold">❯</span>
                </button>
              </div>

              {/* Progress Dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                {productImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      const targetIndex = i + centerOffset + (index - (index % productImages.length));
                      setIndex(targetIndex);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      (index - centerOffset) % productImages.length === i 
                        ? 'bg-white w-6' 
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Go to product ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-black hover:bg-[#e0dcdc]">
                <Link href="/services">
                  Our Services
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mt-16 sm:mt-20 max-w-5xl lg:max-w-7xl xl:max-w-8xl mx-auto">
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

      <ProductCardCarousel />

      

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
                    subNames: 'PP, PS, PE',
                    image: '/materials/pp-material.png',
                    types: 'High-purity Pellets',
                  },
                  {
                    name: 'Recycled Plastics',
                    subNames: 'PP, PS, PE',
                    image: '/materials/ps-material.png',
                    types: 'Regrind, Pellets, Chips, Scraps',
                  },
                  {
                    name: 'Industrial Products',
                    subNames: 'Industrial Accessories, Leather, Footwear & Garments',
                    image: '/materials/pe-material.png',
                    types: 'Garment Accs, Raw Leather, Safety Goods, Apparel',
                  },
                ].map((material, idx) => (
                  <Link
                    key={idx}
                    href="/services#materials-list"
                    className="group relative overflow-hidden bg-gray-900 rounded-xl transition-all duration-500 ease-in-out hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] cursor-pointer h-64 block"
                  >
                    {/* Background Image with Zoom */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                      style={{ backgroundImage: `url(${material.image})` }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/40 to-transparent" />

                    {/* Content Container */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">

                      <div className="mb-1">
                        {/* 🔴 Name: 18px #73d9f5 -> 19px White on Hover */}
                        <h3 className={`font-black leading-tight transition-all duration-300 text-[#73d9f5] group-hover:text-white 
            ${material.name === 'Industrial Products'
                            ? 'text-[17px] group-hover:text-[18px]'
                            : 'text-[18px] group-hover:text-[19px]'}`}
                        >
                          {material.name}
                        </h3>

                        {/* 🔴 Subnames: 12px White -> 13px #73d9f5 on Hover */}
                        <p className={`font-bold uppercase tracking-wider transition-all duration-300 text-white group-hover:text-[#73d9f5] 
              ${material.name === 'Industrial Products'
                            ? 'text-[11px] group-hover:text-[12px]'
                            : 'text-[12px] group-hover:text-[13px]'}`}
                        >
                          {material.subNames}
                        </p>
                      </div>

                      {/* 🔴 Types: 12px Reveal on Hover */}
                      <div className="max-h-0 opacity-0 group-hover:max-h-16 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                        <div className="pt-2 border-t border-white/20 mt-2">
                          <p className="text-[12px] text-gray-200 font-medium leading-tight">
                            {material.types}
                          </p>
                        </div>
                      </div>
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
