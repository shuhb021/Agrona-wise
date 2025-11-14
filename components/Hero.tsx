
import React from 'react';

const HeroCard: React.FC<{
  bgImage: string;
  title: string;
  description: string;
}> = ({ bgImage, title, description }) => (
  <div
    className="relative min-h-[60vh] bg-cover bg-center text-white flex items-center"
    style={{ backgroundImage: `url(${bgImage})` }}
  >
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="relative container mx-auto px-4 md:px-8 z-10">
      <div className="max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">{title}</h2>
        <p className="text-lg md:text-xl mb-6">{description}</p>
        <button className="bg-transparent border-2 border-white text-white font-bold py-2 px-6 rounded hover:bg-white hover:text-black transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  </div>
);

const Hero: React.FC = () => {
  return (
    <section>
      <HeroCard
        bgImage="https://picsum.photos/1600/900?image=1059"
        title="Disaster Resiliency and Recovery Resources A Guide for Rural Communities"
        description="The Resource Guide offers vital information on programs and services from RD and other agencies to assist rural residents, businesses, and communities in long-term recovery and planning after disasters."
      />
      <HeroCard
        bgImage="https://picsum.photos/1600/900?image=573"
        title="Water & Waste Disposal Predevelopment Planning Grants"
        description="This program assists low-income communities with initial planning and development of applications for USDA Rural Development Water and Waste Disposal direct loan/grant and loan guarantee programs."
      />
    </section>
  );
};

export default Hero;
