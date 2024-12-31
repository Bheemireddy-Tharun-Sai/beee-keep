import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Sliders,
  BarChart2,
  Cloud,
  Map,
  HelpCircle,
  LineChart,
  Settings,
  LogIn,
  Radio,
  Activity
} from "lucide-react";
import "./Sidebar.css";

const navItems = [
  {
    category: "Main",
    items: [
      { icon: <LayoutDashboard className="w-5 h-5" />, label: "Dashboard", path: "/" },
      { icon: <Sliders className="w-5 h-5" />, label: "Parameters", path: "/parameters" },
      { icon: <BarChart2 className="w-5 h-5" />, label: "Analytics & Reports", path: "/analytics" },
    ],
  },
  {
    category: "Monitoring",
    items: [
      { icon: <Cloud className="w-5 h-5" />, label: "Weather", path: "/weather" },
      { icon: <Map className="w-5 h-5" />, label: "Map Integration", path: "/map" },
      { icon: <Activity className="w-5 h-5" />, label: "Real-Time Monitor", path: "/monitor" },
    ],
  },
  {
    category: "Analysis",
    items: [
      { icon: <LineChart className="w-5 h-5" />, label: "Graphs", path: "/graphs" },
    ],
  },
  {
    category: "System",
    items: [
      { icon: <HelpCircle className="w-5 h-5" />, label: "Support", path: "/support" },
      { icon: <Settings className="w-5 h-5" />, label: "Settings", path: "/settings" },
      { icon: <LogIn className="w-5 h-5" />, label: "SignoutPage", path: "/SignoutPage" },
    ],
  },
];

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="logo">
        <Radio className="logo-icon" />
        <span className="logo-text">BeeKeeper Pro</span>
      </div>
      <nav>
        {navItems.map((group) => (
          <div key={group.category} className="nav-group">
            <div className="nav-category">{group.category}</div>
            {group.items.map((item) => (
              <div
                key={item.label}
                onClick={() => navigate(item.path)}
                className={`nav-item ${
                  location.pathname === item.path ? "active" : ""
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        ))}
      </nav>
      <div className="profile">
        <div className="profile-card">
          <div className="profile-avatar"></div>
          <div className="profile-info">
            <div className="profile-name">John Doe</div>
            <div className="profile-type">Pro Account</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
