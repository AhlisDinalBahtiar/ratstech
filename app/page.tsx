'use client';

import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Services from './components/Services';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Auto rotate testimonials
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(testimonialInterval);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar 
        isScrolled={isScrolled} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      
      <Hero mousePosition={mousePosition} />
      
      {/* Urutan diperbaiki: TechStack → Services → Stats */}
      <TechStack />
      
      <Services 
        activeService={activeService} 
        setActiveService={setActiveService} 
      />
      
      <Stats />
      
      <Projects />
      
      <Benefits />
      
      <Testimonials 
        currentTestimonial={currentTestimonial} 
        setCurrentTestimonial={setCurrentTestimonial} 
      />
      
      <CTA />
      
      <Footer />
    </div>
  );
}