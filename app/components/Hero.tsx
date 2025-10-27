'use client';

import React from 'react';
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import Link from 'next/link';

interface HeroProps {
  mousePosition: { x: number; y: number };
}

export default function Hero({ mousePosition }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"
          style={{
            left: `${mousePosition.x * 0.02}px`,
            top: `${mousePosition.y * 0.02}px`,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl"
          style={{
            right: `${mousePosition.x * 0.01}px`,
            bottom: `${mousePosition.y * 0.01}px`,
            transition: 'all 0.5s ease-out'
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-20">
        <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6 animate-bounce">
          <Sparkles size={16} className="text-blue-600" />
          <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">
            Your Digital Partner
          </span>
        </div>

        <h1 className="text-6xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
          Transform Your Ideas Into
          <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent mt-2">
            Digital Reality
          </span>
        </h1>

        <p className="text-base md:text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          We craft exceptional web experiences, intelligent AI solutions, and stunning designs 
          that drive real business growth and user engagement
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contact">
            <button className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-3">
              Start Your Project
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
            </button>
          </Link>
          <Link href="/portfolio">
            <button className="border-2 border-gray-300 px-8 py-4 rounded-xl font-bold hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all">
              View Our Work
            </button>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="font-semibold">10+ Projects Delivered</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="font-semibold">20+ Happy Clients</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="font-semibold">3+ Years Experience</span>
          </div>
        </div>
      </div>

      {/* Animated Scroll Down Arrow */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={40} className="text-blue-600" />
      </div>
    </section>
  );
}