// Navbar.js
import React from 'react';

const Navbar = () => {
  const navItems = [
    { label: 'Home', link: '#home', className: 'nav-link' },
    { label: 'About', link: '#about', className: 'nav-link' },
    { label: 'Work', link: '#work', className: 'nav-link' },
    { label: 'Reviews', link: '#reviews', className: 'nav-link' },
    { label: 'Contact', link: '#contact', className: 'nav-link md:hidden' }
  ];

  return (
    // Added w-full so nav items can span the width of their parent (the w-64 div)
    // Added py-2 for some vertical padding for the whole list in mobile view
    <nav className="navbar flex flex-col w-full py-2 md:py-0 md:flex-row md:items-center md:space-x-6">
      {navItems.map(({ label, link, className }, index) => (
        <a
          href={link}
          key={index}
          className={`${className} 
            block text-zinc-200 
            px-4 py-3  /* Padding for mobile links */
            hover:text-white hover:bg-zinc-700 /* Hover effects for mobile */
            md:py-0 md:px-0 md:hover:bg-transparent /* Reset padding and mobile bg hover for desktop */
            transition-colors duration-150 ease-in-out /* Smooth transition */
          `}
          onClick={() => {
            // Optional: Close menu on link click for better UX on mobile
            // You would need to pass down setIsMobileMenuOpen and call setIsMobileMenuOpen(false)
            // For now, this is just a placeholder if you want to implement it.
            // console.log("Link clicked");
          }}
        >
          {label}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;