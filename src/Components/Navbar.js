import React from "react";
import './CSS/Navbar.css';
import { FaHome, FaUserEdit, FaTasks, FaBook, FaMobile } from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi'

export const Navbar = () => {
    const [lColor, setLColor] = React.useState('') 
    const [rColor, setRColor] = React.useState('') 

    React.useEffect(() => {
        document.body.style.backgroundImage = `linear-gradient(to right, ${lColor}, ${rColor})`
    })
  
    return (
        <nav>
            <div className="navLogo">
                <img src={require(".//img/me.jpg")} alt="myPic" />
            </div>
            <div className="navName">
                <p>S M Mehedi</p>
                <p style={{'fontSize':'20px', 'color':'#ff4321'}}>Web Developer</p>
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
            <div className="backgroundColor">
                <input type="color" name="leftColor" value={lColor} onChange={ e => setLColor(e.target.value)}/>
                <input type="color" name="rightColor" value={rColor} onChange={ e => setRColor(e.target.value)} />
            </div>
            <div className="resetButton">
            <input type="button" value='Reset' onClick={ () => {
                    setLColor('#f6f7ff')
                    setRColor('#f6f7ff')
                } } />
            </div>
        </nav>
    );
}