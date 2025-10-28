'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Sparkles, Target, Eye, Award, Users, TrendingUp, Shield, Heart, Zap, Code } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const values = [
    {
      icon: Heart,
      title: 'Client-Focused',
      desc: 'Your success is our success. We prioritize your needs and goals in every project.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      desc: 'We stay ahead of technology trends to deliver cutting-edge solutions.'
    },
    {
      icon: Shield,
      title: 'Quality',
      desc: 'We maintain the highest standards in every aspect of our work.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      desc: 'We work closely with clients as partners, not just service providers.'
    }
  ];

  const team = [
    {
      name: 'Ahlis Dinal Bahtiar',
      role: 'Backend Developer',
      avatar: '/team/dinal.jpg',
      desc: 'Expert in Backend'
    },
    {
      name: 'Mangelek Gabriel Nicholas T',
      role: 'Frontend Developer',
      avatar: '/team/gabriel.png',
      desc: 'Expert in Frontend'
    },
    {
      name: 'Muhammad Faiq Assajad',
      role: 'AI Engineer',
      avatar: '/team/faiq.png',
      desc: 'Expert in AI & ML'
    },
    {
      name: 'Aurellia Putri Budi',
      role: 'UI/UX Designer',
      avatar: '/team/aca.png', 
      desc: 'Expert in Design'
    }
  ];

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
              About Us
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Building the Future of
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent mt-2">
              Digital Innovation
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            TechFlow is a digital agency dedicated to transforming businesses through innovative 
            technology solutions. We combine creativity, technical expertise, and strategic thinking 
            to deliver exceptional results.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-black mb-4 mt-4">Meet the Experts</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Talented professionals dedicated to bringing your vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="text-center group">
                <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-2xl shadow-lg group-hover:scale-110 transition-transform bg-gradient-to-br from-blue-100 to-cyan-100">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                <h3 className="font-black text-lg mb-1">{member.name}</h3>
                <div className="text-blue-600 font-semibold text-sm mb-2">{member.role}</div>
                <p className="text-gray-500 text-xs">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
    <section className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
        {/* Mission Card */}
        <div className="group relative bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all">
            <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Target className="text-white" size={32} />
            </div>
            <div className="pr-20">
            <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase mb-4">
                Mission
            </div>
            <h2 className="text-2xl font-black mb-4 text-gray-900">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth, 
                enhance user experiences, and create lasting value. We believe in the transformative 
                power of technology and strive to make it accessible and impactful for every client.
            </p>
            </div>
        </div>

        {/* Vision Card */}
        <div className="group relative bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border-2 border-purple-200 hover:border-purple-400 hover:shadow-xl transition-all">
            <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Eye className="text-white" size={32} />
            </div>
            <div className="pr-20">
            <div className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase mb-4">
                Vision
            </div>
            <h2 className="text-2xl font-black mb-4 text-gray-900">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
                To become the most trusted digital partner for businesses worldwide, 
                recognized for our innovation, quality, and commitment to client success. 
                We aim to shape the future of digital experiences through cutting-edge solutions.
            </p>
            </div>
        </div>
        </div>
    </div>
    </section>

      {/* Values */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider bg-white px-4 py-2 rounded-full shadow-sm">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-black mb-4 mt-4">What Drives Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our core values guide everything we do and shape our company culture
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all text-center group">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <Icon className="text-white" size={26} />
                  </div>
                  <h3 className="font-bold text-base mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}