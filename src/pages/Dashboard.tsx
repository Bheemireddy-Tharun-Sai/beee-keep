import React from 'react';
import HiveMetrics from '../components/dashboard/HiveMetrics';
import AlertsList from '../components/dashboard/AlertsList';
import WeatherStats from '../components/dashboard/WeatherStats';
import ProductivityMetrics from '../components/dashboard/ProductivityMetrics';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <HiveMetrics />
        <WeatherStats />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AlertsList />
        <ProductivityMetrics />
      </div>
    </div>
  );
}
