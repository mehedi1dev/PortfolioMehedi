import React from "react";
import './CSS/About.css';
import { FaFacebook } from 'react-icons/fa'


export const About = () => {
    return (
        <div id="About" className="aboutSection">
            <div >
                <div className="aboutName">
                    <h1>Syed</h1>
                    <h1 className="ml75">Mohammad</h1>
                    <h1 className="ml300 mb30">Mehedi</h1>
                </div>
                <div className="aboutDescription">
                    <p>Hello, I'm <strong>Mehedi.</strong></p>
                    <p >I'm a self thought full stack web developer living in <strong><span style={{ 'color': '#00674c' }}>Bang</span><span style={{ 'color': '#ec293f' }}>la</span><span style={{ 'color': '#00674c' }}>desh</span></strong>🇧🇩. I'm currently graduating in CSE from Bangladesh University of Business & Technology.</p>
                    <p>I can develop a responsive website along with its backend work. I will be happy to work with you.</p>
                </div>
            </div>
            <div className="aboutImage">
                <img src={require(".//img/me.png")} alt="myPic" />
            </div>
            <div className="aboutSocialMedia">
                <p style={{'fontFamily':'Ubuntu', 'fontSize':'20px'}}>Find me on :</p>
                <div style={{ 'marginTop': '10px' }}>
                    <a className="facebook" href="https://www.facebook.com/mehedi.invisible/" rel="noreferrer" target='_blank' title="Facebook"><FaFacebook /></a> 
                </div>
            </div>
        </div>
    );
}