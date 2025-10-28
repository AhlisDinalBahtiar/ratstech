'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Sparkles, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Stats from '../components/Stats';

export default function PortfolioPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filters = ['All', 'Web Development', 'AI Solution', 'Design'];

  const projects = [
    {
      name: 'Company Profile Website',
      category: 'Web Development',
      desc: 'Modern and professional company website with CMS integration',
      image: '/projects/pkpri.png',
      tags: ['Next.js', 'Tailwind', 'CMS'],
      color: 'from-blue-500 to-cyan-500',
      gradient: 'from-blue-50 to-cyan-50',
      link: '#'
    },
    {
      name: 'AI Chatbot',
      category: 'AI Solution',
      desc: 'AI-powered chatbot reducing response time by 80%',
      image: '/projects/pkpri.png',
      tags: ['AI', 'NLP', 'React'],
      color: 'from-purple-500 to-pink-500',
      gradient: 'from-purple-50 to-pink-50',
      link: '#'
    },
    {
      name: 'UI/UX Design',
      category: 'Design',
      desc: 'Complete UI/UX design improving user engagement by 150%',
      image: '/projects/pkpri.png',
      tags: ['Figma', 'Prototype', 'User Research'],
      color: 'from-orange-500 to-red-500',
      gradient: 'from-orange-50 to-red-50',
      link: '#'
    },
    {
      name: 'Dashboard Monitoring Website',
      category: 'Web Development',
      desc: 'Real-time monitoring dashboard with advanced analytics',
      image: '/projects/pkpri.png',
      tags: ['React', 'Charts', 'Real-time'],
      color: 'from-green-500 to-teal-500',
      gradient: 'from-green-50 to-teal-50',
      link: '#'
    },
    {
      name: 'E-Learning Platform',
      category: 'Web Development',
      desc: 'Stop-HIVA',
      image: '/projects/pkpri.png',
      tags: ['Next.js', 'Video', 'LMS'],
      color: 'from-indigo-500 to-purple-500',
      gradient: 'from-indigo-50 to-purple-50',
      link: '#'
    },
    {
      name: 'Instagram Design',
      category: 'Design',
      desc: 'Beautiful Instagram design with seamless user experience',
      image: '/projects/pkpri.png',
      tags: ['Mobile', 'UI/UX', 'Prototyping'],
      color: 'from-pink-500 to-rose-500',
      gradient: 'from-pink-50 to-rose-50',
      link: '#'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        isScrolled={isScrolled} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
            <Sparkles size={16} className="text-blue-600" />
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">
              Our Work
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Portfolio of
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent mt-2">
              Successful Projects
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of completed projects and see how we've helped businesses 
            achieve their digital goals through innovative solutions.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 px-6 bg-white border-b border-gray-200 sticky top-[64px] z-40">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-lg font-bold text-sm transition-all ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl bg-white border-2 border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300"
              >
                {/* Image Container - Tempat untuk screenshot */}
                <div className={`relative h-64 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                  {/* Placeholder - Ganti dengan Image component dan path screenshot Anda */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl opacity-20">📸</div>
                  </div>
                  <Image 
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                 
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* View Link */}
                  <a 
                    href={project.link}
                    className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
                  >
                    <ExternalLink size={20} className="text-blue-600" />
                  </a>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, tagIdx) => (
                      <span 
                        key={tagIdx}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="text-xs text-gray-500 mb-2 font-bold uppercase tracking-wide">
                    {project.category}
                  </div>
                  
                  <h3 className="text-xl font-black mb-2 group-hover:text-blue-600 transition-colors">
                    {project.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.desc}
                  </p>
                  
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

      <Stats />

      <Footer />
    </div>
  );
}