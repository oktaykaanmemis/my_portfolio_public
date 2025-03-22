import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header = () => {
    const [active, setActive] = useState("#home");
    const [isMobile, setIsMobile] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            console.log("window.innerWidth:", window.innerWidth);
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        const sections = document.querySelectorAll("section[id]");
        const observerOptions = {
            root: null,
            threshold: 0.2,
            rootMargin: "-10px 0px 0px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActive(`#${entry.target.id}`);
                }
            });
        }, observerOptions);

        sections.forEach((section) => observer.observe(section));

        const handleLinkClick = (e) => {
            const target = e.target.closest('a[href^="#"]');
            if (!target) return;

            e.preventDefault();
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetId = target.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                    top: targetPosition - headerHeight,
                    behavior: 'smooth'
                });
            }
            
            if (isMobile) {
                setMobileMenuOpen(false);
            }
        };

        document.querySelector('header').addEventListener('click', handleLinkClick);

        return () => {
            sections.forEach((section) => observer.unobserve(section));
            document.querySelector('header').removeEventListener('click', handleLinkClick);
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobile]);

    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
        // { href: "#blog", label: "Blog" },
    ];

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <>
            {isMobile && (
                <div className="mobile-menu-button" onClick={toggleMobileMenu}>
                    <div className={`burger ${mobileMenuOpen ? 'open' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            )}
            
            <header className={`bg-zinc-900 ${isMobile && !mobileMenuOpen ? 'hidden' : ''}`}>
                <div className="container mx-auto px-4">
                    <div className="flex justify-center items-center h-16">
                        <nav className="flex justify-center space-x-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className={`nav-link text-xl ${active === link.href ? 'active' : ''}`}
                                >
                                    <span className="header-span">&lt;</span>
                                    {link.label}
                                    <span className="header-span">/&gt;</span>
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;