import React from "react";
import './CSS/Home.css'

export const Home = () => {

    return (
        <div id="Home" className="homeSection" >
            <div className="homeImage">
                <img src={require(".//img/minionHi.png")} alt="My Pic" width='500px' />
            </div>
            <div className="homeText">
                <p className="hello"> ---- HELLO</p>
                <h1>My name is <strong><span style={{ 'color': '#ff0000' }}>Mehedi</span></strong>,</h1>
                <h2>I am a <strong><span style={{ 'color': '#ff0000' }}>Web Developer</span></strong>,</h2>
                <p className="homeLearnMore"><a href="#About" >Learn more !</a></p>
                <div>
                    <button className="btn downloadButton">Download CV</button>
                </div>

            </div>
        </div>
    );
}