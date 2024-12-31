import React from 'react';

export default function SalesByGender() {
  return (
    <div className="bg-[#242424] p-6 rounded-xl h-full">
      <h2 className="text-lg font-semibold mb-4">Sales by Gender</h2>
      <div className="relative flex items-center justify-center h-[300px]">
        <div className="relative w-48 h-48">
          <svg className="w-full h-full" viewBox="0 0 36 36">
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#4F46E5"
              strokeWidth="3"
              strokeDasharray="85, 100"
            />
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#9333EA"
              strokeWidth="3"
              strokeDasharray="15, 100"
              strokeDashoffset="-85"
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="text-3xl font-bold">83,126</div>
            <div className="text-sm text-gray-400">Total</div>
          </div>
        </div>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-600"></div>
            <span>Male</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-600"></div>
            <span>Female</span>
          </div>
        </div>
      </div>
    </div>
  );
}