// SwarmingControlActivityGraph.tsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface SwarmingControlActivityGraphProps {
  data: { timestamp: string; interventions: number }[];
}

const SwarmingControlActivityGraph: React.FC<SwarmingControlActivityGraphProps> = ({ data }) => {
  const timestamps = data.map(entry => entry.timestamp);
  const interventions = data.map(entry => entry.interventions);

  const chartData = {
    labels: timestamps,
    datasets: [
      {
        label: 'Interventions',
        data: interventions,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        fill: false,
      }
    ],
  };

  return (
    <div className="graph-container">
      <h3>Swarming Control Activity</h3>
      <Bar data={chartData} />
    </div>
  );
};

export default SwarmingControlActivityGraph;
