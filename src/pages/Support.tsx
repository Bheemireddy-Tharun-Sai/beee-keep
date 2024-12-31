import React from 'react';
import { HelpCircle, MessageSquare, Book, Facebook, Twitter, Instagram } from 'lucide-react';
import './Support.css';

const Support: React.FC = () => {
  return (
    <div className="support-container">
      <h1 className="support-title">Support</h1>

      {/* Support Cards */}
      <div className="support-grid">
        {/* FAQ Section */}
        <div className="support-card">
          <HelpCircle className="support-icon" />
          <h2 className="support-card-title">FAQ</h2>
          <p className="support-card-description">Find answers to common questions</p>
          <button className="support-btn">View FAQs</button>
        </div>

        {/* Contact Support Section */}
        <div className="support-card">
          <MessageSquare className="support-icon" />
          <h2 className="support-card-title">Contact Support</h2>
          <p className="support-card-description">Get help from our team</p>
          <button className="support-btn">Contact Us</button>
        </div>

        {/* Documentation Section */}
        <div className="support-card">
          <Book className="support-icon" />
          <h2 className="support-card-title">Documentation</h2>
          <p className="support-card-description">Read our guides and tutorials</p>
          <button className="support-btn">View Docs</button>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="social-media">
        <h2 className="section-title">Follow Us</h2>
        <div className="social-icons">
          <a href="#" className="social-icon"><Facebook size={24} /></a>
          <a href="#" className="social-icon"><Twitter size={24} /></a>
          <a href="#" className="social-icon"><Instagram size={24} /></a>
        </div>
      </div>

      {/* Live Chat Support Section */}
      <div className="live-chat">
        <h2 className="section-title">Live Chat Support</h2>
        <p className="support-card-description">Need help? Chat with our support team</p>
        <button className="support-btn">Start Chat</button>
      </div>

      {/* Ticketing System */}
      <div className="ticketing-system">
        <h2 className="section-title">Ticketing System</h2>
        <p className="support-card-description">Submit a support ticket for in-depth assistance</p>
        <button className="support-btn">Submit Ticket</button>
      </div>
    </div>
  );
};

export default Support;
