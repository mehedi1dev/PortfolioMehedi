import React from "react";
import './CSS/Navbar.css';

export const Navbar = () => {
    return (
        <nav className="navbar" id="Welcome">
            <h1 className="navLogo">M</h1>
            <ul className="navItems">
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Welcome">Skill</a></li>
                <li><a href="#Welcome">Contact</a></li>
            </ul>
            <button>Hire Me!</button>
        </nav>
    );
}