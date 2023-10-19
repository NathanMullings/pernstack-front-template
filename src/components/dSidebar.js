import React from 'react';
import './dSidebar.css';
import {useSelector } from 'react-redux';

const DSidebar = () => {
  const user = useSelector(state => state.auth.user);

  const bgColor = `#${Math.floor(Math.random()*16777215).toString(16)}`; // Generate a random hex color
  const initial = user.username ? user.username[0].toUpperCase() : "";  // Get the first letter and capitalize it
  
  return (
    <div className="sidebar">
      <div className="profile-section">
      <div className="profile-pic" style={{ backgroundColor: bgColor }}>
          {initial}
        </div>
        {user.username}
      </div>
      <input className="search-input" placeholder="Search files, teams, or people" />
      <div className="menu-section">
        <div className="menu-item">Recents</div>
        <div className="menu-item">Your teams</div>
        <div className="menu-item">Drafts</div>
      </div>
      <div className="upgrade-section">
        Ready to go beyond this free plan?
        <button className="upgrade-button">Upgrade for premium features</button>
      </div>
      <div className="favorites">
        Favorite files
      </div>
      <div className="teams">
        Teams
      </div>
    </div>
  );
}

export default DSidebar;

