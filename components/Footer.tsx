
import React from 'react';
import { UsdaLogo } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-6 md:mb-0">
          <UsdaLogo className="h-12 w-12 text-white mr-4" />
          <div>
            <h1 className="text-lg font-bold">Rural Development</h1>
            <p className="text-sm text-gray-400">U.S. DEPARTMENT OF AGRICULTURE</p>
          </div>
        </div>
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} USDA Rural Development. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
