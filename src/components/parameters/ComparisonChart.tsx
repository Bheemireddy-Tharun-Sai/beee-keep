import React from 'react';

const parameters = [
  {
    label: 'Temperature & Humidity',
    liveValue: '28°C / 60%',
    predictedValue: '30°C / 65%',
  },
  {
    label: 'Ventilation: Bee Fanning',
    liveValue: 'Optimal',
    predictedValue: 'Optimal',
  },
  {
    label: 'Foraging Resources: Pollen, Colony Nutrition',
    liveValue: '75%',
    predictedValue: '80%',
  },
  {
    label: 'Swarming Control',
    liveValue: 'Active',
    predictedValue: 'Under Control',
  },
  {
    label: 'Hive Placement',
    liveValue: 'South-Facing',
    predictedValue: 'East-Facing',
  },
  {
    label: 'Weight',
    liveValue: '45 kg',
    predictedValue: '50 kg',
  },
  {
    label: 'Brood',
    liveValue: '85%',
    predictedValue: '90%',
  },
];

export default function Parameters() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-900 text-white">
      {/* Left Section: Live Values */}
      <div className="bg-[#242424] p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Live Parameters</h2>
        <div className="space-y-4">
          {parameters.map((param) => (
            <div key={param.label} className="p-4 bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold">{param.label}</h3>
              <p className="text-amber-500">Live Value: {param.liveValue}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section: Predicted Values */}
      <div className="bg-[#242424] p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Predicted Parameters</h2>
        <div className="space-y-4">
          {parameters.map((param) => (
            <div key={param.label} className="p-4 bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold">{param.label}</h3>
              <p className="text-green-500">Predicted Value: {param.predictedValue}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
