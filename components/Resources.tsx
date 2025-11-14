
import React from 'react';

interface ResourceCardProps {
  image: string;
  title: string;
  description: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ image, title, description }) => (
  <div className="bg-white shadow-lg overflow-hidden flex flex-col group">
    <img src={image} alt={title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
    <div className="p-6 flex-grow flex flex-col">
      <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
      <div className="mt-4">
        <div className="bg-blue-700 text-white rounded-full w-10 h-10 flex items-center justify-center group-hover:bg-blue-800 transition-colors">
          <span className="text-2xl">&rarr;</span>
        </div>
      </div>
    </div>
  </div>
);

const Resources: React.FC = () => {
  const resources = [
    {
      image: 'https://picsum.photos/400/300?image=23',
      title: 'Lender Portal',
      description: 'This innovative resource allows for electronic reporting by lenders, the Rural Business Cooperative Service, the Rural Utilities Service and the Rural Housing Service.',
    },
    {
      image: 'https://picsum.photos/400/300?image=180',
      title: 'Forms & Publications',
      description: 'This comprehensive resource provides access to all rural USDA documents, including directives, regulations and environmental studies.',
    },
    {
      image: 'https://picsum.photos/400/300?image=1074',
      title: 'Resource Guides',
      description: 'USDA Rural Development has produced a series of resource guides to inform rural communities.',
    },
  ];
  return (
    <section className="py-16 bg-blue-900">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Resources</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
