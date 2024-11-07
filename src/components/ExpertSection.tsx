import React from 'react';

export default function ExpertSection() {
  const experts = [
    {
      name: "Dr. Sarah Chen",
      role: "Soil Scientist",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=300",
      expertise: "Soil Health & Sustainability"
    },
    {
      name: "Prof. Michael Rodriguez",
      role: "Agricultural Engineer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300",
      expertise: "Precision Farming"
    },
    {
      name: "Dr. Emily Thompson",
      role: "Plant Pathologist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&h=300",
      expertise: "Disease Management"
    }
  ];

  return (
    <div className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Learn from Top Agricultural Experts
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect with leading professionals who are shaping the future of agriculture.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {experts.map((expert, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <img
                src={expert.image}
                alt={expert.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900">{expert.name}</h3>
                <p className="text-green-600 font-medium">{expert.role}</p>
                <p className="text-gray-600 mt-2">{expert.expertise}</p>
                <button className="mt-4 px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition-colors">
                  Connect
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}