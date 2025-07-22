// Header.js - FINAL VERSION

import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const headerRef = useRef(null);

    // This scroll logic is correct. It finds the active section.
    useEffect(() => {
        const pageSections = [
            { id: 'home' }, { id: 'about' }, { id: 'skills' }, { id: 'work' },  { id: 'contact' },
        ];
        const getHeaderHeight = () => headerRef.current?.offsetHeight || 80;

        const onScroll = () => {
            const scrollPosition = window.scrollY + getHeaderHeight() + 20;
            let currentSectionId = '';

            for (const sectionInfo of pageSections) {
                const element = document.getElementById(sectionInfo.id);
                if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
                    currentSectionId = sectionInfo.id;
                    break;
                }
            }
            if (!currentSectionId && window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
                currentSectionId = pageSections[pageSections.length - 1]?.id || '';
            }
            setActiveSection(currentSectionId || 'home');
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll(); // Run on initial load
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const closeNav = () => {
        setIsNavOpen(false);
    };

    return (
        <header ref={headerRef} className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
            <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr_auto_1fr]">
                
                <a href="#home" onClick={closeNav} className="logo">
                    <img src="/images/main_logo.png" width={120} height={90} alt="Site Logo" />
                </a>

                <div className="relative md:justify-self-center">
                    <div className='md:hidden'>
                        <button
                            className="menu-btn"
                            onClick={() => setIsNavOpen(prev => !prev)}
                            aria-label={isNavOpen ? "Close menu" : "Open menu"}
                        >
                            <span className="material-symbols-rounded">
                                {isNavOpen ? 'close' : 'menu'}
                            </span>
                        </button>
                    </div>

                    <Navbar
                        isNavOpen={isNavOpen}
                        activeSection={activeSection}
                        onLinkClick={closeNav}
                    />
                </div>

                <a href="#contact" className="btn btn-primary max-md:hidden md:justify-self-end">
                    Contact Me
                </a>
            </div>
        </header>
    );
};

export default Header;