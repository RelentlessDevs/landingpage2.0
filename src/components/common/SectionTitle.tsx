import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-white">
      {children}
    </h2>
  );
}