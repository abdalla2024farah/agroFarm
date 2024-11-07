import React, { useState } from 'react';
import { Sprout, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (section: string) => {
    setIsOpen(false);
    // In a real app, this would use proper routing
    console.log(`Navigating to: ${section}`);
    alert(`Navigating to: ${section}`);
  };

  const handleJoinNetwork = () => {
    // In a real app, this would open a registration modal or navigate to signup
    console.log('Opening registration...');
    alert('Opening registration form...');
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 border-b border-sage-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div 
            onClick={() => handleNavigation('home')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <Sprout className="h-8 w-8 text-sage-600 group-hover:text-sage-700 transition-colors animate-float" />
            <span className="text-xl font-bold bg-gradient-to-r from-sage-600 to-earth-500 bg-clip-text text-transparent">
              AgroConnect
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <button 
                onClick={() => handleNavigation('home')}
                className="text-sage-700 hover:text-sage-900 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigation('experts')}
                className="text-sage-700 hover:text-sage-900 transition-colors"
              >
                Experts
              </button>
              <button 
                onClick={() => handleNavigation('resources')}
                className="text-sage-700 hover:text-sage-900 transition-colors"
              >
                Resources
              </button>
              <button 
                onClick={() => handleNavigation('community')}
                className="text-sage-700 hover:text-sage-900 transition-colors"
              >
                Community
              </button>
              <button 
                onClick={handleJoinNetwork}
                className="bg-gradient-to-r from-sage-600 to-earth-500 text-white px-6 py-2 rounded-lg hover:from-sage-700 hover:to-earth-600 transition-all transform hover:scale-105"
              >
                Join Network
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-sage-600 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => handleNavigation('home')}
                className="text-sage-700 hover:text-sage-900 text-left px-2"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigation('experts')}
                className="text-sage-700 hover:text-sage-900 text-left px-2"
              >
                Experts
              </button>
              <button 
                onClick={() => handleNavigation('resources')}
                className="text-sage-700 hover:text-sage-900 text-left px-2"
              >
                Resources
              </button>
              <button 
                onClick={() => handleNavigation('community')}
                className="text-sage-700 hover:text-sage-900 text-left px-2"
              >
                Community
              </button>
              <button 
                onClick={handleJoinNetwork}
                className="bg-gradient-to-r from-sage-600 to-earth-500 text-white px-4 py-2 rounded-lg hover:from-sage-700 hover:to-earth-600 w-full text-left"
              >
                Join Network
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}