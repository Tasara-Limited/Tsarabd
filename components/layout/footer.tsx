import Link from 'next/link';
import { Package, Mail, Phone, MapPin, Linkedin, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              
                
               <div className="bg-[#FFFFFF] rounded-lg transition-transform group-hover:scale-105">
              {/* Replace "logo.png" with your actual filename (e.g., logo.svg) */}
             <img
                src="/android-chrome-512x512.png"        // ✅ Starts with "/" → served from /public
                alt="Tasara Logo"
                className="h-12 w-12 "
              />
            </div> 
                
                


              
              <span className="text-lg text-white"><p className="font-bold">TASARA LIMITED</p><p className="text-[13px]">
             <i>United intend Unique solutions.</i></p>
            </span>

            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-brand-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-brand-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="hover:text-brand-500 transition-colors cursor-pointer">Indenting Services</li>
              <li className="hover:text-brand-500 transition-colors cursor-pointer">Sourcing & Procurement</li>
              <li className="hover:text-brand-500 transition-colors cursor-pointer">Supply Chain Solutions</li>
              <li className="hover:text-brand-500 transition-colors cursor-pointer">Quality Assurance</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-brand-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">House No#15, Road No: 05, Sector 11, Uttara, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-brand-500 flex-shrink-0" />
                <span className="text-sm">+8801886538187</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-brand-500 flex-shrink-0" />
                <span className="text-sm">sales@tasarabd.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Tasara Limited. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
