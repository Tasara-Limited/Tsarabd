'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion'; // 🟢 ফ্রেমার মোশন ইমপোর্ট

export default function ProductsList() {
  // আপনার ১৬টি প্রোডাক্টের ডাটা
  const products = [
    { src: "/materialimg/PP-natural-compound.png", name: "PP Natural Compound", grade: "Recycled", price: "$0.90 - $1.20" },
    { src: "/materialimg/PP-natural-compound2.png", name: "PP Natural Compound", grade: "Recycled", price: "$0.90 - $1.20" },
    { src: "/materialimg/p3.png", name: "PP White Compound", grade: "Recycled", price: "$0.90 - $1.20" },
    { src: "/materialimg/p4.png", name: "PP Dull Natural Compound", grade: "Recycled", price: "$0.90 - $1.20" },
    { src: "/materialimg/p5.png", name: "PP Black Compound", grade: "Recycled", price: "$0.65 - $0.90" },
    { src: "/materialimg/p6.png", name: "GPPS Virgin", grade: "Virgin", price: "$1.00 - $1.50" },
    { src: "/materialimg/p7.png", name: "PP Black Compound", grade: "Recycled", price: "$0.65 - $0.90" },
    { src: "/materialimg/p8.png", name: "HIPS White Compound", grade: "Recycled", price: "$1.20 - $1.65" },
    { src: "/materialimg/p9.png", name: "HIPS Virgin", grade: "Virgin", price: "$1.20 - $1.50" },
    { src: "/materialimg/p10.png", name: "HIPS Virgin", grade: "Virgin", price: "$1.20 - $1.50" },
    { src: "/materialimg/p11.png", name: "HIPS White Compound", grade: "Recycled", price: "$1.20 - $1.65" },
    { src: "/materialimg/p12.png", name: "GPPS Natural Compound", grade: "Recycled", price: "$1.00 - $1.65" },
    { src: "/materialimg/p13.png", name: "PP Black Compound", grade: "Recycled", price: "$0.65 - $0.90" },
    { src: "/materialimg/p14.png", name: "HIPS Black Compound", grade: "Recycled", price: "$0.80 - $1.20" },
    { src: "/materialimg/p15.png", name: "HIPS Black Compound", grade: "Recycled", price: "$0.80 - $1.20" },
    { src: "/materialimg/p16.png", name: "HIPS Black Compound", grade: "Recycled", price: "$0.80 - $1.20" },
  ];

  // 🟢 স্ট্যাগার (একটার পর একটা আসা) অ্যানিমেশনের নিয়ম
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // প্রতিটি কার্ডের মাঝে টাইমিং গ্যাপ
      },
    },
  };

const cardVariants = {
    hidden: { opacity: 0, y: 35 }, // নিচ থেকে শুরু হবে
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] // 🟢 "easeOut" এর জায়গায় এই অ্যারে ব্যবহার করুন
      } 
    },
  };

  return (
    <div className="min-h-screen">
      
      {/* 🟢 Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
        
        {/* 🟢 হিরো সেকশন স্ক্রোলে বা পেজ লোডে নিচ থেকে উপরে রিভিল হবে */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-brand-500 hover:bg-brand-600 mb-4 px-3 py-1 text-sm uppercase tracking-wider text-white border-none">
              Our Catalog
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Materials We Supply
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              High-purity virgin polymers and GRS-certified sustainable recycled plastics tailored for global industrial demands.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 🟢 Products Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 🟢 motion.div গ্রিডকে স্ট্যাগার কন্টেইনার বানানো হয়েছে */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible" // স্ক্রোল করে যখনই এই গ্রিড ভিউতে আসবে, অ্যানিমেশন চালু হবে
            viewport={{ once: true, margin: "0px 0px -100px 0px" }} // একবারই অ্যানিমেশন হবে
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          >
            {products.map((product, i) => (
              /* 🟢 প্রতিটি কার্ড এখন স্ক্রোল করার সাথে সাথে একটার পর একটা সুন্দর করে ভেসে উঠবে */
              <motion.div key={i} variants={cardVariants}>
                <Card className="group h-full overflow-hidden border border-gray-200 hover:border-brand-500 transition-all duration-300 hover:shadow-xl flex flex-col justify-between bg-white rounded-2xl">
                  
                  {/* Image Container */}
                  <div className="relative aspect-video w-full h-48 overflow-hidden bg-gray-100 border-b">
                    <img
                      src={product.src}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <Badge className={`absolute top-4 right-4 text-white border-none ${
                      product.grade === 'Virgin' ? 'bg-emerald-600' : 'bg-blue-600'
                    }`}>
                      {product.grade}
                    </Badge>
                  </div>

                  {/* Card Body */}
                  <CardContent className="p-5 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-500 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-500 mb-4">
                        Industrial standard material compliant with global quality regulations.
                      </p>
                    </div>

                    {/* Price and Action Button */}
                    <div className="pt-4 border-t border-dashed border-gray-200 mt-auto flex items-center justify-between">
                      <div>
                        <span className="text-xs text-gray-400 block font-medium uppercase">Est. Price</span>
                        <span className="text-base font-bold text-brand-600">
                          {product.price} <span className="text-xs font-normal text-gray-500">/ KG</span>
                        </span>
                      </div>
                      <Button asChild size="sm" className="bg-brand-500 hover:bg-brand-600 text-xs text-white">
                        <Link href="/contact">
                          Inquire
                        </Link>
                      </Button>
                    </div>
                  </CardContent>

                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
}
