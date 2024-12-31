import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

interface ThermalImagingGraphProps {
  data: { timestamp: string; temperature: number }[];
}

const ThermalImagingGraph: React.FC<ThermalImagingGraphProps> = ({ data }) => {
  // Log the received data
  console.log("Thermal Imaging Data:", data);

  // Map data
  const timestamps = data.map(entry => entry.timestamp);
  const temperatures = data.map(entry => entry.temperature);

  // Check if there's valid data
  if (!data || data.length === 0) {
    return <div>No data available for the graph.</div>;
  }

  const chartData = {
    labels: timestamps,
    datasets: [
      {
        label: "Temperature (°C)",
        data: temperatures,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true, // fill under the line
      }
    ],
  };

  return (
    <div className="thermal-imaging-container">
      <h3>Thermal Imaging</h3>
      <Line data={chartData} />
    </div>
  );
};

export default ThermalImagingGraph;
