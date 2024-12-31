import React from 'react';

export default function HiveHealth() {
  return (
    <div className="bg-[#242424] p-6 rounded-xl h-full">
      <h2 className="text-lg font-semibold mb-4">Colony Health Status</h2>
      <div className="relative flex items-center justify-center h-[300px]">
        <div className="relative w-48 h-48">
          <svg className="w-full h-full" viewBox="0 0 36 36">
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#22c55e"
              strokeWidth="3"
              strokeDasharray="75, 100"
            />
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#eab308"
              strokeWidth="3"
              strokeDasharray="15, 100"
              strokeDashoffset="-75"
            />
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#ef4444"
              strokeWidth="3"
              strokeDasharray="10, 100"
              strokeDashoffset="-90"
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="text-3xl font-bold">32</div>
            <div className="text-sm text-gray-400">Total Hives</div>
          </div>
        </div>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span>Healthy (75%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <span>Check (15%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span>Critical (10%)</span>
          </div>
        </div>
      </div>
    </div>
  );
}