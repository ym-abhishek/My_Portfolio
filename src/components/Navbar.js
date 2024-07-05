import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="navbar">
            <div className="logo">My Portfolio</div>
            <div className="menu-toggle" onClick={handleToggle}>☰</div>
            <ul className={`nav-box ${isActive ? 'active' : ''}`}>
                <li><Link className="nav-links" to="/home">Home</Link></li>
                <li><Link className="nav-links" to="/about">About</Link></li>
                <li><Link className="nav-links" to="/resume">Resume</Link></li>
                <li><Link className="nav-links" to="/projects">Projects</Link></li>
                <li><Link className="nav-links" to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;
