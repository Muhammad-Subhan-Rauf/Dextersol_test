// src/components/HybridCloudDropdown.jsx
import React from 'react';
import { ArrowRight } from '@carbon/icons-react';
import './Dropdown.css';

const HybridCloudDropdown = () => {
  return (
    <div className="mega-menu">
      {/* ADDED: Wrapper to constrain dropdown content and center it */}
      <div className="content-container mega-menu-container">
        <div className="mega-menu-grid">
          <a href="#overview" className="menu-item">
            <span>Overview</span> <ArrowRight size={20} />
          </a>
          <a href="#consulting" className="menu-item">
            <span>Consulting</span> <ArrowRight size={20} />
          </a>
          <a href="#cloud-platform" className="menu-item">
            <span>Cloud platform</span> <ArrowRight size={20} />
          </a>
          <a href="#it-infra" className="menu-item">
            <span>IT infrastructure</span> <ArrowRight size={20} />
          </a>
          <a href="#quantum" className="menu-item">
            <span>Quantum computing</span> <ArrowRight size={20} />
          </a>
          <a href="#research" className="menu-item">
            <span>Research</span> <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HybridCloudDropdown;