'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Removed unused `Package`
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-[#FFFFFF] rounded-lg transition-transform group-hover:scale-105">
              {/* Replace "logo.png" with your actual filename (e.g., logo.svg) */}
             <img
                src="/logo.png"        // ✅ Starts with "/" → served from /public
                alt="Tasara Logo"
                className="h-12 w-12 "
              />
            </div>
            <span
              className={cn(
                'text-xl font-bold transition-colors',
                scrolled ? 'text-gray-900' : 'text-white'
              )}
            >
              TASARA LIMITED
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-brand-500',
                  scrolled ? 'text-gray-700' : 'text-white'
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="bg-brand-500 hover:bg-brand-600">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <X className={cn('h-6 w-6', scrolled ? 'text-gray-900' : 'text-white')} />
            ) : (
              <Menu className={cn('h-6 w-6', scrolled ? 'text-gray-900' : 'text-white')} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 bg-white rounded-lg shadow-lg p-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-brand-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button
              asChild
              className="w-full bg-brand-500 hover:bg-brand-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}