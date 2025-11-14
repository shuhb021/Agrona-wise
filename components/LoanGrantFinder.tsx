
import React from 'react';
import { HomeIcon, BusinessIcon, CommunityIcon } from './Icons';

interface LinkItemProps {
    text: string;
}

const LinkItem: React.FC<LinkItemProps> = ({ text }) => (
    <li className="mb-2">
        <a href="#" className="text-blue-700 underline hover:text-blue-900">
            {text}
        </a>
    </li>
);

interface CategoryCardProps {
    icon: React.ReactNode;
    title: string;
    links: string[];
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, title, links }) => (
    <div className="bg-white p-6 w-full shadow-md rounded-sm">
        <div className="flex flex-col items-center text-center mb-4">
            {icon}
            <h3 className="text-xl font-semibold mt-2">{title}</h3>
        </div>
        <ul className="list-disc list-inside text-left">
            {links.map((link, index) => <LinkItem key={index} text={link} />)}
        </ul>
    </div>
);

const LoanGrantFinder: React.FC = () => {
    const categories = [
        {
            icon: <HomeIcon className="h-12 w-12 text-blue-800" />,
            title: 'For Homes',
            links: [
                'Buy, build, repair or refinance your home',
                'Build or manage multi-family homes',
                'Find an apartment for rent in your area'
            ],
        },
        {
            icon: <BusinessIcon className="h-12 w-12 text-blue-800" />,
            title: 'For Businesses',
            links: [
                'Start or grow your business or cooperative',
                'Improve energy efficiency',
                'Help businesses start and grow'
            ],
        },
        {
            icon: <CommunityIcon className="h-12 w-12 text-blue-800" />,
            title: 'For Communities',
            links: [
                'Develop a community economic plan',
                'Expand/improve community facilities & services',
                'Build out or upgrade water treatment facilities'
            ],
        },
    ];

    return (
        <section className="bg-blue-800 text-white py-16">
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="text-4xl font-bold text-center mb-12">Find Loans & Grants</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {categories.map((cat, index) => (
                        <CategoryCard key={index} icon={cat.icon} title={cat.title} links={cat.links} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LoanGrantFinder;
