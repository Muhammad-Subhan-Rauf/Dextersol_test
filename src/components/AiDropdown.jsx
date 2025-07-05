// src/components/AiDropdown.jsx
import React from 'react';
import { ArrowRight } from '@carbon/icons-react';
import './Dropdown.css'; // We'll use a shared CSS file for dropdowns

const AiDropdown = () => {
  return (
    <div className="mega-menu">
      {/* ADDED: Wrapper to constrain dropdown content */}
      <div className="content-container mega-menu-container">
        <div className="mega-menu-grid">
          <a href="#overview" className="menu-item">
            <span>Overview</span> <ArrowRight size={20} />
          </a>
          <a href="#watsonx" className="menu-item">
            <span>watsonx</span> <ArrowRight size={20} />
          </a>
          <a href="#agents" className="menu-item">
            <span>Agents</span> <ArrowRight size={20} />
          </a>
          <a href="#granite-models" className="menu-item">
            <span>Granite models</span> <ArrowRight size={20} />
          </a>
          <a href="#consulting" className="menu-item">
            <span>Consulting</span> <ArrowRight size={20} />
          </a>
          <a href="#research" className="menu-item">
            <span>Research</span> <ArrowRight size={20} />
          </a>
          <a href="#ethics" className="menu-item">
            <span>Ethics and governance</span> <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AiDropdown;