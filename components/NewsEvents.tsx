
import React from 'react';

const NewsEvents: React.FC = () => {
  const newsItems = [
    {
      title: 'USDA To Hold Listening Sessions on Rural and Federal Veterinary Workforces',
      date: 'September 23, 2025',
    },
    {
      title: 'Secretary Rollins Targets Invasive Species, Announces Next Steps to Clear the Chesapeake from Harmful Catfish',
      date: 'August 6, 2025',
    },
    {
      title: 'USDA Holds National Lenders of Year Award Ceremony',
      date: 'June 24, 2025',
    },
    {
      title: 'USDA Delivers Immediate Relief to Farmers, Ranchers and Rural Communities Impacted by Recent Disasters',
      date: 'April 22, 2025',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Recent News</h2>
          <div className="space-y-6">
            {newsItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <a href="#" className="text-lg text-blue-700 font-semibold hover:underline">
                  {item.title}
                </a>
                <p className="text-sm text-gray-500 mt-1">{item.date}</p>
              </div>
            ))}
          </div>
          <button className="mt-8 bg-gray-700 text-white font-bold py-3 px-6 rounded hover:bg-gray-800 transition-colors">
            View All News
          </button>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Upcoming Events</h2>
          <div className="bg-white p-6 border border-gray-200">
            <p className="text-gray-600 mb-6">There are currently no upcoming events.</p>
            <button className="bg-blue-800 text-white font-bold py-3 px-6 rounded hover:bg-blue-900 transition-colors">
              View Dates & Events
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
