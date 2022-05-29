import React from "react";
import './CSS/Home.css'

export const Home = () => {

    return (
        <div id="Home" className="homeSection" >
            
            <div className="homeText">
                <p className="hello"> HELLO,</p>
                <h1>My name is <strong><span style={{ 'color': '#ff0000' }}>Mehedi</span></strong>,</h1>
                <h2>I am a <strong><span style={{ 'color': '#ff0000' }}>Web Developer</span></strong>.</h2>
                
                <div className="button">
                    <button className="btn downloadButton">Download CV</button>
                    <button className="btn hireButton">Hire me</button>
                </div>

            </div>
        </div>
    );
}