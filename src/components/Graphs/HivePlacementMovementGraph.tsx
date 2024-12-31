// HivePlacementMovementGraph.tsx
import React from 'react';
import { Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

interface HivePlacementMovementGraphProps {
  data: { timestamp: string; movements: number }[];
}

const HivePlacementMovementGraph: React.FC<HivePlacementMovementGraphProps> = ({ data }) => {
  const timestamps = data.map(entry => entry.timestamp);
  const movements = data.map(entry => entry.movements);

  const chartData = {
    labels: timestamps,
    datasets: [
      {
        label: 'Hive Movement',
        data: movements.map((mov, index) => ({ x: index, y: mov })),
        backgroundColor: 'rgba(75, 192, 192, 1)',
      }
    ],
  };

  return (
    <div className="graph-container">
      <h3>Hive Placement Movement</h3>
      <Scatter data={chartData} />
    </div>
  );
};

export default HivePlacementMovementGraph;
