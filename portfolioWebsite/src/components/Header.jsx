import React, { useState } from 'react'; // Import useState
import Navbar from './Navbar';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

    const handleMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle the state
        console.log('Menu toggled!', !isMobileMenuOpen);
    };

    return (
        <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
            <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6">

                {/* Logo */}
                <h1>
                    <a href="/" className="logo">
                        <img src="/images/logo.svg" width={40} height={40} alt="Site Logo" />
                    </a>
                </h1>

                {/* Navigation Area */}
                <div className="flex items-center"> {/* Wrapper for nav and contact on desktop */}
                    {/* Mobile Menu Toggle Button */}
                    <div className='md:hidden'>
                        <button
                            className="menu-btn p-2 rounded hover:bg-zinc-700"
                            onClick={handleMenuToggle}
                            aria-label="Toggle menu"
                            aria-expanded={isMobileMenuOpen} // For accessibility
                        >
                            <span className="material-symbols-rounded">menu</span>
                        </button>
                    </div>

                    {/* Navbar for Desktop and Toggled Mobile */}
                    {/*
            On mobile (sm screens):
            - Hidden by default ('hidden')
            - If isMobileMenuOpen is true, it becomes 'block' (or 'flex', etc.)
            On desktop (md screens and up):
            - Always 'md:flex' (or 'md:block') making it visible
          */}
                    <div
                        className={`
              absolute top-full left-0 w-full bg-zinc-800 shadow-lg md:shadow-none md:bg-transparent md:static md:w-auto 
              ${isMobileMenuOpen ? 'block' : 'hidden'} md:flex md:items-center
            `}
                    >
                        <Navbar />
                    </div>
                </div>


                {/* Contact Me Link - visible on desktop, part of mobile nav otherwise */}
                <a href="#contact" className="hidden md:block ml-6 text-white hover:text-zinc-300"> {/* Hide on mobile, show on desktop */}
                    Contact Me
                </a>
            </div>
        </header>
    );
};

export default Header;