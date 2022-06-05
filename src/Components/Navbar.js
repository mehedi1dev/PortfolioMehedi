import React from "react";
import './CSS/Navbar.css';
import { FaHome, FaUserEdit, FaTasks, FaBook, FaMobile } from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi'

export const Navbar = () => {

    return (
        <nav>
            <div className="navLogo">
                <img src={require(".//img/me.jpg")} alt="myPic" />
            </div>
            <div className="navName">
                <h1>S M Mehedi</h1>
                <p><span style={{'fontSize':'20px', 'color':'#ff4321'}}>Web Developer</span></p>
            </div>
            <input type="checkbox" id="check"/>
            <div className="menuButton">
                <label htmlFor="check" className="button"> <GiHamburgerMenu/> </label>
            </div>
            <ul className="navItems">
                <li><a href="#Home"><FaHome/> &nbsp; Home</a></li>
                <li><a href="#About"><FaUserEdit/>  &nbsp; About</a></li>
                <li><a href="#Skill"><FaTasks/>  &nbsp; Skill</a></li>
                <li><a href="#Education"><FaBook/>  &nbsp; Education</a></li>
                <li><a href="#Contact"><FaMobile/>  &nbsp; Contact</a></li>
            </ul>
        
        </nav>
    );
}