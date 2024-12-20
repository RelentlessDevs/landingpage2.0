import React from 'react';
import { Award, BookOpen, Users, Clock } from 'lucide-react';
import { Container } from './common/Container';
import { SectionTitle } from './common/SectionTitle';

export default function Credentials() {
  return (
    <div className="bg-zinc-900 py-20">
      <Container>
        <SectionTitle>Why Choose Me As Your Coach</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <Award className="w-12 h-12 text-[#f0657e] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Certified Coach</h3>
            <p className="text-gray-300">ICF Certified Professional Coach</p>
          </div>
          <div>
            <Clock className="w-12 h-12 text-[#f0657e] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">10+ Years</h3>
            <p className="text-gray-300">Of Coaching Experience</p>
          </div>
          <div>
            <Users className="w-12 h-12 text-[#f0657e] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">500+ Clients</h3>
            <p className="text-gray-300">Successfully Transformed</p>
          </div>
          <div>
            <BookOpen className="w-12 h-12 text-[#f0657e] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Published Author</h3>
            <p className="text-gray-300">Best-selling Personal Development Books</p>
          </div>
        </div>
      </Container>
    </div>
  );
}