import React from "react";
import "./ScrollUp.css";

export default function ScrollUp() {
  const handleResumeClick = () => {
    const resumeUrl = '/resume.pdf';
    window.open(resumeUrl, '_blank');
  };

  return (
    <>
      {/* Resume Button - Top Right */}
      <div className="resume-container">
        <button onClick={handleResumeClick} className="resume-link">
          Resume
        </button>
      </div>

      {/* Social Links - Center Right */}
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

      {/* Scroll Up Button - Bottom Right */}
      <a href="#home" className="scrollup">
        <i className="uil uil-arrow-up scrollup__icon"></i>
      </a>
    </>
  );
}
