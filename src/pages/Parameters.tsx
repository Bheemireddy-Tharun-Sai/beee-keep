import React from 'react';
import ComparisonChart from '../components/parameters/ComparisonChart';

export default function Parameters() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold mb-6">Parameters</h1>
      <ComparisonChart />
    </div>
  );
}