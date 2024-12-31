import React from 'react';

const salesData = [
  { label: 'Total sales', amount: '$842.98', percentage: '78.58%' },
  { label: 'Total income', amount: '$425.12', percentage: '48.75%' },
  { label: 'Total profit', amount: '$235.89', percentage: '25.45%' },
];

export default function SalesOverview() {
  return (
    <div className="bg-[#242424] p-6 rounded-xl">
      <h2 className="text-lg font-semibold mb-6">Sales Overview</h2>
      <div className="space-y-4">
        {salesData.map((item) => (
          <div key={item.label}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-400">{item.label}</span>
              <span>{item.amount}</span>
            </div>
            <div className="h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 rounded-full"
                style={{ width: item.percentage }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}