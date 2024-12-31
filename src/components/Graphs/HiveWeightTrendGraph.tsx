// HiveWeightTrendGraph.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary chart elements
ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

// Define the interface for the props
interface HiveWeightTrendGraphProps {
  data: { timestamp: string; weight: number }[];  // Define the correct type for the data prop
}

const HiveWeightTrendGraph: React.FC<HiveWeightTrendGraphProps> = ({ data }) => {
  const timestamps = data.map(entry => entry.timestamp);
  const weights = data.map(entry => entry.weight);

  const chartData = {
    labels: timestamps,
    datasets: [
      {
        label: 'Hive Weight (kg)',
        data: weights,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
      }
    ],
  };

  return (
    <div className="graph-container">
      <h3>Hive Weight Trend</h3>
      <Line data={chartData} />
    </div>
  );
};

export default HiveWeightTrendGraph;
