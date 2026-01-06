import React from 'react';
import { Search, MoreVertical, ArrowLeft } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center justify-between px-4 py-3 shadow-sm">
      <div className="flex items-center gap-4">
        <ArrowLeft className="w-6 h-6 text-gray-600" />
        <h1 className="text-xl font-medium text-gray-600 tracking-tight">Google Play</h1>
      </div>
      <div className="flex items-center gap-4">
        <Search className="w-6 h-6 text-gray-600" />
        <img 
          src="https://picsum.photos/40/40" 
          alt="Profile" 
          className="w-7 h-7 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Header;