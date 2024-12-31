import React from 'react';
import { Hexagon, Crown, Sprout } from 'lucide-react';

const metrics = [
  { 
    icon: <Hexagon className="w-8 h-8" />,
    label: 'Honey Production',
    value: '125 kg',
    trend: '+12%',
    details: 'Last 30 days'
  },
  {
    icon: <Crown className="w-8 h-8" />,
    label: 'Queen Performance',
    value: '2,000 eggs/day',
    trend: 'Optimal',
    details: 'Laying rate'
  },
  {
    icon: <Sprout className="w-8 h-8" />,
    label: 'Brood Development',
    value: '85%',
    trend: '+5%',
    details: 'Survival rate'
  }
];

export default function ProductivityMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {metrics.map((metric) => (
        <div key={metric.label} className="bg-[#242424] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
          <div className="text-amber-500 mb-4">{metric.icon}</div>
          <h3 className="text-lg font-semibold mb-2 text-white">{metric.label}</h3>
          <div className="text-2xl font-bold mb-1 text-white">{metric.value}</div>
          <div className="text-sm text-white">
            <span className="text-green-500">{metric.trend}</span>
            <span className="text-gray-400 ml-2">{metric.details}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
