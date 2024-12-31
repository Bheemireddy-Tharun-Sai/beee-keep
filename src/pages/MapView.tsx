import React from 'react';
import HiveMap from '../components/map/HiveMap';

export default function MapView() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold mb-6">Map Integration</h1>
      <HiveMap />
    </div>
  );
}