// src/components/ProductsDropdown.jsx
import React, { useState } from 'react';
import { ArrowRight } from '@carbon/icons-react';
import './Dropdown.css';

// --- Data Structure for the entire products menu ---
const productsData = {
  'Featured': [
    { title: "Concert", description: "Software to manage applications, mitigate risks and enhance resilience" },
    { title: "IBM webMethods Hybrid Integration", description: "AI powered automation software to unify integration workflows" },
    { title: "Storage Defender", description: "Data resiliency software for threat detection and data recovery" },
    { title: "Environmental Intelligence", description: "SaaS for predicting and responding to weather and climate events" },
    { title: "Instana", description: "Software for application performance monitoring and automation" },
    { title: "Turbonomic", description: "Software to manage and optimize IT resource usage" },
    { title: "FlashSystem", description: "Primary storage for performance and latency sensitive workloads" },
    { title: "MaaS360", description: "Unified endpoint management software for many device types" },
    { title: "Verify", description: "Identity, authentication, and access control software" },
    { title: "HashiCorp", description: "Manage cloud infrastructure and security" },
    { title: "Maximo", description: "Software for asset management and related workflows" },
    { title: "watsonx", description: "AI and data platform" },
    { title: "IBM Cloud", description: "On-demand cloud computing platform and APIs" },
    { title: "Planning Analytics", description: "Software to automate financial and operational planning" },
    { title: "watsonx Assistant", description: "Virtual agents customizable to any domain" },
    { title: "IBM Z", description: "Flagship mainframe with on-chip AI and quantum-safe cryptography" },
    { title: "Robotic Process Automation (RPA)", description: "Software to automate workflows and business processes" },
    { title: "watsonx Orchestrate", description: "Personal-assistant software that automates repetitive tasks" },
  ],
  // The rest of the data is kept for the left-side navigation list
  'AI & machine learning': [],
  'Analytics': [],
  'Asset lifecycle management': [],
  'Business automation': [],
  'Containers': [],
  'Databases': [],
  'DevOps & Engineering': [],
  'IT automation': [],
  'Middleware': [],
  'Network': [],
  'Operating systems': [],
  'Quantum': [],
  'Security & identity': [],
  'Servers': [],
  'Storage': [],
};

const ProductItem = ({ title, description }) => (
  <div className="product-item">
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
);

const ProductsDropdown = () => {
  // This state now ONLY controls the hover style on the left navigation.
  const [activeCategory, setActiveCategory] = useState('Featured');

  return (
    <div className="mega-menu products-menu">
      <div className="content-container mega-menu-container">
        <nav className="products-nav">
          <ul>
            {Object.keys(productsData).map((category) => (
              <li
                key={category}
                className={activeCategory === category ? 'active' : ''}
                // We keep this to update the visual hover state of the list item
                onMouseEnter={() => setActiveCategory(category)}
              >
                <a href={`#${category.toLowerCase().replace(/\s|&/g, '-')}`}>{category}</a>
              </li>
            ))}
          </ul>
          <a href="/products" className="view-all-link">
            <span>View all products</span>
            <ArrowRight size={20} />
          </a>
        </nav>
        <div className="products-content">
          {/* UPDATED: Hardcoded the heading to always be "Featured" */}
          <h3>Featured</h3>
          <div className="products-grid">
            {/* UPDATED: Always map over the 'Featured' products data, ignoring the hover state */}
            {productsData['Featured'].map((product) => (
              <ProductItem key={product.title} title={product.title} description={product.description} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDropdown;