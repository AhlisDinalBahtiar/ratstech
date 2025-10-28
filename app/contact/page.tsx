'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle, ArrowLeft, Zap, MessageSquare, Calendar } from 'lucide-react';
import Link from 'next/link';

// Contact Info Card Component
const ContactInfoCard = ({ icon: Icon, title, value, subtext, color }) => (
  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-gray-100 hover:border-blue-200 group">
    <div className={`w-14 h-14 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
      <Icon className="text-white" size={28} />
    </div>
    <h3 className="font-bold text-lg mb-1">{title}</h3>
    <p className="text-blue-600 font-semibold mb-1">{value}</p>
    <p className="text-sm text-gray-500">{subtext}</p>
  </div>
);

// Working Hours Component
const WorkingHours = () => (
  <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 text-white shadow-xl">
    <Clock className="mb-4" size={40} />
    <h3 className="text-xl font-black mb-4">Working Hours</h3>
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
);

// Process Steps Component
const ProcessSteps = () => {
  const steps = [
    { num: 1, title: 'Initial Response', desc: 'We\'ll review your request and get back to you within 24 hours', color: 'blue' },
    { num: 2, title: 'Discovery Call', desc: '30-minute call to discuss your project in detail', color: 'cyan' },
    { num: 3, title: 'Proposal & Timeline', desc: 'Receive a detailed proposal with timeline and pricing', color: 'purple' }
  ];

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100">
      <Calendar className="text-blue-600 mb-4" size={40} />
      <h3 className="text-xl font-black mb-4">What Happens Next?</h3>
      <div className="space-y-4">
        {steps.map(step => (
          <div key={step.num} className="flex gap-3">
            <div className={`w-8 h-8 bg-${step.color}-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-${step.color}-600`}>
              {step.num}
            </div>
            <div>
              <h4 className="font-bold mb-1">{step.title}</h4>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// FAQ Component
const FAQ = () => {
  const faqs = [
    { q: 'Do you offer free consultation?', a: 'Yes! Initial consultation is completely free.' },
    { q: 'What\'s your typical project timeline?', a: 'Varies by project, usually 4-12 weeks for full projects.' },
    { q: 'Do you work with startups?', a: 'Absolutely! We love working with startups and scale-ups.' },
    { q: 'Do you provide ongoing support?', a: 'Yes, we offer maintenance and support packages after launch.' }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border-2 border-purple-100">
      <h3 className="text-xl font-black mb-4">Quick FAQ</h3>
      <div className="space-y-4 text-sm">
        {faqs.map((faq, idx) => (
          <div key={idx}>
            <h4 className="font-bold mb-1">{faq.q}</h4>
            <p className="text-gray-600">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Success Message Component
const SuccessMessage = () => (
  <div className="text-center py-12">
    <div className="relative inline-flex mb-4">
      <div className="absolute inset-0 bg-green-400/20 rounded-full blur-xl animate-pulse" />
      <CheckCircle className="relative text-green-500" size={64} />
    </div>
    <h3 className="text-2xl font-bold text-green-600 mb-2">Message Sent Successfully!</h3>
    <p className="text-gray-600">We&apos;ll get back to you within 24 hours.</p>
  </div>
);

// Form Input Component
const FormInput = ({ label, name, type = 'text', required = false, placeholder, value, onChange, ...props }) => (
  <div>
    <label className="block text-sm font-bold text-gray-700 mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all"
      placeholder={placeholder}
      {...props}
    />
  </div>
);

// Main Contact Page Component
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
    
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
    { icon: Mail, title: 'Email Us', value: 'ahlzdinal@gmail.com', subtext: 'We reply within 24 hours', color: 'from-blue-500 to-cyan-500' },
    { icon: Phone, title: 'Call Us', value: '+62 812-3456-7890', subtext: 'Mon-Fri 9:00 AM - 6:00 PM', color: 'from-purple-500 to-pink-500' },
    { icon: MapPin, title: 'Visit Us', value: 'Semarang, Indonesia', subtext: 'By appointment only', color: 'from-orange-500 to-red-500' }
  ];

  const serviceOptions = [
    { value: 'web-development', label: 'Web Development' },
    { value: 'ai-chatbot', label: 'AI Chatbot Development' },
    { value: 'ui-ux-design', label: 'UI/UX Design' },
    { value: 'consulting', label: 'Technology Consulting' },
    { value: 'other', label: 'Other Services' }
  ];

  const budgetOptions = [
    { value: 'small', label: 'Under $100' },
    { value: 'medium', label: '$100 - $500' },
    { value: 'large', label: '$500 - $1000' },
    { value: 'enterprise', label: 'Above $1000' }
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
                RatsTech
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
            <h1 className="text-4xl md:text-5xl font-black mb-6">
              Let&apos;s Build Something
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to transform your ideas into reality? Fill out the form below and our team will get back to you within 24 hours
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, idx) => (
              <ContactInfoCard key={idx} {...info} />
            ))}
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-gray-100">
                <h2 className="text-2xl font-black mb-2">Get Free Consultation</h2>
                <p className="text-gray-600 mb-8">Fill out the form and we&apos;ll be in touch as soon as possible</p>

                {isSuccess ? (
                  <SuccessMessage />
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormInput
                        label="Full Name"
                        name="name"
                        required
                        placeholder="Your Full Name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      <FormInput
                        label="Email Address"
                        name="email"
                        type="email"
                        required
                        placeholder="Your Email Address"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormInput
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        placeholder="Your Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      <FormInput
                        label="Company Name"
                        name="company"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Service Interested In <span className="text-red-500">*</span>
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
                        Preferred Contact Method <span className="text-red-500">*</span>
                      </label>
                      <div className="flex gap-4">
                        {['email', 'phone', 'whatsapp'].map(method => (
                          <label key={method} className="flex items-center cursor-pointer">
                            <input
                              type="radio"
                              name="preferredContact"
                              value={method}
                              checked={formData.preferredContact === method}
                              onChange={handleChange}
                              className="mr-2"
                            />
                            <span className="text-gray-700 font-medium capitalize">{method}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Project Details <span className="text-red-500">*</span>
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
              <WorkingHours />
              <ProcessSteps />
              <FAQ />
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
              RatsTech
            </span>
          </div>
          <p className="text-gray-600 text-sm">
            &copy; 2025 RatsTech Agency. All rights reserved.
          </p>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}