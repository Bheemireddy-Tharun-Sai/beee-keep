// VentilationEfficiencyGraph.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

interface VentilationEfficiencyGraphProps {
  data: { timestamp: string; efficiency: number }[];
}

const VentilationEfficiencyGraph: React.FC<VentilationEfficiencyGraphProps> = ({ data }) => {
  const timestamps = data.map(entry => entry.timestamp);
  const efficiencies = data.map(entry => entry.efficiency);

  const chartData = {
    labels: timestamps,
    datasets: [
      {
        label: 'Ventilation Efficiency (%)',
        data: efficiencies,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
      }
    ],
  };

  return (
    <div className="graph-container">
      <h3>Ventilation Efficiency</h3>
      <Line data={chartData} />
    </div>
  );
};

export default VentilationEfficiencyGraph;
