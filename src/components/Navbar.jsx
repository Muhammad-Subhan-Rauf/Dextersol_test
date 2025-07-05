// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react'; // ADDED useEffect and useRef
import IbmLogoLink from './IbmLogoLink';
import AiDropdown from './AiDropdown';
import HybridCloudDropdown from './HybridCloudDropdown';
import ProductsDropdown from './ProductsDropdown';
import SupportDropdown from './SupportDropdown';
import MobileNav from './MobileNav';
import './Navbar.css';

import { Search, Chat, Wikis, User, ChevronDown, Menu } from '@carbon/icons-react';

const NavLink = ({ menuKey, activeMenu, handleClick, children }) => {
  const isActive = activeMenu === menuKey;
  return (
    <li>
      <a
        href={`#${menuKey}`}
        className={isActive ? 'active' : ''}
        onClick={(e) => {
          e.preventDefault();
          handleClick(menuKey);
        }}
        aria-expanded={isActive}
      >
        <span>{children}</span> <ChevronDown size={16} />
      </a>
    </li>
  );
};

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // --- ADDED: State and Ref for scroll behavior ---
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  
  // --- ADDED: Effect to handle scroll events ---
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Don't do anything if the mobile menu is open
      if (isMobileMenuOpen) return;

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) { // Hide after scrolling 100px
        setIsVisible(false);
        setActiveMenu(null); // Also close any open dropdowns
      } else {
        setIsVisible(true);
      }
      
      // Update the last scroll position
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobileMenuOpen]); // Re-run effect if mobile menu state changes


  const handleMenuClick = (menuName) => {
    setActiveMenu(prevActiveMenu => (prevActiveMenu === menuName ? null : menuName));
  };

  const handleCloseMenu = (e) => {
    e.preventDefault();
    setActiveMenu(null);
  }

  return (
    <>
      {/* UPDATED: Added conditional class for visibility */}
      <header className={`navbar-container ${isVisible ? '' : 'is-hidden'}`}>
        <div className="navbar">
          <div className="content-container">
            <div className="navbar-left">
              <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(true)} aria-label="Open menu">
                <Menu size={24} />
              </button>
              <IbmLogoLink />
              <nav className="desktop-nav" aria-label="Primary navigation">
                <ul className="navbar-links">
                  <NavLink menuKey="ai" activeMenu={activeMenu} handleClick={handleMenuClick}>AI</NavLink>
                  <NavLink menuKey="hybrid-cloud" activeMenu={activeMenu} handleClick={handleMenuClick}>Hybrid Cloud</NavLink>
                  <NavLink menuKey="products" activeMenu={activeMenu} handleClick={handleMenuClick}>Products</NavLink>
                  <li><a href="#consulting" onClick={handleCloseMenu}>Consulting</a></li>
                  <NavLink menuKey="support" activeMenu={activeMenu} handleClick={handleMenuClick}>Support</NavLink>
                  <li><a href="#think" onClick={handleCloseMenu}>Think</a></li>
                </ul>
              </nav>
            </div>

            <div className="navbar-right">
              <button type="button" aria-label="Search"><Search size={20} /></button>
              <button type="button" aria-label="Contact IBM" className="desktop-only-icon"><Chat size={20} /></button>
              <button type="button" aria-label="Select a language"><Wikis size={20} /></button>
              <button type="button" aria-label="User profile"><User size={20} /></button>
            </div>
          </div>
        </div>
        
        {activeMenu === 'ai' && <AiDropdown />}
        {activeMenu === 'hybrid-cloud' && <HybridCloudDropdown />}
        {activeMenu === 'products' && <ProductsDropdown />}
        {activeMenu === 'support' && <SupportDropdown />}
      </header>
      <MobileNav isOpen={isMobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};

export default Navbar;