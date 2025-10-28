'use client';

import React from 'react';
import { Menu, X, Zap } from 'lucide-react';
import Link from 'next/link';

interface NavbarProps {
  isScrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Navbar({ isScrolled, mobileMenuOpen, setMobileMenuOpen }: NavbarProps) {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
            <Zap className="text-white" size={20} />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            RatsTech
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-semibold hover:text-blue-600 transition-colors">Home</Link>
          <Link href="/services" className="text-sm font-semibold hover:text-blue-600 transition-colors">Services</Link>
          <Link href="/portfolio" className="text-sm font-semibold hover:text-blue-600 transition-colors">Portfolio</Link>
          <Link href="/about" className="text-sm font-semibold hover:text-blue-600 transition-colors">About</Link>
          <Link href="/contact">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:shadow-lg hover:scale-105 transition-all">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-xl">
          <div className="px-6 py-4 space-y-3">
            <Link href="/" className="block py-2 text-sm font-semibold hover:text-blue-600 transition-colors">Home</Link>
            <Link href="/services" className="block py-2 text-sm font-semibold hover:text-blue-600 transition-colors">Services</Link>
            <Link href="/portfolio" className="block py-2 text-sm font-semibold hover:text-blue-600 transition-colors">Portfolio</Link>
            <Link href="/about" className="block py-2 text-sm font-semibold hover:text-blue-600 transition-colors">About</Link>
            <Link href="/contact">
              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:shadow-lg transition-all">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}