import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Container } from './common/Container';
import { SectionTitle } from './common/SectionTitle';

const methodologySteps = [
  "Target: Identify clear, achievable goals",
  "Reflect: Understand current patterns and beliefs",
  "Analyze: Discover opportunities for growth",
  "Navigate: Create strategic action plans",
  "Strengthen: Build new habits and skills",
  "Flourish: Achieve sustainable results",
  "Optimize: Refine and maintain progress",
  "Measure: Track and celebrate success"
];

export default function Methodology() {
  return (
    <div className="bg-zinc-900 py-20">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1552581234-26160f608093"
              alt="Coaching Methodology"
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div className="flex-1">
            <SectionTitle>The RELENTLESS Methodology</SectionTitle>
            <div className="space-y-4">
              {methodologySteps.map((step, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-[#f0657e] flex-shrink-0" />
                  <p className="text-gray-300">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}