import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__content">
                    <div className="footer__info">
                        <h3 className="footer__title">Abhijith C</h3>
                        <p className="footer__description">
                            Full Stack Developer
                        </p>
                    </div>

                    <div className="footer__social">
                        <h3 className="footer__subtitle">Social</h3>
                        <div className="footer__social-links">
                            <a 
                                href="https://github.com/c-abhijith" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="footer__social-link"
                            >
                                <i className="uil uil-github"></i>
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/abhijith-c-8602b7220/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="footer__social-link"
                            >
                                <i className="uil uil-linkedin"></i>
                            </a>
                            <a 
                                href="mailto:abhijithc2000@gmail.com" 
                                className="footer__social-link"
                            >
                                <i className="uil uil-envelope"></i>
                            </a>
                        </div>
                    </div>

                    <div className="footer__links">
                        <h3 className="footer__subtitle">Quick Links</h3>
                        <ul className="footer__list">
                            <li>
                                <a href="#home" className="footer__link">Home</a>
                            </li>
                            <li>
                                <a href="#about" className="footer__link">About</a>
                            </li>
                            <li>
                                <a href="#project" className="footer__link">Projects</a>
                            </li>
                            <li>
                                <a href="#certificates" className="footer__link">Certificates</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer__copy">
                    <p>© 2024 Abhijith C. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
