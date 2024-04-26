import React from 'react'
import { Link } from "react-router-dom"
import TADOLogo from '../images/MainLogo.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <div className="footer-logo">
                        <img src={TADOLogo} alt="Logo" className="logo-image" />
                    </div>
                    <div className="footer-headings">
                        <ul>
                            <li><a href="#legal">Legal</a></li>
                            <li><a href="#privacy">Privacy</a></li>
                            <li><a href="#accessibility">Accessibility</a></li>
                            <li><a href="#subscriptions">Subscriptions</a></li>
                            <li>
                                <a href="#privacy-choices">Your Privacy Choices</a>
                                <button className="privacy-button">&#x2713;</button> {/* Tick button */}
                            </li>
                            <li><a href="#cookie-preferences">Cookie Preferences</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-right">
                    <span>@T.A.D.O. Inc, 2024</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;