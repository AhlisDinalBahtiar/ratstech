'use client';

import React from 'react';
import { Rocket, Shield, Users, TrendingUp, LucideIcon } from 'lucide-react';

interface Benefit {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const benefits: Benefit[] = [
  {
    icon: Rocket,
    title: 'Fast Delivery',
    desc: 'Quick turnaround without compromising quality'
  },
  {
    icon: Shield,
    title: 'Quality Assured',
    desc: 'Rigorous testing and quality control processes'
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    desc: '24/7 support and maintenance services'
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    desc: 'Built to grow with your business needs'
  }
];

export default function Benefits() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-black mb-4 mt-4">Our Advantages</h2>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div key={idx} className="text-center group hover:scale-105 transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:rotate-12 transition-transform">
                  <Icon className="text-white" size={26} />
                </div>
                <h3 className="font-bold text-base mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}