import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Title, Tooltip, Legend);

interface SoundLevelAnalysisGraphProps {
  data: { timestamp: string; soundLevel: number }[];
}

const SoundLevelAnalysisGraph: React.FC<SoundLevelAnalysisGraphProps> = ({ data }) => {
  // Categorizing sound levels into ranges (Low, Medium, High)
  const low = data.filter(entry => entry.soundLevel < 60).length;
  const medium = data.filter(entry => entry.soundLevel >= 60 && entry.soundLevel < 80).length;
  const high = data.filter(entry => entry.soundLevel >= 80).length;

  // Pie chart data
  const chartData = {
    labels: ["Low (<60 dB)", "Medium (60-79 dB)", "High (80+ dB)"],
    datasets: [
      {
        label: "Sound Level Distribution",
        data: [low, medium, high],
        backgroundColor: ["rgba(75, 192, 192, 0.5)", "rgba(153, 102, 255, 0.5)", "rgba(255, 99, 132, 0.5)"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="graph-container">
      <h3>Sound Level Distribution</h3>
      <Pie data={chartData} />
    </div>
  );
};

export default SoundLevelAnalysisGraph;
