// Header.js
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';


const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const headerRef = useRef(null);

    const pageSections = [
        { id: 'home', link: '#home' },
        { id: 'about', link: '#about' },
        { id: 'work', link: '#work' },
        { id: 'reviews', link: '#reviews' },
        { id: 'contact', link: '#contact' },
    ];

    const handleMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        const getHeaderHeight = () => {
            return headerRef.current ? headerRef.current.offsetHeight : 80;
        };

        const onScroll = () => {
            const scrollPosition = window.scrollY + getHeaderHeight() + 20;
            let currentSectionId = '';

            for (const sectionInfo of pageSections) {
                const element = document.getElementById(sectionInfo.id);
                if (element) {
                    const elementTop = element.offsetTop;
                    const elementBottom = elementTop + element.offsetHeight;
                    if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
                        currentSectionId = sectionInfo.id;
                        break;
                    }
                }
            }
            if (!currentSectionId && window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
                 const lastSection = pageSections[pageSections.length -1];
                 if(lastSection) currentSectionId = lastSection.id;
            }
            if (!currentSectionId && scrollPosition < (document.getElementById(pageSections[0]?.id)?.offsetTop || 0) + getHeaderHeight()) {
                currentSectionId = pageSections[0]?.id || '';
            }
            setActiveSection(currentSectionId);
        };

        const hash = window.location.hash.substring(1);
        if (hash && pageSections.find(s => s.id === hash)) {
            setActiveSection(hash);
        } else {
            onScroll();
        }

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [pageSections]);

    return (
        <header ref={headerRef} className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
            <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6">
                {/* Logo */}
                <h1>
                    <a href="#home" onClick={closeMobileMenu} className="logo">
                        <img src="/images/logo.svg" width={40} height={40} alt="Site Logo" />
                    </a>
                </h1>

                {/* Navigation Area */}
                <div className="flex items-center ml-auto md:ml-0"> {/* Contains toggle and desktop nav */}
                    {/* Mobile Menu Toggle Button */}
                    <div className='md:hidden'>
                        <button
                            className="menu-btn p-2 rounded hover:bg-zinc-700"
                            onClick={handleMenuToggle}
                            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className="material-symbols-rounded">
                                {isMobileMenuOpen ? 'close' : 'menu'}
                            </span>
                        </button>
                    </div>

                    {/* Navbar for Desktop and Toggled Mobile */}
                    <div
                        className={`
                            ${isMobileMenuOpen ? 'block' : 'hidden'}
                            absolute top-full right-0 w-64 h-auto bg-zinc-800 shadow-lg rounded-b-md
                            overflow-y-auto
                            md:block md:static md:w-auto md:bg-transparent md:shadow-none md:rounded-none md:h-auto md:overflow-y-visible
                            md:flex md:items-center
                        `}
                    >
                        <Navbar activeSection={activeSection} onLinkClick={closeMobileMenu} />
                    </div>
                </div>

                {/* Contact Me Link - visible on desktop, part of mobile nav otherwise */}
                <a
                    href="#contact"
                    onClick={closeMobileMenu}
                    className={`
                        hidden /* Base: hidden */
                        md:block /* Desktop: make it block to apply padding and sizing */
                        md:ml-6 /* Desktop: margin from nav */
                        md:bg-white /* Desktop: white background */
                        md:text-zinc-900 /* Desktop: dark text for contrast on white bg */
                        md:font-semibold /* Desktop: slightly bolder text */
                        md:px-5 /* Desktop: horizontal padding */
                        md:py-2 /* Desktop: vertical padding */
                        md:rounded-md /* Desktop: rounded corners */
                        md:hover:bg-zinc-200 /* Desktop: hover effect - slightly darker white */
                        md:transition-colors md:duration-150 md:ease-in-out /* Desktop: smooth transition */
                    `}
                >
                    Contact Me
                </a>
            </div>
        </header>
    );
};

export default Header;