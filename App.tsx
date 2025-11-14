
import React from 'react';
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

const App: React.FC = () => {
  return (
    <div className="bg-white font-sans text-gray-800">
      <Header />
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
      <Chatbot />
    </div>
  );
};

export default App;
