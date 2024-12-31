// EnvironmentalComparisonGraph.tsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface EnvironmentalComparisonGraphProps {
  data: { timestamp: string; externalTemp: number; internalTemp: number }[];
}

const EnvironmentalComparisonGraph: React.FC<EnvironmentalComparisonGraphProps> = ({ data }) => {
  const timestamps = data.map(entry => entry.timestamp);
  const externalTemps = data.map(entry => entry.externalTemp);
  const internalTemps = data.map(entry => entry.internalTemp);

  const chartData = {
    labels: timestamps,
    datasets: [
      {
        label: 'External Temperature (°C)',
        data: externalTemps,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Internal Temperature (°C)',
        data: internalTemps,
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      }
    ],
  };

  return (
    <div className="graph-container">
      <h3>Environmental Comparison</h3>
      <Bar data={chartData} />
    </div>
  );
};

export default EnvironmentalComparisonGraph;
