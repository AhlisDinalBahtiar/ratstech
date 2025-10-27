'use client';

import React from 'react';

interface Tech {
  name: string;
  color: string;
}

const techStack: Tech[] = [
  { name: 'Next.js', color: 'border-black hover:bg-black hover:text-white' },
  { name: 'React', color: 'border-blue-400 hover:bg-blue-400 hover:text-white' },
  { name: 'TypeScript', color: 'border-blue-600 hover:bg-blue-600 hover:text-white' },
  { name: 'Tailwind CSS', color: 'border-cyan-500 hover:bg-cyan-500 hover:text-white' },
  { name: 'Node.js', color: 'border-green-600 hover:bg-green-600 hover:text-white' },
  { name: 'Python', color: 'border-yellow-500 hover:bg-yellow-500 hover:text-white' },
  { name: 'TensorFlow', color: 'border-orange-500 hover:bg-orange-500 hover:text-white' },
  { name: 'Figma', color: 'border-purple-500 hover:bg-purple-500 hover:text-white' }
];

export default function TechStack() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
            Technologies
          </span>
          <h2 className="text-3xl md:text-4xl font-black mb-4 mt-4">Our Tech Stack</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We work with cutting-edge technologies to deliver the best solutions
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className={`px-5 py-2.5 rounded-lg border-2 text-sm font-bold transition-all cursor-pointer ${tech.color}`}
            >
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}