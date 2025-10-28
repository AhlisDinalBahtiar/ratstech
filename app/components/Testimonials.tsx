'use client';

import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

interface TestimonialsProps {
  currentTestimonial: number;
  setCurrentTestimonial: (index: number) => void;
}

const testimonials: Testimonial[] = [
  {
    name: 'Aurellia Aca',
    role: 'CTO, StartupXYZ',
    content: 'TechFlow transformed our vision into a stunning reality. Their attention to detail and technical expertise is unmatched. The team went above and beyond to ensure our success.',
    rating: 5,
    avatar: '👤'
  },
  {
    name: 'Farisah Ghassani',
    role: 'CTO, InnovateCorp',
    content: 'The AI chatbot they developed has significantly improved our customer satisfaction rates. Highly recommended! Response time decreased by 80% and our team is more productive.',
    rating: 5,
    avatar: '👤'
  },
  {
    name: 'Muhammad Anugerah',
    role: 'Product Manager, TechStart',
    content: 'Outstanding UI/UX work! Our user engagement increased by 150% after the redesign. The team truly understands modern design principles and user psychology.',
    rating: 5,
    avatar: '👤'
  }
];

export default function Testimonials({ currentTestimonial, setCurrentTestimonial }: TestimonialsProps) {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-cyan-50/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-wider bg-white px-4 py-2 rounded-full shadow-sm">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-black mb-4 mt-4">What Our Clients Say</h2>
        </div>

        <div className="relative">
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-blue-100">
            <div className="flex gap-1 mb-6 justify-center">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-700 text-base md:text-lg mb-8 leading-relaxed text-center italic">
              &ldquo;{testimonials[currentTestimonial].content}&rdquo;
            </p>
            <div className="text-center">
              <div className="text-5xl mb-3">{testimonials[currentTestimonial].avatar}</div>
              <div className="font-black text-lg text-gray-900">{testimonials[currentTestimonial].name}</div>
              <div className="text-blue-600 font-semibold text-sm">{testimonials[currentTestimonial].role}</div>
            </div>
          </div>
          
          {/* Dots */}
          <div className="flex justify-center gap-3 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentTestimonial(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === currentTestimonial ? 'bg-blue-600 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}