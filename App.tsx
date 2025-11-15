
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LoanGrantFinder from './components/LoanGrantFinder';
import Programs from './components/Programs';
import Support from './components/Support';
import Resources from './components/Resources';
import NewsEvents from './components/NewsEvents';
import Trending from './components/Trending';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import LoginModal from './components/LoginModal';
import SignUpModal from './components/SignUpModal';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLoginModal(false);
  };
  
  const handleSignUp = () => {
    // For simplicity, signing up also logs the user in
    setIsLoggedIn(true);
    setShowSignUpModal(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="bg-white font-sans text-gray-800">
      <Header 
        isLoggedIn={isLoggedIn}
        onLoginClick={() => setShowLoginModal(true)}
        onSignUpClick={() => setShowSignUpModal(true)}
        onLogout={handleLogout}
      />
      <main>
        <Hero />
        <LoanGrantFinder />
        <Programs />
        <Support />
        <Resources />
        <NewsEvents />
        <Trending />
      </main>
      <Footer />
      <Chatbot isLoggedIn={isLoggedIn} />

      {showLoginModal && (
        <LoginModal 
          onClose={() => setShowLoginModal(false)}
          onLogin={handleLogin}
        />
      )}
      {showSignUpModal && (
        <SignUpModal 
          onClose={() => setShowSignUpModal(false)}
          onSignUp={handleSignUp}
        />
      )}
    </div>
  );
};

export default App;
