import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TADOLogo from '../images/MainLogo2.png'

const DashNavbar = () => {
    const [showSidebar, setShowSidebar] = useState(true);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    }

    return (
        <div className="dash-title">
            <div className={`sidebar ${showSidebar ? 'active' : ''}`}>
                <img src={TADOLogo} alt="Logo" className="logo-image" />
                <Link to="/employeeDash">Personal Employee Dashboard</Link>
                <Link to="/adminDash">Admin Dashboard</Link>
                <Link to="/manageLeave">Manage My Leaves</Link>
                <Link to="/companyRules">Company Rules</Link>
                <Link to="/home">Logout</Link>
            </div>
            <button className="sidebar-toggle-button" onClick={toggleSidebar}>{showSidebar ? '-' : '+'}</button>
        </div>
    );
};

export default DashNavbar;
