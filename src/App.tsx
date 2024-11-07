import React from 'react';
import { Users, FileText, Globe } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ExpertSection from './components/ExpertSection';
import ResourceHub from './components/ResourceHub';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navbar />
      <Hero />
      <Features />
      <ExpertSection />
      <ResourceHub />
    </div>
  );
}

export default App;