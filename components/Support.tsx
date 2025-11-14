
import React from 'react';

const Support: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">Support & Tools</h2>
        <hr className="w-24 border-t-4 border-blue-600 mx-auto mb-12" />
        <div className="grid md:grid-cols-2 gap-12 text-lg">
          <div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">💬</span> Talk to a Rural USDA Expert
            </h3>
            <p className="text-gray-600 mb-6">
              USDA Service Centers are designed to be a single location where customers can access the services provided by the Farm Service Agency, Natural Resources Conservation Service, and the Rural Development agencies.
            </p>
            <button className="bg-blue-800 text-white font-bold py-3 px-6 rounded hover:bg-blue-900 transition-colors">
              Find your local State Office
            </button>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-blue-800 mb-2 flex items-center">
                <span className="text-3xl mr-3">✔️</span> Check Eligibility
              </h3>
              <p className="text-gray-600">
                Check a home, town or service location to verify eligibility for Rural Programs.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-800 mb-2 flex items-center">
                <span className="text-3xl mr-3">📄</span> Manage your USDA Loan
              </h3>
              <p className="text-gray-600">
                You can create an account and manage your current loan through the Customer Service Center (CSC) portal. You can also contact the CSC at <a href="tel:800-414-1226" className="text-blue-700 underline">800-414-1226</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
