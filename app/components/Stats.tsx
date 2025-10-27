'use client';

import React from 'react';
import { Award, Users, TrendingUp, Shield, LucideIcon } from 'lucide-react';

interface Stat {
  number: string;
  label: string;
  icon: LucideIcon;
}

const stats: Stat[] = [
  { number: '10+', label: 'Projects Completed', icon: Award },
  { number: '20+', label: 'Happy Clients', icon: Users },
  { number: '3+', label: 'Years Experience', icon: TrendingUp },
  { number: '100%', label: 'Client Satisfaction', icon: Shield }
];

export default function Stats() {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-blue-600 to-cyan-600">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="text-center group hover:scale-105 transition-transform">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Icon className="text-white" size={24} />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-black text-white mb-1">{stat.number}</div>
                <div className="text-xs md:text-sm text-blue-100 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}