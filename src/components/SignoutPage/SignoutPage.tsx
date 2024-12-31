import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./SignoutPage.css";

const Logout: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session or token
    localStorage.removeItem('user'); // Clear user data
    // Redirect to login page
    navigate('/login');
  };

  return (
    <div className="logout-page">
      <div className="logout-card">
        <img
          src="https://via.placeholder.com/150" // Replace with actual user profile picture URL
          alt="Profile"
          className="logout-profile-pic"
        />
        <h2 className="logout-welcome">See You Soon, John Doe!</h2>
        <p className="logout-message">
          Your account has been secured. You can log in again anytime.
        </p>
        <button
          className="logout-button"
          onClick={handleLogout}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Logout;
