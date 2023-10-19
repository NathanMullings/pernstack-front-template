import React from 'react';
import DSidebar from '../components/dSidebar';
import './DashboardPage.css';  // assuming you have a CSS module

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <DSidebar />
      <div className="dashboard-content">
        <h1>Dashboard Page</h1>
        <p>Welcome to your dashboard. Here you can manage your projects and view statistics.</p>
      </div>
    </div>
  );
};

export default DashboardPage;
