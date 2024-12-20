import React from 'react';
import { FileText } from 'lucide-react';
import { Container } from './common/Container';

export default function LeadMagnet() {
  return (
    <div className="bg-[#f0657e] text-white py-20">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Get Your Free Life Assessment Guide
            </h2>
            <p className="text-white/90 mb-8">
              Discover where you are in your journey and what's holding you back with our comprehensive self-assessment tool. Includes personalized recommendations for your growth.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 bg-white"
              />
              <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-zinc-800 transition-colors">
                Get Free Guide <FileText className="w-5 h-5" />
              </button>
            </form>
          </div>
          <div className="flex-1 flex justify-center">
            <FileText className="w-48 h-48 text-white/20" />
          </div>
        </div>
      </Container>
    </div>
  );
}