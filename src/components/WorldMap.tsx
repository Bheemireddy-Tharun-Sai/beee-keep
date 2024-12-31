import React from 'react';

export default function WorldMap() {
  return (
    <div className="bg-[#242424] p-6 rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Top countries</h2>
        <select className="bg-[#1a1a1a] px-3 py-1 rounded-lg text-sm">
          <option>Latest 7 days</option>
          <option>Latest 30 days</option>
          <option>Latest 90 days</option>
        </select>
      </div>
      <div className="relative h-[300px] bg-[#1a1a1a] rounded-lg">
        {/* World map visualization would go here */}
        <div className="absolute bottom-4 left-4 flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-sm">Top 1</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-400"></div>
            <span className="text-sm">Top 2</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-300"></div>
            <span className="text-sm">Top 3</span>
          </div>
        </div>
      </div>
    </div>
  );
}