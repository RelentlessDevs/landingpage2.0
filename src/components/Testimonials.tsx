import React from 'react';
import { Star } from 'lucide-react';
import { Container } from './common/Container';
import { SectionTitle } from './common/SectionTitle';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Executive",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    quote: "Working with this life coach helped me secure a promotion and find work-life balance. My stress levels are down 80% and I'm finally enjoying both my career and family life.",
  },
  {
    name: "Michael Chen",
    role: "Entrepreneur",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    quote: "After six months of coaching, I launched my dream business while maintaining a healthy relationship with my family. The ROI has been incredible.",
  },
  {
    name: "Emily Rodriguez",
    role: "Healthcare Professional",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    quote: "The coaching program helped me overcome burnout and rediscover my passion for healthcare. I've since received three awards for patient care.",
  }
];

export default function Testimonials() {
  return (
    <div className="bg-black py-20">
      <Container>
        <SectionTitle>Success Stories</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-zinc-900 p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#f0657e] fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}