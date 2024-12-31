import React, { useState, useEffect } from "react";
import {
  Thermometer, Droplet, Scale, Volume2, Activity,
  Battery, Wifi, Sun, Wind, Clock,
  Calendar, TrendingUp, AlertTriangle, BarChart,
  CloudRain, Compass
} from "lucide-react";
import "./RealTimeMonitor.css";

interface SensorData {
  temperature: number;
  humidity: number;
  weight: number;
  soundLevel: number;
  activity: string;
  battery: number;
  signalStrength: number;
  lightExposure: number;
  windSpeed: number;
  hiveHealth: string;
  rainProbability: number;
  direction: string;
  pollination: number;
  alerts: string[];
  dailyStats: {
    avgTemp: number;
    avgHumidity: number;
    totalActivity: number;
  };
}

const RealTimeMonitor: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [sensorData, setSensorData] = useState<SensorData>({
    temperature: 35,
    humidity: 65,
    weight: 85,
    soundLevel: 55,
    activity: "High",
    battery: 80,
    signalStrength: 75,
    lightExposure: 400,
    windSpeed: 12,
    hiveHealth: "Optimal",
    rainProbability: 30,
    direction: "North-East",
    pollination: 78,
    alerts: ["Battery level dropping", "High temperature warning"],
    dailyStats: {
      avgTemp: 34.5,
      avgHumidity: 62,
      totalActivity: 85
    }
  });

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSensorData((prevData) => ({
        ...prevData,
        temperature: parseFloat((prevData.temperature + Math.random() * 2 - 1).toFixed(1)),
        humidity: parseFloat((prevData.humidity + Math.random() * 2 - 1).toFixed(1)),
        weight: parseFloat((prevData.weight + Math.random() * 0.5 - 0.25).toFixed(1)),
        soundLevel: parseFloat((prevData.soundLevel + Math.random() * 5 - 2.5).toFixed(1)),
        activity: Math.random() > 0.5 ? "High" : "Moderate",
        battery: Math.max(10, Math.min(100, prevData.battery - Math.random() * 0.5)),
        signalStrength: Math.max(10, Math.min(100, prevData.signalStrength + Math.random() * 1 - 0.5)),
        lightExposure: parseFloat((prevData.lightExposure + Math.random() * 10 - 5).toFixed(1)),
        windSpeed: parseFloat((prevData.windSpeed + Math.random() * 0.5 - 0.25).toFixed(1)),
        rainProbability: Math.min(100, Math.max(0, prevData.rainProbability + Math.random() * 5 - 2.5)),
        pollination: Math.min(100, Math.max(0, prevData.pollination + Math.random() * 2 - 1)),
        dailyStats: {
          avgTemp: parseFloat((prevData.dailyStats.avgTemp + Math.random() * 0.2 - 0.1).toFixed(1)),
          avgHumidity: parseFloat((prevData.dailyStats.avgHumidity + Math.random() * 0.2 - 0.1).toFixed(1)),
          totalActivity: Math.min(100, Math.max(0, prevData.dailyStats.totalActivity + Math.random() * 2 - 1))
        }
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="real-time-monitor">
      <header className="monitor-header">
        <div className="title-section">
          <h1>Beehive Real-Time Monitor</h1>
          <div className="datetime-display">
            <div className="time">
              <Clock className="icon" />
              <span>{currentTime.toLocaleTimeString()}</span>
            </div>
            <div className="date">
              <Calendar className="icon" />
              <span>{currentTime.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
          </div>
        </div>
        <div className="system-status">
          <div className={`status-indicator ${sensorData.hiveHealth.toLowerCase()}`}>
            System Status: {sensorData.hiveHealth}
          </div>
        </div>
      </header>

      <div className="dashboard-container">
        <div className="main-metrics">
          <div className="monitor-grid">
            <MonitorCard
              icon={<Thermometer />}
              title="Temperature"
              value={`${sensorData.temperature}°C`}
              isWarning={sensorData.temperature > 40}
              trend={"+1.2°C"}
            />
            <MonitorCard
              icon={<Droplet />}
              title="Humidity"
              value={`${sensorData.humidity}%`}
              isWarning={sensorData.humidity > 80}
              trend={"-0.5%"}
            />
            <MonitorCard
              icon={<Scale />}
              title="Weight"
              value={`${sensorData.weight} kg`}
              trend={"+0.2kg"}
            />
            <MonitorCard
              icon={<Volume2 />}
              title="Sound Level"
              value={`${sensorData.soundLevel} dB`}
              isWarning={sensorData.soundLevel > 80}
            />
            <MonitorCard
              icon={<Activity />}
              title="Bee Activity"
              value={sensorData.activity}
            />
            <MonitorCard
              icon={<Battery />}
              title="Battery Level"
              value={`${sensorData.battery.toFixed(1)}%`}
              isCritical={sensorData.battery < 20}
            />
          </div>
        </div>

        <div className="secondary-metrics">
          <div className="monitor-grid">
            <MonitorCard
              icon={<Wifi />}
              title="Signal Strength"
              value={`${sensorData.signalStrength.toFixed(1)}%`}
              isCritical={sensorData.signalStrength < 30}
            />
            <MonitorCard
              icon={<Sun />}
              title="Light Exposure"
              value={`${sensorData.lightExposure} lux`}
            />
            <MonitorCard
              icon={<Wind />}
              title="Wind Speed"
              value={`${sensorData.windSpeed} km/h`}
            />
            <MonitorCard
              icon={<CloudRain />}
              title="Rain Probability"
              value={`${sensorData.rainProbability.toFixed(1)}%`}
              isWarning={sensorData.rainProbability > 60}
            />
            <MonitorCard
              icon={<Compass />}
              title="Wind Direction"
              value={sensorData.direction}
            />
            <MonitorCard
              icon={<TrendingUp />}
              title="Pollination Rate"
              value={`${sensorData.pollination.toFixed(1)}%`}
            />
          </div>
        </div>

        <div className="bottom-section">
          <div className="daily-stats">
            <h2>Daily Statistics</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <BarChart className="icon" />
                <span>Avg. Temperature</span>
                <strong>{sensorData.dailyStats.avgTemp}°C</strong>
              </div>
              <div className="stat-item">
                <BarChart className="icon" />
                <span>Avg. Humidity</span>
                <strong>{sensorData.dailyStats.avgHumidity}%</strong>
              </div>
              <div className="stat-item">
                <BarChart className="icon" />
                <span>Activity Score</span>
                <strong>{sensorData.dailyStats.totalActivity}%</strong>
              </div>
            </div>
          </div>

          <div className="alerts-section">
            <h2>Active Alerts</h2>
            <div className="alerts-list">
              {sensorData.alerts.map((alert, index) => (
                <div key={index} className="alert-item">
                  <AlertTriangle className="icon" />
                  <span>{alert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface MonitorCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  isWarning?: boolean;
  isCritical?: boolean;
  trend?: string;
}

const MonitorCard: React.FC<MonitorCardProps> = ({ 
  icon, 
  title, 
  value, 
  isWarning, 
  isCritical,
  trend 
}) => {
  let cardClass = "monitor-card";
  if (isCritical) cardClass += " critical";
  else if (isWarning) cardClass += " warning";

  return (
    <div className={cardClass}>
      <div className="icon-container">{icon}</div>
      <h2>{title}</h2>
      <p className="value">{value}</p>
      {trend && <span className="trend">{trend}</span>}
    </div>
  );
};

export default RealTimeMonitor;