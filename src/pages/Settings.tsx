import React, { useState } from 'react';
import { User, Lock, Camera, Bell, Cloud, Settings as SettingsIcon, Monitor, Volume2 } from 'lucide-react';
import './Settings.css';

const Settings: React.FC = () => {
  const [isNotificationsEnabled, setNotificationsEnabled] = useState(true);
  const [isCloudSyncEnabled, setCloudSyncEnabled] = useState(false);

  return (
    <div className="settings-container">
      <h1 className="settings-title">Settings</h1>

      {/* Account Settings */}
      <div className="settings-section">
        <h2 className="settings-section-title">Account Settings</h2>
        <div className="settings-card">
          <User className="settings-icon" />
          <h3 className="settings-card-title">Username/Email</h3>
          <p className="settings-card-description">Update your username or email</p>
          <button className="settings-btn">Change Email</button>
        </div>
        <div className="settings-card">
          <Lock className="settings-icon" />
          <h3 className="settings-card-title">Password</h3>
          <p className="settings-card-description">Change your account password</p>
          <button className="settings-btn">Change Password</button>
        </div>
        <div className="settings-card">
          <Camera className="settings-icon" />
          <h3 className="settings-card-title">Profile Picture</h3>
          <p className="settings-card-description">Upload a new profile picture</p>
          <button className="settings-btn">Upload Picture</button>
        </div>
      </div>

      {/* Notification Preferences */}
      <div className="settings-section">
        <h2 className="settings-section-title">Notification Preferences</h2>
        <div className="settings-card">
          <Bell className="settings-icon" />
          <h3 className="settings-card-title">Email Notifications</h3>
          <p className="settings-card-description">Enable or disable email alerts</p>
          <button className="settings-btn" onClick={() => setNotificationsEnabled(!isNotificationsEnabled)}>
            {isNotificationsEnabled ? 'Disable Notifications' : 'Enable Notifications'}
          </button>
        </div>
        <div className="settings-card">
          <Volume2 className="settings-icon" />
          <h3 className="settings-card-title">Sound Alerts</h3>
          <p className="settings-card-description">Enable sound notifications for important events</p>
          <button className="settings-btn">Enable Sound Alerts</button>
        </div>
      </div>

      {/* Cloud Sync Settings */}
      <div className="settings-section">
        <h2 className="settings-section-title">Cloud Sync</h2>
        <div className="settings-card">
          <Cloud className="settings-icon" />
          <h3 className="settings-card-title">Sync Settings</h3>
          <p className="settings-card-description">Enable cloud sync to back up your data</p>
          <button className="settings-btn" onClick={() => setCloudSyncEnabled(!isCloudSyncEnabled)}>
            {isCloudSyncEnabled ? 'Disable Cloud Sync' : 'Enable Cloud Sync'}
          </button>
        </div>
      </div>

      {/* System Preferences */}
      <div className="settings-section">
        <h2 className="settings-section-title">System Preferences</h2>
        <div className="settings-card">
          <SettingsIcon className="settings-icon" />
          <h3 className="settings-card-title">General Settings</h3>
          <p className="settings-card-description">Set language, timezone, and more</p>
          <button className="settings-btn">Configure Preferences</button>
        </div>
        <div className="settings-card">
          <Monitor className="settings-icon" />
          <h3 className="settings-card-title">Display Settings</h3>
          <p className="settings-card-description">Adjust display settings for optimal viewing</p>
          <button className="settings-btn">Adjust Display</button>
        </div>
      </div>

      {/* Advanced Settings */}
      <div className="settings-section">
        <h2 className="settings-section-title">Advanced Settings</h2>
        <div className="settings-card">
          <SettingsIcon className="settings-icon" />
          <h3 className="settings-card-title">API Integrations</h3>
          <p className="settings-card-description">Enable API integrations with third-party services</p>
          <button className="settings-btn">Configure API</button>
        </div>
        <div className="settings-card">
          <Lock className="settings-icon" />
          <h3 className="settings-card-title">Security Settings</h3>
          <p className="settings-card-description">Enable multi-factor authentication and security features</p>
          <button className="settings-btn">Configure Security</button>
        </div>
      </div>

      {/* User Preferences */}
      <div className="settings-section">
        <h2 className="settings-section-title">User Preferences</h2>
        <div className="settings-card">
          <User className="settings-icon" />
          <h3 className="settings-card-title">Display Name</h3>
          <p className="settings-card-description">Set or change your display name</p>
          <button className="settings-btn">Change Display Name</button>
        </div>
        <div className="settings-card">
          <Camera className="settings-icon" />
          <h3 className="settings-card-title">Profile Visibility</h3>
          <p className="settings-card-description">Adjust who can view your profile information</p>
          <button className="settings-btn">Manage Visibility</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
