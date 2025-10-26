'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Code, Bot, Palette, Star, Users, Zap, ChevronDown, Check, Sparkles } from 'lucide-react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      desc: 'Custom websites & web applications built with modern technologies for optimal performance',
      features: ['Next.js & React', 'E-commerce Solutions', 'Progressive Web Apps', 'API Integration'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Bot,
      title: 'AI Chatbot',
      desc: 'Intelligent chatbots powered by AI that enhance customer engagement 24/7',
      features: ['Natural Language Processing', 'Multi-platform Integration', 'Custom Training', 'Analytics Dashboard'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      desc: 'Beautiful, intuitive interfaces designed with user experience at the forefront',
      features: ['User Research', 'Wireframing & Prototyping', 'Design Systems', 'Usability Testing'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '30+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  const projects = [
    { 
      name: 'E-Commerce Platform', 
      category: 'Web Development', 
      desc: 'Full-stack e-commerce solution with payment integration',
      color: 'from-blue-500 to-cyan-500',
      gradient: 'bg-gradient-to-br from-blue-50 to-cyan-50'
    },
    { 
      name: 'Customer Service Bot', 
      category: 'AI Chatbot', 
      desc: 'AI-powered chatbot reducing response time by 80%',
      color: 'from-purple-500 to-pink-500',
      gradient: 'bg-gradient-to-br from-purple-50 to-pink-50'
    },
    { 
      name: 'Banking App Redesign', 
      category: 'UI/UX Design', 
      desc: 'Complete redesign improving user engagement by 150%',
      color: 'from-orange-500 to-red-500',
      gradient: 'bg-gradient-to-br from-orange-50 to-red-50'
    },
    { 
      name: 'SaaS Dashboard', 
      category: 'Web Development', 
      desc: 'Analytics dashboard with real-time data visualization',
      color: 'from-green-500 to-teal-500',
      gradient: 'bg-gradient-to-br from-green-50 to-teal-50'
    }
  ];

  const techStack = [
    'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 
    'Node.js', 'Python', 'TensorFlow', 'Figma'
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, StartupXYZ',
      content: 'TechFlow transformed our vision into a stunning reality. Their attention to detail and technical expertise is unmatched.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CTO, InnovateCorp',
      content: 'The AI chatbot they developed has significantly improved our customer satisfaction rates. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden relative">
      {/* Animated Background Gradient */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 50%)`
        }}
      />

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Zap className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                RatsTech
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Portfolio</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
              <button className="bg-linear-to-r from-blue-600 to-cyan-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all font-medium">
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 animate-slideDown">
              <a href="#home" className="block text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#services" className="block text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#portfolio" className="block text-gray-700 hover:text-blue-600 transition-colors">Portfolio</a>
              <a href="#about" className="block text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <button className="w-full bg-linear-to-r from-blue-600 to-cyan-600 text-white px-6 py-2.5 rounded-full">
                Contact Us
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-blue-200/40 rounded-full blur-3xl top-20 left-10 animate-float"></div>
          <div className="absolute w-96 h-96 bg-cyan-200/40 rounded-full blur-3xl bottom-20 right-10 animate-float-delay"></div>
          <div className="absolute w-64 h-64 bg-purple-200/40 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-600 text-sm font-medium animate-slideUp">
            <Sparkles size={16} />
            Your Trusted Technology Partner
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slideUp delay-100">
            We Build Digital
            <span className="block bg-linear-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
              Experiences That Matter
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-slideUp delay-200">
            Transform your ideas into reality with cutting-edge web development, intelligent AI chatbots, and stunning UI/UX design that captivates your audience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp delay-300">
            <button className="bg-linear-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 group">
              Start Your Project
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all">
              View Our Work
            </button>
          </div>

          {/* Floating Tech Stack */}
          <div className="mt-16 animate-slideUp delay-400">
            <p className="text-sm text-gray-500 mb-4 font-medium">Trusted Technologies</p>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, idx) => (
                <span 
                  key={idx} 
                  className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-blue-300 hover:bg-blue-50 transition-all cursor-default"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-16 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-blue-600" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-linear-to-br from-blue-50 to-cyan-50">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group hover:scale-105 transition-transform cursor-default">
              <div className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2 animate-countUp">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fadeIn">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 mt-2">Our Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Comprehensive digital solutions tailored to your business needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div 
                  key={idx}
                  className="group relative bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-blue-200 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-100 cursor-pointer animate-fadeIn"
                  style={{ animationDelay: `${idx * 0.15}s` }}
                  onMouseEnter={() => setActiveService(idx)}
                >
                  <div className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                  <div className="relative">
                    <div className={`w-16 h-16 bg-linear-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                      <Icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                          <div className={`w-5 h-5 bg-linear-to-br ${service.color} rounded-full flex items-center justify-center shrink-0`}>
                            <Check size={12} className="text-white" />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Work</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 mt-2">Featured Projects</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Real results from real projects</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div 
                key={idx}
                className="group relative h-80 bg-white rounded-3xl overflow-hidden cursor-pointer border-2 border-gray-100 hover:border-blue-200 transition-all duration-500 hover:shadow-2xl animate-fadeIn"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={`absolute inset-0 ${project.gradient} group-hover:scale-110 transition-transform duration-700`}></div>
                <div className={`absolute inset-0 bg-linear-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-linear-to-t from-white via-white/50 to-transparent">
                  <div className="text-sm text-blue-600 mb-2 font-semibold">{project.category}</div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{project.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{project.desc}</p>
                  <button className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-4 transition-all">
                    View Case Study
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 mt-2">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-blue-200 hover:shadow-xl transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">&ldquo;{testimonial.content}&rdquo;</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-linear-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Let&apos;s collaborate to transform your vision into a digital masterpiece that drives results</p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-2 group">
            Get Free Consultation
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                  <Zap className="text-white" size={24} />
                </div>
                <span className="text-2xl font-bold bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  RatsTech
                </span>
              </div>
              <p className="text-gray-600 text-sm">Building digital experiences that matter</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-gray-900">Services</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Web Development</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors">AI Chatbot</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors">UI/UX Design</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-gray-900">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="hover:text-blue-600 cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Portfolio</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Contact</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Careers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-gray-900">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="hover:text-blue-600 cursor-pointer transition-colors">LinkedIn</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Instagram</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Twitter</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors">GitHub</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-gray-600 text-sm">
            &copy; 2025 RatsTech Agency. All rights reserved. Built with Next.js &amp; TypeScript
          </div>
        </div>
      </footer>
    </div>
  );
}