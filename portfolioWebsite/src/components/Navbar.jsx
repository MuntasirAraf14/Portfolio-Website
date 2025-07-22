// Navbar.js - FINAL VERSION

import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ isNavOpen, activeSection, onLinkClick }) => {
  const navRef = useRef(null);
  const activeBoxRef = useRef(null);

  const navItems = [
    { id: 'home', label: 'Home', link: '#home' },
    { id: 'about', label: 'About', link: '#about' },
    { id: 'skills', label: 'Skills', link: '#skills' },
    { id: 'work', label: 'Work', link: '#work' },
    
    { id: 'contact', label: 'Contact', link: '#contact', className: 'md:hidden' }
  ];

  // This effect runs when the active section changes and moves the box.
  useEffect(() => {
    const activeLinkEl = navRef.current?.querySelector('a.active');
    const activeBoxEl = activeBoxRef.current;

    if (activeLinkEl && activeBoxEl) {
      activeBoxEl.style.top = `${activeLinkEl.offsetTop}px`;
      activeBoxEl.style.left = `${activeLinkEl.offsetLeft}px`;
      activeBoxEl.style.width = `${activeLinkEl.offsetWidth}px`;
      activeBoxEl.style.height = `${activeLinkEl.offsetHeight}px`;
      activeBoxEl.style.opacity = '1';
    } else if (activeBoxEl) {
      activeBoxEl.style.opacity = '0';
    }
  }, [activeSection]);

  return (
    <nav ref={navRef} className={`navbar ${isNavOpen ? 'active' : ''}`}>
      {/* This is the moving white highlight box. */}
      <div ref={activeBoxRef} className="active-box"></div>

      {navItems.map(({ id, label, link, className = '' }) => (
        <a
          href={link}
          key={id}
          // This correctly adds the 'active' class to the link itself.
          className={`nav-link ${activeSection === id ? 'active' : ''} ${className}`}
          onClick={onLinkClick}
        >
          {label}
        </a>
      ))}
    </nav>
  );
};

Navbar.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
  activeSection: PropTypes.string.isRequired,
  onLinkClick: PropTypes.func.isRequired,
};

export default Navbar;