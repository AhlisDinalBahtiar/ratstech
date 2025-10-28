'use client';

import React from 'react';
import { Zap } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-12 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-md">
                <Zap className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                RatsTech
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Building digital experiences that matter. Your trusted partner in technology solutions.
            </p>
            <div className="flex gap-3">
              <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all cursor-pointer text-xs font-bold">
                Li
              </div>
              <div className="w-9 h-9 bg-pink-100 rounded-lg flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all cursor-pointer text-xs font-bold">
                Ig
              </div>
              <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all cursor-pointer text-xs font-bold">
                Tw
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-black mb-4 text-gray-900 text-base">Services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer transition-colors font-medium">Web Development</li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors font-medium">AI Chatbot</li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors font-medium">UI/UX Design</li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors font-medium">Consulting</li>
            </ul>
          </div>
          <div>
            <h4 className="font-black mb-4 text-gray-900 text-base">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer transition-colors font-medium">About Us</li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors font-medium">Portfolio</li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors font-medium">
                <Link href="/contact">Contact</Link>
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors font-medium">Careers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-black mb-4 text-gray-900 text-base">Contact Info</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="font-medium">📧 ahlzdinal@gmail.com</li>
              <li className="font-medium">📞 +62 812-3456-7890</li>
              <li className="font-medium">📍 Semarang, Indonesia</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-600 text-sm font-medium">
            &copy; 2025 RatsTech Agency. All rights reserved.
          </div>
          <div className="text-gray-500 text-sm">
            Built with ❤️ RatsTech
          </div>
        </div>
      </div>
    </footer>
  );
}
