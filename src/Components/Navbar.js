import React from "react";
import './CSS/Navbar.css';
import { FaFacebook, FaHome, FaUserEdit, FaTasks, FaBook, FaMobile } from 'react-icons/fa';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navLogo">
                <img src={require(".//img/me.png")} alt="myPic" />
            </div>
            <div className="navName">
                <h1>Mehedi</h1>
                <p>Web Developer</p>
            </div>
            <ul className="navItems">
                <li><a href="#Home"><FaHome/>  Home</a></li>
                <li><a href="#About"><FaUserEdit/> About</a></li>
                <li><a href="#Skill"><FaTasks/> Skill</a></li>
                <li><a href="#Home"><FaBook/> Education</a></li>
                <li><a href="#Home"><FaMobile/> Contact</a></li>
            </ul>
            <div className="navSocialMedia">
                <a className="facebook" href="https://www.facebook.com/mehedi.invisible/" rel="noreferrer" target='_blank' title="Facebook"><FaFacebook /></a> 
            </div>
        </nav>
    );
}