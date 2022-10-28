import React from "react";
import './CSS/About.css';


export const About = () => {
    return (
        <div  className="about">
            <div className="title">
                <h1 >About Me</h1>
                <hr />
            </div>
            <div className="aboutSection">
                <img src={require(".//img/me.png")} alt="myPic" />
                <div className="aboutText">
                    <h1>Hello,</h1>
                    <p>This is <strong>Mehedi</strong>, a self thought <strong>Full Stack Web Developer</strong> living in <strong><span style={{ 'color': '#00674c' }}>Bang</span><span style={{ 'color': '#ec293f' }}>la</span><span style={{ 'color': '#00674c' }}>desh</span></strong>. I'm a student of Computer Science and Technology</p>
                    <p>I can develop a responsive website along with its backend work. I will be happy to work on your web project.</p>
                </div>
            </div>                    
        </div>
    );
    
}