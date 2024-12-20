import React from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Methodology from './components/Methodology';
import Testimonials from './components/Testimonials';
import Credentials from './components/Credentials';
import LeadMagnet from './components/LeadMagnet';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <Methodology />
      <Testimonials />
      <Credentials />
      <LeadMagnet />
    </div>
  );
}

export default App;