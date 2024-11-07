import React from 'react';
import { Users, BookOpen, MessageCircle, TrendingUp } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Expert Network",
      description: "Connect with agricultural experts, researchers, and experienced farmers worldwide."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-green-600" />,
      title: "Knowledge Base",
      description: "Access a vast library of research papers, best practices, and farming techniques."
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-green-600" />,
      title: "Community Forums",
      description: "Engage in discussions, ask questions, and share experiences with the community."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      title: "Market Insights",
      description: "Stay updated with agricultural market trends, prices, and demand forecasts."
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Empowering Agricultural Innovation
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform provides the tools and connections you need to succeed in modern agriculture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl border border-gray-100 hover:border-green-200 transition-colors">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}