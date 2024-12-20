import React from 'react';
import { Target, Compass, Heart, Brain } from 'lucide-react';
import { Container } from './common/Container';
import { SectionTitle } from './common/SectionTitle';

const benefits = [
  {
    icon: Target,
    title: "Clarity & Direction",
    description: "Gain crystal-clear vision of your goals and create an actionable roadmap to achieve them."
  },
  {
    icon: Brain,
    title: "Mindset Transformation",
    description: "Overcome limiting beliefs and develop the confidence to pursue your biggest dreams."
  },
  {
    icon: Heart,
    title: "Work-Life Harmony",
    description: "Create balance in all areas of your life while achieving remarkable success."
  },
  {
    icon: Compass,
    title: "Sustainable Growth",
    description: "Learn proven strategies that create lasting change and continuous improvement."
  }
];

export default function Benefits() {
  return (
    <div className="bg-black py-20">
      <Container>
        <SectionTitle>How Coaching Transforms Your Life</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-6 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition-colors">
              <benefit.icon className="w-12 h-12 text-[#f0657e] mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}