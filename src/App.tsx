import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import RealTimeMonitor from "./components/RealTimeMonitor/RealTimeMonitor";
import Dashboard from "./pages/Dashboard";
import Parameters from "./pages/Parameters";
import Analytics from "./pages/Analytics";
import Weather from "./pages/Weather";
import MapView from "./pages/MapView";
import Support from "./pages/Support";
import Settings from "./pages/Settings";
import GraphSection from "./components/GraphsSection/GraphSection";
import "./App.css";
import SignoutPage from "./components/SignoutPage/SignoutPage";
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';




const App: React.FC = () => {
  return (
    <Router>
      <div className="app-layout">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/parameters" element={<Parameters />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/map" element={<MapView />} />
            <Route path="/monitor" element={<RealTimeMonitor />} />
            <Route path="/support" element={<Support />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/graphs" element={<GraphSection />} />
            <Route path="/SignoutPage" element={<SignoutPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
