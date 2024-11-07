import React from 'react';

export default function ResourceHub() {
  const resources = [
    {
      title: "Sustainable Farming Practices",
      category: "Research",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&h=500",
      reads: "2.5k"
    },
    {
      title: "Modern Irrigation Techniques",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&h=500",
      reads: "1.8k"
    },
    {
      title: "Organic Pest Control Methods",
      category: "Guide",
      image: "https://images.unsplash.com/photo-1592982537447-6f2a6a71dd1b?auto=format&fit=crop&w=800&h=500",
      reads: "3.2k"
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Resource Hub
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of agricultural resources, research papers, and guides.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-green-600">
                    {resource.category}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                {resource.title}
              </h3>
              <p className="text-gray-600 mt-2">{resource.reads} reads</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
            Explore All Resources
          </button>
        </div>
      </div>
    </div>
  );
}