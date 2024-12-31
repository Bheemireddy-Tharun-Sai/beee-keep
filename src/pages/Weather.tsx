import React from 'react';
import WeatherDashboard from '../components/weather/WeatherDashboard';
import WeatherStats from '../components/weather/WeatherStats';

export default function Weather() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <header className="text-center py-6 bg-[#1a1a1a] rounded-xl">
        <h1 className="text-3xl font-bold text-amber-500">Weather Integration</h1>
        <p className="text-gray-400 mt-2">Stay updated with real-time and predictive weather data</p>
      </header>

      {/* Weather Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side: Current Weather and Alerts */}
        <div className="space-y-6">
          <WeatherDashboard />
        </div>

        {/* Right Side: Detailed Stats */}
        <div>
          <WeatherStats />
        </div>
      </div>

      {/* Footer or Additional Information */}
      <footer className="text-center text-sm text-gray-400 mt-6">
        <p>Data provided by the integrated weather API. Accuracy may vary based on location.</p>
      </footer>
    </div>
  );
}
