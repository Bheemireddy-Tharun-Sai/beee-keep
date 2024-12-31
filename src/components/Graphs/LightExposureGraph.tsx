// LightExposureGraph.tsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface LightExposureGraphProps {
  data: { timestamp: string; exposure: number }[];
}

const LightExposureGraph: React.FC<LightExposureGraphProps> = ({ data }) => {
  const timestamps = data.map(entry => entry.timestamp);
  const exposures = data.map(entry => entry.exposure);

  const chartData = {
    labels: timestamps,
    datasets: [
      {
        label: 'Light Exposure (lux)',
        data: exposures,
        backgroundColor: 'rgba(255, 159, 64, 0.5)',
      },
    ],
  };

  return (
    <div className="graph-container">
      <h3>Light Exposure</h3>
      <Bar data={chartData} />
    </div>
  );
};

export default LightExposureGraph;
