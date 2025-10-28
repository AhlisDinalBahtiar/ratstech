'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Code, Bot, Palette, Check, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import CTA from '../components/CTA';

export default function OurServicesPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(0); // Default ke step pertama

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      desc: 'Custom websites & web applications built with modern technologies for optimal performance',
      features: [
        'Next.js & React Development',
        'E-commerce Solutions',
        'Progressive Web Apps (PWA)',
        'API Integration & Development',
        'Responsive Design',
        'Performance Optimization'
      ],
      color: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 via-cyan-500/10 to-blue-500/10',
      price: 'Starting from $20'
    },
    {
      icon: Bot,
      title: 'AI Chatbot',
      desc: 'Intelligent chatbots powered by AI that enhance customer engagement 24/7',
      features: [
        'Natural Language Processing',
        'Multi-platform Integration',
        'Custom Training & Fine-tuning',
        'Analytics Dashboard',
        'Sentiment Analysis',
        '24/7 Automated Support'
      ],
      color: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/10 via-pink-500/10 to-purple-500/10',
      price: 'Starting from $30'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      desc: 'Beautiful, intuitive interfaces designed with user experience at the forefront',
      features: [
        'User Research & Testing',
        'Wireframing & Prototyping',
        'Design Systems',
        'Usability Testing',
        'Brand Identity Design',
        'Interactive Prototypes'
      ],
      color: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-500/10 via-red-500/10 to-orange-500/10',
      price: 'Starting from $10'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      desc: 'We start by understanding your business goals, target audience, and project requirements'
    },
    {
      step: '02',
      title: 'Planning',
      desc: 'Create detailed project roadmap, timeline, and define deliverables for successful execution'
    },
    {
      step: '03',
      title: 'Design & Development',
      desc: 'Bring your vision to life with modern design and cutting-edge development practices'
    },
    {
      step: '04',
      title: 'Testing & Launch',
      desc: 'Rigorous testing to ensure quality, followed by smooth deployment and launch'
    },
    {
      step: '05',
      title: 'Support & Maintenance',
      desc: 'Ongoing support, updates, and maintenance to keep your product running smoothly'
    }
  ];

  // Calculate progress based on active step
  const currentProgress = ((activeStep + 1) / process.length) * 100;

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
              Our Services
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Digital Solutions for
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent mt-2">
              Modern Businesses
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive digital services to help your business thrive in the digital age. 
            From web development to AI solutions and stunning designs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className={`relative p-8 rounded-2xl bg-gradient-to-br ${service.bgGradient} border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group`}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white" size={32} />
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{service.desc}</p>

                  <div className="mb-6">
                    <div className="text-sm font-bold text-gray-900 mb-3">What's Included:</div>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIdx) => (
                        <li key={featureIdx} className="flex items-start gap-2 text-sm">
                          <Check size={16} className="mt-0.5 flex-shrink-0 text-green-500" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="text-lg font-black text-gray-900 mb-4">{service.price}</div>
                    <Link href="/contact">
                      <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2 group">
                        Get Started
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section with Click-based Progress Bar */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider bg-white px-4 py-2 rounded-full shadow-sm">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-black mb-4 mt-4">How We Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our proven process ensures successful project delivery every time
            </p>
          </div>

          {/* Single Dynamic Progress Bar */}
          <div className="mb-8 bg-white p-6 rounded-xl shadow-lg border-2 border-blue-100">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-gray-900">Project Progress</h3>
              <span className="text-lg font-black text-blue-600">
                {currentProgress.toFixed(0)}%
              </span>
            </div>
            <div className="bg-gray-200 h-3 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${currentProgress}%` }}
              />
            </div>
            <div className="mt-3 text-sm text-gray-600">
              Current phase: <span className="font-bold text-blue-600">{process[activeStep].title}</span>
            </div>
          </div>

          {/* Process Cards - Click to Select */}
          <div className="grid md:grid-cols-5 gap-6">
            {process.map((item, idx) => {
              const percentage = ((idx + 1) / process.length) * 100;
              const isActive = activeStep === idx;
              
              return (
                <div 
                  key={idx} 
                  className="relative cursor-pointer"
                  onClick={() => setActiveStep(idx)}
                >
                  {/* Card with Fixed Height */}
                  <div className={`bg-white p-6 rounded-xl border-2 transition-all duration-300 h-64 flex flex-col ${
                    isActive 
                      ? 'border-blue-500 shadow-xl scale-105 ring-2 ring-blue-200' 
                      : 'border-gray-200 hover:border-blue-300 hover:shadow-lg hover:scale-102'
                  }`}>
                    <div className={`text-4xl font-black mb-4 transition-all ${
                      isActive 
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent scale-110' 
                        : 'text-gray-300'
                    }`}>
                      {item.step}
                    </div>
                    <h3 className={`font-bold text-base mb-3 transition-colors ${
                      isActive ? 'text-blue-600' : 'text-gray-900'
                    }`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm leading-relaxed flex-grow transition-colors ${
                      isActive ? 'text-gray-700' : 'text-gray-600'
                    }`}>
                      {item.desc}
                    </p>
                    
                    {/* Active Indicator */}
                    {isActive && (
                      <div className="mt-4 inline-flex items-center gap-2 bg-blue-100 px-3 py-1 rounded-full self-start animate-pulse">
                        <div className="w-2 h-2 bg-blue-600 rounded-full" />
                        <span className="text-xs font-bold text-blue-600">
                          {percentage.toFixed(0)}% Complete
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Arrow between steps */}
                  {idx < process.length - 1 && (
                    <div className="hidden md:block absolute top-1/3 -right-3 transform -translate-y-1/2 z-10">
                      <ArrowRight className={`transition-colors ${
                        isActive ? 'text-blue-500' : 'text-blue-300'
                      }`} size={24} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Instruction Text */}
          <div className="mt-8 text-center text-sm text-gray-500">
            Click on any step to see the progress
          </div>
        </div>
      </section>

      <CTA />

      <Footer />
    </div>
  );
}