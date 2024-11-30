import React, { useState, useEffect } from 'react';
import './ScrollUp.css';

const ScrollUp = () => {
    const [showElements, setShowElements] = useState(true);
    const [showScrollUp, setShowScrollUp] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const homeSection = document.getElementById('home');
            const homeSectionBottom = homeSection?.offsetTop + homeSection?.offsetHeight;
            const currentScroll = window.scrollY;

            // Show elements only in home section
            setShowElements(currentScroll < homeSectionBottom || currentScroll === 0);
            
            // Show scroll-up arrow when scrolled down
            setShowScrollUp(currentScroll >= 560);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleResumeClick = () => {
        const resumeUrl = '/resume.pdf';
        window.open(resumeUrl, '_blank');
    };

    return (
        <>
            {/* Resume and Social Links - Only show in home section */}
            {showElements && (
                <>
                    <div className="resume-container">
                        <button onClick={handleResumeClick} className="resume-link">
                            Resume
                        </button>
                    </div>

                    <div className="social-links-container">
                        <div className="social-links">
                            <a
                                href="https://www.linkedin.com/in/your-profile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon-link"
                            >
                                <i className="uil uil-linkedin-alt"></i>
                            </a>
                            <a
                                href="https://github.com/your-profile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon-link"
                            >
                                <i className="uil uil-github"></i>
                            </a>
                            <a
                                href="https://leetcode.com/your-profile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon-link"
                            >
                                <i className="uil uil-code-branch"></i>
                            </a>
                        </div>
                    </div>
                </>
            )}

            {/* Scroll Up Arrow */}
            {showScrollUp && (
                <a href="#home" className="scrollup">
                    <i className="uil uil-arrow-up scrollup__icon"></i>
                </a>
            )}
        </>
    );
};

export default ScrollUp;
