import React from 'react';
import { Cloud, Wind, Droplets, AlertTriangle, Thermometer, Umbrella, Feather } from 'lucide-react';

const currentConditions = [
  { icon: <Thermometer className="w-6 h-6" />, label: 'Temperature', value: '24°C' },
  { icon: <Droplets className="w-6 h-6" />, label: 'Humidity', value: '65%' },
  { icon: <Wind className="w-6 h-6" />, label: 'Wind Speed', value: '12 km/h' },
  { icon: <Cloud className="w-6 h-6" />, label: 'Conditions', value: 'Partly Cloudy' },
  { icon: <Umbrella className="w-6 h-6" />, label: 'Rain Probability', value: '30%' },
  { icon: <Feather className="w-6 h-6" />, label: 'UV Index', value: 'Low' },
];

const alerts = [
  { type: 'warning', message: 'High winds expected tomorrow', impact: 'Moderate impact on foraging' },
  { type: 'info', message: 'Rain forecast for next week', impact: 'Plan inspections accordingly' },
  { type: 'critical', message: 'Severe frost warning', impact: 'Protect brood and colonies' },
];

export default function WeatherDashboard() {
  return (
    <div className="space-y-6">
      {/* Current Conditions */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {currentConditions.map((condition) => (
          <div key={condition.label} className="bg-[#242424] p-4 rounded-xl">
            <div className="text-amber-500 mb-2 flex justify-center">{condition.icon}</div>
            <div className="text-sm text-gray-400 text-center">{condition.label}</div>
            <div className="text-xl font-bold text-center">{condition.value}</div>
          </div>
        ))}
      </div>

      {/* Weather Alerts */}
      <div className="bg-[#242424] p-6 rounded-xl">
        <h2 className="text-lg font-semibold mb-4">Weather Alerts</h2>
        <div className="space-y-4">
          {alerts.map((alert, index) => (
            <div key={index} className={`flex items-start gap-3 p-4 rounded-lg ${alert.type === 'critical' ? 'bg-red-500' : 'bg-[#1a1a1a]'}`}>
              <AlertTriangle className="w-5 h-5 text-amber-500 mt-1" />
              <div>
                <p className="font-medium mb-1">{alert.message}</p>
                <p className="text-sm text-gray-400">{alert.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
