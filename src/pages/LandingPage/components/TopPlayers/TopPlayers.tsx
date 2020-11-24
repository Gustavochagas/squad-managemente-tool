import React from 'react';
import './TopPlayers.scss';

const TopPlayers = () => {
  return (
    <div className="top-players">
      <div className="top-players-column">
        <div className="top-players-title">Highest avg age</div>
        <div className="top-players-list">
          <div className="top-players-item">Inter Milan <span>31.9</span></div>
          <div className="top-players-item">Inter Milan <span>31.9</span></div>
          <div className="top-players-item">Inter Milan <span>31.9</span></div>
          <div className="top-players-item">Inter Milan <span>31.9</span></div>
          <div className="top-players-item">Inter Milan <span>31.9</span></div>
        </div>
      </div>
      <div className="top-players-column">
        <div className="top-players-title">Lowest avg age</div>
        <div className="top-players-list">
          <div className="top-players-item">Inter Milan <span>31.9</span></div>
          <div className="top-players-item">Inter Milan <span>31.9</span></div>
          <div className="top-players-item">Inter Milan <span>31.9</span></div>
          <div className="top-players-item">Inter Milan <span>31.9</span></div>
          <div className="top-players-item">Inter Milan <span>31.9</span></div>
        </div>
      </div>
    </div>
  );
}

export default TopPlayers;