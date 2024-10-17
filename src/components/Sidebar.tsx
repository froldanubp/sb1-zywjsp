import React from 'react';
import { Home, Search, Bell, Mail, User, MoreHorizontal, Twitter } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: Home, text: 'Home' },
    { icon: Search, text: 'Explore' },
    { icon: Bell, text: 'Notifications' },
    { icon: Mail, text: 'Messages' },
    { icon: User, text: 'Profile' },
    { icon: MoreHorizontal, text: 'More' },
  ];

  return (
    <div className="w-64 p-4">
      <Twitter className="w-8 h-8 text-blue-400 mb-4" />
      <nav>
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className="flex items-center space-x-4 p-2 hover:bg-gray-900 rounded-full transition-colors duration-200"
          >
            <item.icon className="w-6 h-6" />
            <span className="text-xl">{item.text}</span>
          </a>
        ))}
      </nav>
      <button className="bg-blue-500 text-white rounded-full py-2 px-4 w-full mt-4 font-bold hover:bg-blue-600 transition-colors duration-200">
        Tweet
      </button>
    </div>
  );
};

export default Sidebar;