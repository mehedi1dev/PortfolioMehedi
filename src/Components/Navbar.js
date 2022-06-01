import React from "react";
import './CSS/Navbar.css';
import { FaFacebook, FaHome, FaUserEdit, FaTasks, FaBook, FaMobile } from 'react-icons/fa';

export const Navbar = () => {
    const [lColor, setLColor] = React.useState('#f6f7ff') 
    const [rColor, setRColor] = React.useState('#f6f7ff') 

    React.useEffect(() => {
        document.body.style.backgroundImage = `linear-gradient(to right, ${lColor}, ${rColor})`
    })
  
    return (
        <nav >
            <div className="navLogo">
                <img src={require(".//img/me.jpg")} alt="myPic" />
            </div>
            <div className="navName">
                <h1>S M Mehedi</h1>
                <p>Web Developer</p>
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