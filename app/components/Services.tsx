'use client';

import React from 'react';
import { Code, Bot, Palette, Check, LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  desc: string;
  features: string[];
  color: string;
  bgGradient: string;
}

interface ServicesProps {
  activeService: number;
  setActiveService: (index: number) => void;
}

const services: Service[] = [
  {
    icon: Code,
    title: 'Web Development',
    desc: 'Custom websites & web applications built with modern technologies for optimal performance',
    features: ['Next.js & React', 'E-commerce Solutions', 'Progressive Web Apps', 'API Integration'],
    color: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/10 via-cyan-500/10 to-blue-500/10'
  },
  {
    icon: Bot,
    title: 'AI Chatbot',
    desc: 'Intelligent chatbots powered by AI that enhance customer engagement 24/7',
    features: ['Natural Language Processing', 'Multi-platform Integration', 'Custom Training', 'Analytics Dashboard'],
    color: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-500/10 via-pink-500/10 to-purple-500/10'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    desc: 'Beautiful, intuitive interfaces designed with user experience at the forefront',
    features: ['User Research', 'Wireframing & Prototyping', 'Design Systems', 'Usability Testing'],
    color: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-500/10 via-red-500/10 to-orange-500/10'
  }
];

export default function Services({ activeService, setActiveService }: ServicesProps) {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-black mb-4 mt-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                onClick={() => setActiveService(idx)}
                className={`relative p-8 rounded-2xl cursor-pointer transition-all duration-300 group hover:scale-105 ${
                  activeService === idx
                    ? `bg-gradient-to-br ${service.bgGradient} border-2 border-blue-300 shadow-xl`
                    : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                }`}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:rotate-6 transition-transform`}>
                  <Icon className="text-white" size={28} />
                </div>

                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{service.desc}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-2 text-sm">
                      <Check size={16} className={`mt-0.5 flex-shrink-0 text-green-500`} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {activeService === idx && (
                  <div className="absolute top-4 right-4">
                    <div className={`w-3 h-3 bg-gradient-to-br ${service.color} rounded-full animate-pulse`} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}