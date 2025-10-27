'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Project {
  name: string;
  category: string;
  desc: string;
  color: string;
  gradient: string;
  image: string;
}

const projects: Project[] = [
  { 
    name: 'Company Profile Website', 
    category: 'Web Development', 
    desc: 'Modern and professional company website with CMS integration',
    color: 'from-blue-500 to-cyan-500',
    gradient: 'from-blue-50 to-cyan-50',
    image: '🏢'
  },
  { 
    name: 'AI Chatbot', 
    category: 'AI Solution', 
    desc: 'AI-powered chatbot reducing response time by 80%',
    color: 'from-purple-500 to-pink-500',
    gradient: 'from-purple-50 to-pink-50',
    image: '🤖'
  },
  { 
    name: 'UI/UX Design', 
    category: 'Design', 
    desc: 'Complete UI/UX design improving user engagement by 150%',
    color: 'from-orange-500 to-red-500',
    gradient: 'from-orange-50 to-red-50',
    image: '🎨'
  },
  { 
    name: 'Dashboard Monitoring Website', 
    category: 'Web Development', 
    desc: 'Real-time monitoring dashboard with advanced analytics',
    color: 'from-green-500 to-teal-500',
    gradient: 'from-green-50 to-teal-50',
    image: '📊'
  }
];

export default function Projects() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-wider bg-white px-4 py-2 rounded-full shadow-sm">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-black mb-4 mt-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how we&apos;ve helped businesses achieve their digital goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`relative group overflow-hidden rounded-2xl bg-gradient-to-br ${project.gradient} border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]`}
            >
              <div className="p-8 h-80 flex flex-col justify-between">
                <div>
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{project.image}</div>
                  <div className="text-xs text-blue-600 mb-2 font-bold uppercase tracking-wide">{project.category}</div>
                  <h3 className="text-2xl font-black mb-3 group-hover:text-blue-600 transition-colors">{project.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{project.desc}</p>
                </div>
                <button className="flex items-center gap-2 text-blue-600 font-bold text-sm group-hover:gap-4 transition-all">
                  View Case Study
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}