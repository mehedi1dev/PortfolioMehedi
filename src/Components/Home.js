import React from "react";
import './CSS/Home.css'

export const Home = () => {

    const onDownload = () => {
        alert('Under Construction')
    }
    return (
        <div  className="homeSection" >
            
            <div className="homeText">
                <p className="hello"> HELLO,</p>
                <h1>My name is <strong><span style={{ 'color': '#1ee0aa' }}>Mehedi</span></strong>,</h1>
                <h2>I am a <strong><span style={{ 'color': '#1ee0aa' }}>Web Developer</span></strong>.</h2>
                
                <div className="button">
                    <button className="btn downloadButton" onClick={onDownload}>Download CV</button>
                     <a className="btn hireButton" href='#Contact'>Hire Me</a>
                </div>

            </div>
        </div>
    );
}