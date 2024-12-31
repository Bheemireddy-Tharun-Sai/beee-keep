import React from 'react';

export default function HiveMap() {
  return (
    <div className="bg-[#242424] p-6 rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Apiary Map</h2>
        <select className="bg-[#1a1a1a] px-3 py-1 rounded-lg text-sm">
          <option>All Apiaries</option>
          <option>North Field</option>
          <option>South Garden</option>
        </select>
      </div>
      <div className="relative h-[300px] bg-[#1a1a1a] rounded-lg">
        <div className="absolute bottom-4 left-4 flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-sm">Healthy</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <span className="text-sm">Needs Attention</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span className="text-sm">Critical</span>
          </div>
        </div>
      </div>
    </div>
  );
}