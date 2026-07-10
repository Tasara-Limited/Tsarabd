'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ShoppingBag } from 'lucide-react';

export default function ProductsPage() {
  // আপনার ১৬টি মেটেরিয়াল ইমেজের লিস্ট এবং ডেমো প্রাইস ডাটা
  const products = [
    { src: "/materialimg/PP-natural-compound.png", name: "PP Natural Compound", grade: "Recycled", price: "$0.90 - $1.20" },
    { src: "/materialimg/PP-natural-compound2.png", name: "PP Natural Compound", grade: "Recycled", price: "$0.90 - $1.20" },
    { src: "/materialimg/p3.png", name: "PP White Compound", grade: "Recycled", price: "$0.90 - $1.20" },
    { src: "/materialimg/p4.png", name: "PP Deep Natural Compound", grade: "Recycled", price: "$0.90 - $1.20" },
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

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="bg-brand-500 hover:bg-brand-600 mb-4 px-3 py-1 text-sm uppercase tracking-wider">
            Our Catalog
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Materials & Products We Supply
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            High-purity virgin polymers and GRS-certified sustainable recycled plastics tailored for global industrial demands.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, i) => (
            <Card key={i} className="group overflow-hidden border-2 hover:border-brand-500 transition-all duration-300 hover:shadow-xl flex flex-col justify-between bg-white rounded-2xl">
              
              {/* Image Container */}
              <div className="relative aspect-video w-full h-48 overflow-hidden bg-gray-100 border-b">
                <img
                  src={product.src}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <Badge className={`absolute top-4 right-4 ${
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
                  <Button asChild size="sm" className="bg-brand-500 hover:bg-brand-600 text-xs">
                    <Link href="/contact">
                      Inquire
                    </Link>
                  </Button>
                </div>
              </CardContent>

            </Card>
          ))}
        </div>

      </div>
    </div>
  );
}
