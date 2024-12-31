import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register necessary chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface MotionDetectionGraphProps {
  data: { timestamp: string; activity: number }[];
}

const MotionDetectionGraph: React.FC<MotionDetectionGraphProps> = ({ data }) => {
  // Extract data for the chart
  const timestamps = data.map(entry => entry.timestamp);
  const activities = data.map(entry => entry.activity);

  const chartData = {
    labels: timestamps,  // X-axis labels (timestamps)
    datasets: [
      {
        label: "Motion Activity",  // Label for the dataset
        data: activities,          // Y-axis data (activity levels)
        backgroundColor: "rgba(75, 192, 192, 0.6)",  // Bar color
        borderColor: "rgba(75, 192, 192, 1)",  // Border color for the bars
        borderWidth: 1,  // Border width of bars
      },
    ],
  };

  return (
    <div className="graph-container">
      <h3>Motion Detection</h3>
      <Bar data={chartData} />  {/* Render the Bar Chart */}
    </div>
  );
};

export default MotionDetectionGraph;
