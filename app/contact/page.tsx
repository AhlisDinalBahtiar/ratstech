'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle, ArrowLeft, Zap, MessageSquare, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'web-development',
    budget: '',
    message: '',
    preferredContact: 'email'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: 'web-development',
        budget: '',
        message: '',
        preferredContact: 'email'
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'hello@techflow.com',
      subtext: 'We reply within 24 hours',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+62 812-3456-7890',
      subtext: 'Mon-Fri 9:00 AM - 6:00 PM',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: 'Jakarta, Indonesia',
      subtext: 'By appointment only',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const serviceOptions = [
    { value: 'web-development', label: 'Web Development' },
    { value: 'ai-chatbot', label: 'AI Chatbot Development' },
    { value: 'ui-ux-design', label: 'UI/UX Design' },
    { value: 'consulting', label: 'Technology Consulting' },
    { value: 'other', label: 'Other Services' }
  ];

  const budgetOptions = [
    { value: 'small', label: 'Under $5,000' },
    { value: 'medium', label: '$5,000 - $15,000' },
    { value: 'large', label: '$15,000 - $50,000' },
    { value: 'enterprise', label: 'Above $50,000' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-xl shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-11 h-11 bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <Zap className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                TechFlow
              </span>
            </Link>
            
            <Link href="/">
              <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-all font-medium">
                <ArrowLeft size={20} />
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-300/30 to-cyan-300/30 rounded-full blur-3xl animate-float" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-float-delay" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-100 rounded-full text-blue-600 text-sm font-semibold shadow-lg">
              <MessageSquare size={18} />
              Get In Touch
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              Let&apos;s Build Something
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to transform your ideas into reality? Fill out the form below and our team will get back to you within 24 hours
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-gray-100 hover:border-blue-200 group">
                  <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{info.title}</h3>
                  <p className="text-blue-600 font-semibold mb-1">{info.value}</p>
                  <p className="text-sm text-gray-500">{info.subtext}</p>
                </div>
              );
            })}
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-gray-100">
                <h2 className="text-3xl font-black mb-2">Get Free Consultation</h2>
                <p className="text-gray-600 mb-8">Fill out the form and we&apos;ll be in touch as soon as possible</p>

                {isSuccess ? (
                  <div className="text-center py-12">
                    <CheckCircle className="mx-auto text-green-500 mb-4" size={64} />
                    <h3 className="text-2xl font-bold text-green-600 mb-2">Message Sent Successfully!</h3>
                    <p className="text-gray-600">We&apos;ll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all"
                          placeholder="+62 812-3456-7890"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Service Interested In *
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all"
                        >
                          {serviceOptions.map(option => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Project Budget
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all"
                        >
                          <option value="">Select Budget Range</option>
                          {budgetOptions.map(option => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Preferred Contact Method *
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="email"
                            checked={formData.preferredContact === 'email'}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          <span className="text-gray-700 font-medium">Email</span>
                        </label>
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="phone"
                            checked={formData.preferredContact === 'phone'}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          <span className="text-gray-700 font-medium">Phone</span>
                        </label>
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="whatsapp"
                            checked={formData.preferredContact === 'whatsapp'}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          <span className="text-gray-700 font-medium">WhatsApp</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all resize-none"
                        placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="group-hover:translate-x-1 transition-transform" size={20} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Working Hours */}
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 text-white shadow-xl">
                <Clock className="mb-4" size={40} />
                <h3 className="text-2xl font-black mb-4">Working Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-white/20">
                    <span className="font-semibold">Monday - Friday</span>
                    <span className="font-bold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/20">
                    <span className="font-semibold">Saturday</span>
                    <span className="font-bold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Sunday</span>
                    <span className="font-bold">Closed</span>
                  </div>
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100">
                <Calendar className="text-blue-600 mb-4" size={40} />
                <h3 className="text-2xl font-black mb-4">What Happens Next?</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-blue-600">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Initial Response</h4>
                      <p className="text-sm text-gray-600">We&apos;ll review your request and get back to you within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-cyan-600">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Discovery Call</h4>
                      <p className="text-sm text-gray-600">30-minute call to discuss your project in detail</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-purple-600">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Proposal & Timeline</h4>
                      <p className="text-sm text-gray-600">Receive a detailed proposal with timeline and pricing</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border-2 border-purple-100">
                <h3 className="text-2xl font-black mb-4">Quick FAQ</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-bold mb-1">Do you offer free consultation?</h4>
                    <p className="text-gray-600">Yes! Initial consultation is completely free.</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">What&apos;s your typical project timeline?</h4>
                    <p className="text-gray-600">Varies by project, usually 4-12 weeks for full projects.</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Do you work with startups?</h4>
                    <p className="text-gray-600">Absolutely! We love working with startups and scale-ups.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
              <Zap className="text-white" size={20} />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              TechFlow
            </span>
          </div>
          <p className="text-gray-600 text-sm">
            &copy; 2025 TechFlow Agency. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}