import React from 'react';
import { Search } from 'lucide-react';

const TrendingSection = () => {
  const trendingTopics = [
    'Technology',
    'Politics',
    'Sports',
    'Entertainment',
    'Science',
  ];

  return (
    <div className="w-80 p-4">
      <div className="bg-gray-900 rounded-full mb-4">
        <div className="flex items-center p-3">
          <Search className="w-5 h-5 text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search X"
            className="bg-transparent focus:outline-none text-white w-full"
          />
        </div>
      </div>
      <div className="bg-gray-900 rounded-lg">
        <h2 className="font-bold text-xl p-4">What's happening</h2>
        {trendingTopics.map((topic, index) => (
          <div key={index} className="p-4 hover:bg-gray-800 cursor-pointer">
            <p className="text-sm text-gray-500">Trending in World</p>
            <p className="font-bold">{topic}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingSection;