import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Container } from './common/Container';

export default function Hero() {
  return (
    <div className="relative bg-black">
      <Container className="py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Transform Your Life's Story Into A Masterpiece
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Break free from limitations, discover your true potential, and create the life you've always dreamed of with professional guidance and proven strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-[#f0657e] text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#d55b71] transition-colors">
                Book Discovery Call <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-[#f0657e] text-[#f0657e] px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#f0657e] hover:text-white transition-colors">
                Get Free Assessment <Sparkles className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://i.imgur.com/SRJtue1.png"
              alt="Professional Life Coach"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}