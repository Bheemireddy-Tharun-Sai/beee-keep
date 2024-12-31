// TemperatureAndHumidityGraph.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

interface TemperatureAndHumidityGraphProps {
  data: { timestamp: string; temperature: number; humidity: number }[];
}

const TemperatureAndHumidityGraph: React.FC<TemperatureAndHumidityGraphProps> = ({ data }) => {
  const timestamps = data.map(entry => entry.timestamp);
  const temperatures = data.map(entry => entry.temperature);
  const humidities = data.map(entry => entry.humidity);

  const chartData = {
    labels: timestamps,
    datasets: [
      {
        label: 'Temperature (°C)',
        data: temperatures,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: false,
      },
      {
        label: 'Humidity (%)',
        data: humidities,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: false,
      }
    ],
  };

  return (
    <div className="graph-container">
      <h3>Temperature and Humidity</h3>
      <Line data={chartData} />
    </div>
  );
};

export default TemperatureAndHumidityGraph;
