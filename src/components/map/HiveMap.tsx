import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Sample hive data (replace with actual data)
const hives = [
  { id: 1, name: "Hive 1", latitude: 51.505, longitude: -0.09, temperature: 28, humidity: 60, weight: 5.2, healthStatus: "Good" },
  { id: 2, name: "Hive 2", latitude: 51.515, longitude: -0.1, temperature: 30, humidity: 55, weight: 5.5, healthStatus: "Average" },
  { id: 3, name: "Hive 3", latitude: 51.525, longitude: -0.11, temperature: 27, humidity: 65, weight: 4.8, healthStatus: "Good" },
];

const App: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedHive, setSelectedHive] = useState<any>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMarkerClick = (hive: any) => {
    setSelectedHive(hive);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Map Section */}
      <div style={{ flex: 1 }}>
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {hives.map((hive) => (
            <Marker
              key={hive.id}
              position={[hive.latitude, hive.longitude]}
              icon={L.icon({
                iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Leaflet_logo.png/800px-Leaflet_logo.png", // Custom marker icon
                iconSize: [25, 41],
              })}
              eventHandlers={{
                click: () => handleMarkerClick(hive),
              }}
            >
              <Popup>{hive.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Parameters Section */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          backgroundColor: "#242424",
          color: "white",
          overflowY: "auto",
        }}
      >
        <h2>{selectedHive ? selectedHive.name : "Select a hive from the map"}</h2>

        <div style={boxStyle}>
          <h3>Temperature</h3>
          <p>{selectedHive ? `${selectedHive.temperature}°C` : "0°C"}</p>
        </div>

        <div style={boxStyle}>
          <h3>Humidity</h3>
          <p>{selectedHive ? `${selectedHive.humidity}%` : "0%"}</p>
        </div>

        <div style={boxStyle}>
          <h3>Weight</h3>
          <p>{selectedHive ? `${selectedHive.weight} kg` : "0 kg"}</p>
        </div>

        <div style={boxStyle}>
          <h3>Health Status</h3>
          <p>{selectedHive ? selectedHive.healthStatus : "No data"}</p>
        </div>

        {/* Additional Parameter Section */}
        <div style={boxStyle}>
          <h3>Location</h3>
          <p>Latitude: {selectedHive ? selectedHive.latitude : "0"}</p>
          <p>Longitude: {selectedHive ? selectedHive.longitude : "0"}</p>
        </div>

        {/* Add More Parameters Here */}
        <div style={boxStyle}>
          <h3>Last Updated</h3>
          <p>{selectedHive ? "Just now" : "No data"}</p>
        </div>
      </div>
    </div>
  );
};

// Custom box style for parameters
const boxStyle: React.CSSProperties = {
  backgroundColor: "#333333",
  margin: "10px 0",
  padding: "15px",
  borderRadius: "8px",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
};

export default App;
