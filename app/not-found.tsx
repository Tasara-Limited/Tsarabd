
// app/not-found.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Home, MessageCircle, Mail, Phone } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-4 py-12 sm:py-16 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      {/* ===== Background grid pattern ===== */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,180,216,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,216,0.06) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage:
            'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        }}
      />

      {/* ===== Floating blobs ===== */}
      <div
        aria-hidden="true"
        className="absolute -top-20 -left-20 w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full bg-brand-500/30 blur-[70px] animate-float-slow"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-16 -right-16 w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] rounded-full bg-brand-600/30 blur-[70px] animate-float-slower"
      />

      {/* ===== Content ===== */}
      <div className="relative z-10 w-full max-w-3xl text-center">
        {/* Brand logo */}
        <div className="inline-flex items-center gap-3 sm:gap-4 mb-10 sm:mb-12 px-4 sm:px-6 py-2.5 sm:py-3 bg-white rounded-2xl shadow-[0_8px_28px_rgba(0,180,216,0.10)] ring-1 ring-brand-500/5">
          <Image
            src="https://www.tasarabd.com/android-chrome-512x512.png"
            alt="Tasara Limited"
            width={42}
            height={42}
            className="w-10 h-10 sm:w-11 sm:h-11 object-contain rounded-lg"
            unoptimized
          />
          <div className="flex flex-col items-start leading-tight">
            <span className="text-sm sm:text-base font-extrabold tracking-[3px] uppercase bg-gradient-to-br from-[#0b1a33] to-[#0f2547] bg-clip-text text-transparent">
              Tasara Limited
            </span>
            <span className="text-[9px] sm:text-[10px] font-medium tracking-[2.5px] text-slate-500 uppercase mt-1">
              Global Plastic Materials Supply
            </span>
          </div>
        </div>

        {/* Big 404 */}
        <div className="relative inline-block mb-4">
          <h1
            aria-hidden="true"
            className="text-[7rem] sm:text-[10rem] md:text-[13rem] font-black leading-[0.9] tracking-tighter bg-gradient-to-br from-[#03045e] via-[#0077b6] to-[#00b4d8] bg-clip-text text-transparent drop-shadow-[0_20px_40px_rgba(0,180,216,0.20)]"
          >
            404
          </h1>
          {/* Pulse dot */}
          <span
            aria-hidden="true"
            className="absolute top-[22%] right-[12%] w-3 h-3 rounded-full bg-brand-500 shadow-[0_0_0_6px_rgba(0,180,216,0.15)] animate-pulse-dot"
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
          Oops! Page Not Found
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-xl mx-auto mb-10 sm:mb-11">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track —{' '}
          <strong className="text-slate-700 font-semibold">
            your materials sourcing journey
          </strong>{' '}
          shouldn&apos;t stop here.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl text-sm sm:text-base font-semibold text-white bg-gradient-to-br from-brand-500 to-brand-600 shadow-[0_10px_24px_-6px_rgba(0,119,182,0.45)] hover:shadow-[0_16px_32px_-8px_rgba(0,119,182,0.55)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <Home className="w-[18px] h-[18px]" strokeWidth={2.2} />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl text-sm sm:text-base font-semibold text-slate-900 bg-white border-[1.5px] border-slate-300 shadow-[0_4px_12px_rgba(15,23,42,0.04)] hover:border-brand-500 hover:text-brand-600 hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(0,180,216,0.15)] transition-all duration-200"
          >
            <MessageCircle className="w-[18px] h-[18px]" strokeWidth={2.2} />
            Contact Us
          </Link>
        </div>

        {/* Quick links */}
        <div className="pt-8 border-t border-slate-100">
          <div className="text-[11px] font-semibold uppercase tracking-[2.5px] text-slate-400 mb-4">
            Or explore these pages
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {[
              { label: 'Home', href: '/' },
              { label: 'About Us', href: '/about' },
              { label: 'Services', href: '/services' },
              { label: 'Products', href: '/products' },
              { label: 'Contact', href: '/contact' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm sm:text-[15px] font-medium text-slate-700 py-1.5 transition-colors duration-200 hover:text-brand-600 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>
        </div>

        {/* Footer contact note */}
        <p className="mt-10 text-xs text-slate-400">
          Need help? Email us at{' '}
          <a
            href="mailto:sales@tasarabd.com"
            className="inline-flex items-center gap-1 text-brand-600 font-medium hover:underline"
          >
            <Mail className="w-3 h-3" />
            sales@tasarabd.com
          </a>
          <span className="mx-2 sm:mx-3">•</span>
          <a
            href="tel:+8801886538187"
            className="inline-flex items-center gap-1 text-brand-600 font-medium hover:underline"
          >
            <Phone className="w-3 h-3" />
            +880 188 653 8187
          </a>
        </p>
      </div>
    </main>
  );
}