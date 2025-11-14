
import React from 'react';

interface ProgramCardProps {
  icon: string;
  title: string;
  description: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ icon, title, description }) => (
  <div className="border border-gray-200 p-8 text-center bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
    <div className="text-blue-600 text-4xl mb-4">{icon}</div>
    <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Programs: React.FC = () => {
  const programs = [
    {
      icon: '💧',
      title: 'Water & Wastewater Infrastructure',
      description: 'Explore ways USDA RD can help rural communities obtain the technical assistance and financing necessary to develop drinking water and waste disposal systems.',
    },
    {
      icon: '🔋',
      title: 'Energy',
      description: 'Our Energy programs empower rural America to establish, maintain, and evolve its energy resources for brighter future.',
    },
    {
      icon: '📶',
      title: 'High-speed Internet Access',
      description: 'Learn about how our programs provide funds to expand high-speed internet access for rural people.',
    },
    {
      icon: '💡',
      title: 'Electricity',
      description: 'USDA RD\'s electric programs help fund electric infrastructure to sustain rural economic well-being and improve quality of life.',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">Explore Our Programs</h2>
        <hr className="w-24 border-t-4 border-blue-600 mx-auto mb-12" />
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
        <div className="text-center mt-12">
            <a href="#" className="text-blue-700 font-semibold hover:underline">See all Programs &rarr;</a>
        </div>
      </div>
    </section>
  );
};

export default Programs;
