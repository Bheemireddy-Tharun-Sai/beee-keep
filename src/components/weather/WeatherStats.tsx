import React from 'react';
import { Thermometer, Droplets, Wind, Cloud, Umbrella, Sun} from 'lucide-react';

const weatherData = [
  { icon: <Thermometer className="w-8 h-8" />, value: '24°C', label: 'Temperature' },
  { icon: <Droplets className="w-8 h-8" />, value: '65%', label: 'Humidity' },
  { icon: <Wind className="w-8 h-8" />, value: '12 km/h', label: 'Wind Speed' },
  { icon: <Cloud className="w-8 h-8" />, value: 'Partly Cloudy', label: 'Conditions' },
  { icon: <Umbrella className="w-8 h-8" />, value: '30%', label: 'Rain Probability' },
  { icon: <Sun className="w-8 h-8" />, value: 'UV Index: Low', label: 'Sunlight' },
];

export default function WeatherStats() {
  return (
    <div className="bg-[#242424] p-6 rounded-xl">
      <h2 className="text-lg font-semibold mb-6">Weather Conditions</h2>
      <div className="grid grid-cols-3 gap-4">
        {weatherData.map((item) => (
          <div key={item.label} className="bg-[#1a1a1a] p-4 rounded-xl text-center">
            <div className="text-amber-500 mb-2 flex justify-center">{item.icon}</div>
            <div className="text-xl font-bold mb-1">{item.value}</div>
            <div className="text-sm text-gray-400">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
