
import React from 'react';
import { UsdaLogo } from './Icons';

interface HeaderProps {
  isLoggedIn: boolean;
  onLoginClick: () => void;
  onSignUpClick: () => void;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, onLoginClick, onSignUpClick, onLogout }) => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="bg-gray-100 text-xs text-gray-600 py-1.5 px-4 md:px-8">
        <p>
          <span className="font-medium">An official website of the United States government</span>
          <button className="text-blue-700 underline ml-2">Here's how you know</button>
        </p>
      </div>
      <div className="container mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <UsdaLogo className="h-12 w-12 text-green-700 mr-4" />
          <div>
            <h1 className="text-lg font-bold text-green-800">Rural Development</h1>
            <p className="text-sm text-gray-500">U.S. DEPARTMENT OF AGRICULTURE</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <span className="text-gray-700 hidden sm:inline">Welcome!</span>
              <button 
                onClick={onLogout} 
                className="bg-gray-700 text-white font-bold py-2 px-4 rounded hover:bg-gray-800 transition-colors text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button 
                onClick={onLoginClick} 
                className="font-semibold text-blue-800 hover:underline"
              >
                Login
              </button>
              <button 
                onClick={onSignUpClick} 
                className="bg-blue-800 text-white font-bold py-2 px-4 rounded hover:bg-blue-900 transition-colors text-sm"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
