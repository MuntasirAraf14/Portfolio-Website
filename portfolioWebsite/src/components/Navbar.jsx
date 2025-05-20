import React from 'react';

const Navbar = () => {
  const navItems = [
    { label: 'Home', link: '#home', className: 'nav-link' },
    { label: 'About', link: '#about', className: 'nav-link' },
    { label: 'Work', link: '#work', className: 'nav-link' },
    { label: 'Reviews', link: '#reviews', className: 'nav-link' },
    // Contact is hidden on medium+ screens as there's a separate button
    { label: 'Contact', link: '#contact', className: 'nav-link md:hidden' }
  ];

  return (
    <nav className="navbar flex flex-col md:flex-row md:items-center md:space-x-6">
      {navItems.map(({ label, link, className }, index) => (
        <a
          href={link}
          key={index}
          className={`${className} block text-zinc-200 hover:text-white py-2 md:py-0`}
        >
          {label}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;