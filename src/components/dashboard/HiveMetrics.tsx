import React from 'react';
import { Thermometer, Droplets, Scale, Volume2, Activity } from 'lucide-react';

const metrics = [
  { icon: <Thermometer className="w-6 h-6" />, label: 'Temperature', value: '35°C', change: '+2°C' },
  { icon: <Droplets className="w-6 h-6" />, label: 'Humidity', value: '65%', change: '-5%' },
  { icon: <Scale className="w-6 h-6" />, label: 'Weight', value: '85kg', change: '+0.5kg' },
  { icon: <Volume2 className="w-6 h-6" />, label: 'Sound Level', value: '65dB', change: 'Normal' },
  { icon: <Activity className="w-6 h-6" />, label: 'Bee Activity', value: 'High', change: '+15%' },
];

export default function HiveMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {metrics.map((metric) => (
        <div key={metric.label} className="bg-[#242424] p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <div className="text-amber-500">{metric.icon}</div>
            <span className="text-gray-400">{metric.label}</span>
          </div>
          <div className="text-2xl font-bold mb-1">{metric.value}</div>
          <div className="text-sm text-gray-400">{metric.change} from yesterday</div>
        </div>
      ))}
    </div>
  );
}
