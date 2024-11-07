import React, { useState } from 'react';
import { Search, ArrowRight, Leaf, Cloud, Droplets, Users, FileText, Globe } from 'lucide-react';

export default function Hero() {
  const [searchFocus, setSearchFocus] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    // In a real app, this would navigate to search results
    console.log('Searching for:', searchQuery);
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <div className="relative min-h-screen pt-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-sage-50 via-white to-earth-50">
        <Leaf className="absolute top-20 left-[10%] w-8 h-8 text-sage-200 animate-float" />
        <Cloud className="absolute top-40 right-[15%] w-10 h-10 text-earth-200 animate-float" style={{ animationDelay: '1s' }} />
        <Droplets className="absolute bottom-40 left-[20%] w-6 h-6 text-sage-300 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
        <div className="text-center">
          {/* Main heading with decorative elements */}
          <div className="relative inline-block mb-12">
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-sage-100 rounded-full opacity-50 animate-float" />
            <div className="absolute -bottom-4 -left-8 w-16 h-16 bg-earth-100 rounded-full opacity-50 animate-float" style={{ animationDelay: '2s' }} />
            <h1 className="relative text-5xl md:text-6xl font-bold text-sage-900">
              Connecting Agricultural
              <span className="block mt-2 bg-gradient-to-r from-sage-600 to-earth-500 bg-clip-text text-transparent">
                Minds & Innovation
              </span>
            </h1>
          </div>

          {/* Subheading */}
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Join the world's largest network of agricultural experts, farmers, and researchers.
            Share knowledge, get advice, and grow together.
          </p>

          {/* Search section */}
          <div className="max-w-2xl mx-auto mb-16">
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 justify-center">
              <div className="relative flex-1">
                <div className={`absolute inset-0 bg-gradient-to-r from-sage-200 to-earth-200 opacity-20 blur-lg transform transition-all duration-300 ${searchFocus ? 'scale-105' : 'scale-100'}`} />
                <div className="relative">
                  <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors ${searchFocus ? 'text-sage-600' : 'text-gray-400'}`} />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for agricultural experts, topics, or resources..."
                    className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:border-sage-500 focus:ring-2 focus:ring-sage-200 transition-all bg-white/90 backdrop-blur-sm"
                    onFocus={() => setSearchFocus(true)}
                    onBlur={() => setSearchFocus(false)}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="group bg-gradient-to-r from-sage-600 to-earth-500 text-white px-6 py-3 rounded-lg hover:from-sage-700 hover:to-earth-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
              >
                Search
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
            {[
              { value: '10K+', label: 'Expert Members', icon: <Users className="w-6 h-6" /> },
              { value: '50K+', label: 'Farmers Connected', icon: <Users className="w-6 h-6" /> },
              { value: '1000+', label: 'Research Papers', icon: <FileText className="w-6 h-6" /> },
              { value: '120+', label: 'Countries', icon: <Globe className="w-6 h-6" /> }
            ].map((stat, index) => (
              <div key={index} 
                className="group bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 border border-sage-100">
                <div className="flex flex-col items-center">
                  <div className="mb-2 text-sage-500 group-hover:text-sage-600 transition-colors">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-sage-600 to-earth-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 mt-1 text-sm md:text-base">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}