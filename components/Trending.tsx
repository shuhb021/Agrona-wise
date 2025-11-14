
import React, { useState } from 'react';

const Trending: React.FC = () => {
  const [activeTab, setActiveTab] = useState('trending');

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">Trending Topics</h2>
        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          Read about how others have used loans and grants to transform their communities and their lives.
        </p>
        <hr className="w-24 border-t-4 border-blue-600 mx-auto mb-12" />

        <div className="border border-gray-200 max-w-5xl mx-auto">
          <div className="flex border-b border-gray-200 bg-gray-50">
            <button
              onClick={() => setActiveTab('trending')}
              className={`flex-1 py-4 px-6 text-lg font-semibold transition-colors ${activeTab === 'trending' ? 'bg-white border-b-4 border-blue-600 text-blue-700' : 'text-gray-500 hover:bg-gray-100'}`}
            >
              Trending Topics
            </button>
            <button
              onClick={() => setActiveTab('stories')}
              className={`flex-1 py-4 px-6 text-lg font-semibold transition-colors ${activeTab === 'stories' ? 'bg-white border-b-4 border-blue-600 text-blue-700' : 'text-gray-500 hover:bg-gray-100'}`}
            >
              Success Stories
            </button>
          </div>
          <div className="p-8 md:p-12">
            {activeTab === 'trending' && (
              <div>
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Better Grants Better Service</h3>
                <p className="text-gray-600 mb-4">
                  Better Grants Better Service (BGBS) is a Rural Development (RD)-wide effort to review RD's grant-only programs and determine how best to modernize them.
                </p>
                <p className="text-gray-600 mb-6">
                  Through ongoing and direct feedback, our customers have asked us to look for opportunities to improve how we deliver our programs. Many customers find it hard to navigate our grant program applications, which results in incomplete or ineligible applications. RD has listened to this feedback and is dedicated to finding and implementing solutions.
                </p>
                <button className="bg-transparent border-2 border-blue-700 text-blue-700 font-bold py-2 px-6 rounded hover:bg-blue-700 hover:text-white transition-colors">
                  Learn More
                </button>
              </div>
            )}
            {activeTab === 'stories' && (
              <div>
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Rural Data Gateway</h3>
                <p className="text-gray-600 mb-6">
                  Welcome to the new Rural Data Gateway! For more than 80 years, USDA Rural Development has been financing infrastructure and housing throughout rural America.
                </p>
                <button className="bg-transparent border-2 border-blue-700 text-blue-700 font-bold py-2 px-6 rounded hover:bg-blue-700 hover:text-white transition-colors">
                  Learn More
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
