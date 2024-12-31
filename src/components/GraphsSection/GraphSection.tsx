import React from 'react';
import TemperatureAndHumidityGraph from '../Graphs/TemperatureAndHumidityGraph';
import VentilationEfficiencyGraph from '../Graphs/VentilationEfficiencyGraph';
import HiveWeightTrendGraph from '../Graphs/HiveWeightTrendGraph';
import SwarmingControlActivityGraph from '../Graphs/SwarmingControlActivityGraph';
import HivePlacementMovementGraph from '../Graphs/HivePlacementMovementGraph';
import MotionDetectionGraph from '../Graphs/MotionDetectionGraph';
import SoundLevelAnalysisGraph from '../Graphs/SoundLevelAnalysisGraph';
import LightExposureGraph from '../Graphs/LightExposureGraph';
import ThermalImagingGraph from '../Graphs/ThermalImagingGraph';
import EnvironmentalComparisonGraph from '../Graphs/EnvironmentalComparisonGraph';
import './GraphSection.css';

const GraphSection: React.FC = () => {
  const data = {
    temperatureAndHumidity: [
      { timestamp: "2024-12-29T10:00:00Z", temperature: 20, humidity: 60 },
    ],
    ventilationEfficiency: [
      { timestamp: "2024-12-29T10:00:00Z", efficiency: 85 }
    ],
    hiveWeight: [
      { timestamp: "2024-12-29T10:00:00Z", weight: 50 }
    ],
    swarmingControl: [
      { timestamp: "2024-12-29T10:00:00Z", interventions: 2 }
    ],
    hivePlacement: [
      { timestamp: "2024-12-29T10:00:00Z", movements: 1 }
    ],
    motionDetection: [
      { timestamp: "2024-12-29T10:00:00Z", activity: 5 }
    ],
    soundLevel: [
      { timestamp: "2024-12-29T10:00:00Z", soundLevel: 70 }
    ],
    lightExposure: [
      { timestamp: "2024-12-29T10:00:00Z", exposure: 500 }
    ],
    thermalImaging: [
      { timestamp: "2024-12-29T10:00:00Z", temperature: 25 }
    ],
    environmental: [
      { timestamp: "2024-12-29T10:00:00Z", externalTemp: 10, internalTemp: 22 }
    ]
  };

  return (
    <div className="graphs-container">
      <div className="graphs-grid">
        <div className="graph-item">
          <TemperatureAndHumidityGraph data={data.temperatureAndHumidity} />
        </div>
        <div className="graph-item">
          <VentilationEfficiencyGraph data={data.ventilationEfficiency} />
        </div>
        <div className="graph-item">
          <HiveWeightTrendGraph data={data.hiveWeight} />
        </div>
        <div className="graph-item">
          <SwarmingControlActivityGraph data={data.swarmingControl} />
        </div>
        <div className="graph-item">
          <HivePlacementMovementGraph data={data.hivePlacement} />
        </div>
        <div className="graph-item">
          <MotionDetectionGraph data={data.motionDetection} />
        </div>
        <div className="graph-item">
          <SoundLevelAnalysisGraph data={data.soundLevel} />
        </div>
        <div className="graph-item">
          <LightExposureGraph data={data.lightExposure} />
        </div>
        <div className="graph-item">
          <ThermalImagingGraph data={data.thermalImaging} />
        </div>
      </div>
      <div className="single-graph">
        <EnvironmentalComparisonGraph data={data.environmental} />
      </div>
    </div>
  );
};

export default GraphSection;