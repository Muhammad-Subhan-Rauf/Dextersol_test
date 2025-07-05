// src/components/SupportDropdown.jsx
import React from 'react';
import { ArrowRight } from '@carbon/icons-react';
import './Dropdown.css'; // Using the shared CSS file

const SupportSection = ({ title, href, children }) => (
  <div className="support-section">
    <a href={href} className="menu-item column-title">
      <span>{title}</span> <ArrowRight size={20} />
    </a>
    {children && <ul>{children}</ul>}
  </div>
);

const SupportDropdown = () => {
  return (
    <div className="mega-menu">
      {/* ADDED: Wrapper to constrain dropdown content and center it */}
      <div className="content-container mega-menu-container">
        <div className="support-container">
          {/* Column 1 */}
          <div className="support-column">
            <SupportSection title="What's New" href="#whats-new" />
            <SupportSection title="Community" href="#community" />
            <SupportSection title="Developer" href="#developer">
              <li><a href="#dev-code">Call for Code</a></li>
              <li><a href="#dev-genai">Generative AI</a></li>
              <li><a href="#dev-hack">Hackathons</a></li>
              <li><a href="#dev-oss">Open Source @ IBM</a></li>
              <li><a href="#dev-tech">Technologies</a></li>
            </SupportSection>
          </div>

          {/* Column 2 */}
          <div className="support-column">
            <SupportSection title="Documentation" href="#documentation">
              <li><a href="#doc-all">All product documentation</a></li>
              <li><a href="#doc-cloud">IBM Cloud documentation</a></li>
              <li><a href="#doc-redbooks">IBM Redbooks</a></li>
            </SupportSection>
            <SupportSection title="IBM Cloud platform support" href="#cloud-support" />
            <SupportSection title="Implementation" href="#implementation">
              <li><a href="#impl-labs">Expert Labs</a></li>
            </SupportSection>
          </div>

          {/* Column 3 */}
          <div className="support-column">
            <SupportSection title="Support" href="#support-main">
              <li><a href="#support-downloads">Download fixes, updates & drivers</a></li>
              <li><a href="#support-passport">Download licensed software - Passport Advantage</a></li>
              <li><a href="#support-licensing">IBM Software Licensing</a></li>
              <li><a href="#support-case">Open a case</a></li>
              <li><a href="#support-view-more">View more</a></li>
              <li><a href="#support-plans">View support plans</a></li>
              <li><a href="#support-cases">View your cases</a></li>
            </SupportSection>
          </div>
          
          {/* Column 4 */}
          <div className="support-column">
            <SupportSection title="Technology Lifecycle Services" href="#tls">
              <li><a href="#tls-networking">Enterprise networking and security</a></li>
              <li><a href="#tls-storage">Servers and storage</a></li>
              <li><a href="#tls-software">Software</a></li>
            </SupportSection>
            <SupportSection title="Training" href="#training">
              <li><a href="#training-courses">Courses</a></li>
              <li><a href="#training-subs">Digital learning subscriptions</a></li>
              <li><a href="#training-paths">Learning paths & collections</a></li>
              <li><a href="#training-certs">Professional certifications</a></li>
            </SupportSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportDropdown;