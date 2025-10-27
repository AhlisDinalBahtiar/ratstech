'use client';

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-600 via-cyan-600 to-purple-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <Sparkles className="mx-auto mb-6 text-white" size={40} />
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-white">
          Ready to Start Your Project?
        </h2>
        <p className="text-blue-100 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Let&apos;s collaborate to transform your vision into a digital masterpiece that drives real results for your business
        </p>
        <Link href="/contact">
          <button className="bg-white text-blue-600 px-10 py-4 rounded-xl font-black text-base hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-3 group">
            Get Free Consultation
            <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
          </button>
        </Link>
      </div>
    </section>
  );
}