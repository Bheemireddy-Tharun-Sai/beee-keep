import React from "react";

const metrics = [
  { label: "Temperature", value: "35°C", change: "+2°C" },
  { label: "Humidity", value: "65%", change: "-5%" },
  { label: "Weight", value: "85kg", change: "+0.5kg" },
  { label: "Sound Level", value: "65dB", change: "Normal" },
  { label: "Bee Activity", value: "High", change: "+15%" },
];

const HiveMetrics: React.FC = () => {
  return (
    <div>
      {metrics.map((metric) => (
        <div key={metric.label}>
          <h3>{metric.label}</h3>
          <p>{metric.value}</p>
          <small>{metric.change}</small>
        </div>
      ))}
    </div>
  );
};

export default HiveMetrics;
