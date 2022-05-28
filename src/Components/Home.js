import React from "react";
import './CSS/Home.css'
import { FaGithub, FaFacebook } from 'react-icons/fa'

export const Home = () => {

    return (
        <div id="Home" className="homeSection" >
            <div className="homeImage">
                <img src={require(".//img/minionHi.png")} alt="My Pic" width='500px'/>
            </div>
            <div >
                <p> ---- HELLO</p>
                <h1>My name is <strong><span style={{ 'color': '#ff0000' }}>Mehedi</span></strong>,</h1>
                <h2>I am a <strong><span style={{ 'color': '#ff0000' }}>Web Developer</span></strong></h2>
                <div>
                    <button className="btn hireButton">Hire me!</button>
                    <button className="btn downloadButton">Download CV</button>
                </div>
                <div >
                    <FaGithub className="github"/>
                    <FaFacebook className="facebook"/>
                </div>
            </div>
        </div>
    );
}