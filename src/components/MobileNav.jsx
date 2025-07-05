// src/components/MobileNav.jsx
import React, { useState } from 'react';
import IbmLogoLink from './IbmLogoLink';
import {
  Close,
  Search,
  Wikis,
  User,
  Chat,
  ArrowRight,
  ArrowLeft,
  ChevronRight, // CORRECT ICON for mobile nav links
} from '@carbon/icons-react';

const mobileNavData = {
  ai: {
    title: 'AI',
    links: ['Overview', 'watsonx', 'Agents', 'Granite models', 'Consulting', 'Research', 'Ethics and governance'],
  },
  'hybrid-cloud': {
    title: 'Hybrid Cloud',
    links: ['Overview', 'Consulting', 'Cloud platform', 'IT infrastructure', 'Quantum computing', 'Research'],
  },
  products: {
    title: 'Products',
    links: ['Featured', 'AI & machine learning', 'Analytics', 'Asset lifecycle management', 'Business automation', 'Containers', 'Databases', 'DevOps & Engineering', 'IT automation', 'Middleware', 'Network', 'Operating systems', 'Quantum', 'Security & identity', 'Servers', 'Storage'],
    footer: { text: 'View all products', href: '/products' },
  },
  support: {
    title: 'Support',
    links: [
      { title: "What's New", hasSubItems: false },
      { title: 'Community', hasSubItems: false },
      { title: 'Developer', subItems: ['Call for Code', 'Generative AI', 'Hackathons', 'Open Source @ IBM', 'Technologies'] },
      { title: 'Documentation', subItems: ['All product documentation', 'IBM Cloud documentation', 'IBM Redbooks'] },
      { title: 'IBM Cloud platform support', hasSubItems: false },
      { title: 'Implementation', subItems: ['Expert Labs'] },
      { title: 'Support', subItems: ['Download fixes, updates & drivers', 'Download licensed software - Passport Advantage', 'IBM Software Licensing', 'Open a case', 'View more', 'View support plans', 'View your cases'] },
      { title: 'Technology Lifecycle Services', subItems: ['Enterprise networking and security', 'Servers and storage', 'Software'] },
      { title: 'Training', subItems: ['Courses', 'Digital learning subscriptions', 'Learning paths & collections', 'Professional certifications'] },
    ],
  },
};

const MobileNav = ({ isOpen, onClose }) => {
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const mainLinks = [
    { key: 'ai', title: 'AI' },
    { key: 'hybrid-cloud', title: 'Hybrid Cloud' },
    { key: 'products', title: 'Products' },
    { key: null, title: 'Consulting' },
    { key: 'support', title: 'Support' },
    { key: null, title: 'Think' },
  ];

  return (
    <div className={`mobile-nav-overlay ${isOpen ? 'is-open' : ''}`}>
      <div className="mobile-nav-header">
        <button onClick={onClose} aria-label="Close menu"><Close size={24} /></button>
        <IbmLogoLink />
        <div className="navbar-right">
          <button type="button" aria-label="Search"><Search size={20} /></button>
          <button type="button" aria-label="Select a language"><Wikis size={20} /></button>
          <button type="button" aria-label="User profile"><User size={20} /></button>
        </div>
      </div>

      <div className="mobile-nav-content-container">
        {/* Main Menu Panel */}
        <div className={`mobile-nav-panel main-panel ${activeSubMenu ? 'is-hidden' : ''}`}>
          <ul>
            {mainLinks.map(link => (
              <li key={link.title}>
                <a href={`#${link.key}`} onClick={link.key ? (e) => { e.preventDefault(); setActiveSubMenu(link.key); } : null}>
                  <span>{link.title}</span>
                  {link.key && <ChevronRight size={20} />}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Sub-Menu Panel */}
        <div className={`mobile-nav-panel sub-panel ${activeSubMenu ? 'is-active' : ''}`}>
          {activeSubMenu && (
            <>
              <a className="mobile-nav-back-button" href="#back" onClick={(e) => { e.preventDefault(); setActiveSubMenu(null); }}>
                <ArrowLeft size={20} />
                <span>Back</span>
              </a>
              <ul>
                {mobileNavData[activeSubMenu].links.map(item => {
                  if (typeof item === 'object') {
                    return (
                      <React.Fragment key={item.title}>
                        <li className="sub-menu-heading">
                          <a href="#">
                            <span>{item.title}</span>
                            {!item.hasSubItems && <ChevronRight size={20} />}
                          </a>
                        </li>
                        {item.subItems && item.subItems.map(sub => <li key={sub}><a href="#">{sub}</a></li>)}
                      </React.Fragment>
                    );
                  }
                  return <li key={item}><a href="#"><span>{item}</span><ChevronRight size={20} /></a></li>;
                })}
              </ul>
              {mobileNavData[activeSubMenu].footer && (
                <a href={mobileNavData[activeSubMenu].footer.href} className="mobile-nav-footer-link">
                   <span>{mobileNavData[activeSubMenu].footer.text}</span>
                   <ArrowRight size={20} />
                </a>
              )}
            </>
          )}
        </div>
      </div>
      <button className="fab-chat-button" aria-label="Start chat"><Chat size={24} /></button>
    </div>
  );
};

export default MobileNav;