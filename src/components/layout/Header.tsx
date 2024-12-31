//import React from 'react';
import { PlusCircle, Bell, Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-semibold">Apiary Dashboard</h1>
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search hives..."
            className="bg-[#242424] rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="bg-blue-600 px-4 py-2 rounded-lg flex items-center gap-2">
          <PlusCircle className="w-5 h-5" />
          Add Hive
        </button>
        <button className="p-2 rounded-lg bg-[#242424]">
          <Bell className="w-5 h-5" />
        </button>
        <div className="w-8 h-8 rounded-full bg-blue-500"></div>
      </div>
    </header>
  );
}