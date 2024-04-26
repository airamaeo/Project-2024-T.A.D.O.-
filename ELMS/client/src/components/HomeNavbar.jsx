import React from 'react';
import { Link } from "react-router-dom";
import TADOLogo from '../images/MainLogo.png'

const HomeNavbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="navbar-logo">
                    <img src={TADOLogo} alt="Logo" className="logo-image" />
                </div>
                <ul className="navbar-list">
                    <li className="navbar-item"><Link to="/Home">Product</Link></li>
                    <li className="navbar-item"><Link to="/About">About</Link></li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <button className="register-button"><Link to="/Register">Book A Demo</Link></button>
                    </li>
                    <li className="navbar-item">
                        <button className="login-button"><Link to="/Login">Login</Link></button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default HomeNavbar;
