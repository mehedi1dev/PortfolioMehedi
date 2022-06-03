import React from "react";
import './CSS/Skill.css';
import {FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaGithub} from 'react-icons/fa'
import {SiJavascript, SiPostgresql} from 'react-icons/si'


export const Skill = () => {
    return (
        <div className="skill">
            <div className="title">
                <h1>My Skills</h1>
                <hr />
            </div>
            <div className="skillSection">
                <div className="skillType">
                    <p><span style={{'color':'#e8d44d', 'padding':'7px 4px 0 0'}}><SiJavascript /></span> JavaScript <span style={{'margin':'auto 10% auto auto'}}>85%</span></p>
                    <div className="skillBar">
                        <div style={{'width':'85%'}} className="skillSubBar"></div>
                    </div>
                </div>

                <div className="skillType">
                    <p><span style={{'color':'#dd4b25', 'padding':'7px 4px 0 0'}}><FaHtml5 /></span> HTML <span style={{'margin':'auto 10% auto auto'}}>80%</span></p>
                    <div className="skillBar">
                        <div style={{'width':'80%'}} className="skillSubBar"></div>
                    </div>
                </div>

                <div className="skillType">
                    <p><span style={{'color':'#254bdd', 'padding':'7px 4px 0 0'}}><FaCss3Alt /></span> CSS <span style={{'margin':'auto 10% auto auto'}}>80%</span></p>
                    <div className="skillBar">
                        <div style={{'width':'80%'}} className="skillSubBar"></div>
                    </div>
                </div>

                <div className="skillType">
                    <p><span style={{'color':'#00d1f7', 'padding':'7px 4px 0 0'}}><FaReact /></span> React <span style={{'margin':'auto 10% auto auto'}}>75%</span></p>
                    <div className="skillBar">
                        <div style={{'width':'75%'}} className="skillSubBar"></div>
                    </div>
                </div>

                <div className="skillType">
                    <p><span style={{'color':'#679e63', 'padding':'7px 4px 0 0'}}><FaNodeJs /></span> Node <span style={{'margin':'auto 10% auto auto'}}>75%</span></p>
                    <div className="skillBar">
                        <div style={{'width':'75%'}} className="skillSubBar"></div>
                    </div>
                </div>

                <div className="skillType">
                    <p><span style={{'color':'#000', 'padding':'7px 4px 0 0'}}><FaGithub /></span> Github <span style={{'margin':'auto 10% auto auto'}}>70%</span></p>
                    <div className="skillBar">
                        <div style={{'width':'70%'}} className="skillSubBar"></div>
                    </div>
                </div>

                <div className="skillType">
                    <p><span style={{'color':'#356d9c', 'padding':'7px 4px 0 0'}}><FaPython /></span> Python <span style={{'margin':'auto 10% auto auto'}}>60%</span></p>
                    <div className="skillBar">
                        <div style={{'width':'60%'}} className="skillSubBar"></div>
                    </div>
                </div>

                <div className="skillType">
                    <p><span style={{'color':'#30628a', 'padding':'7px 4px 0 0'}}><SiPostgresql /></span> PostgreSQL <span style={{'margin':'auto 10% auto auto'}}>65%</span></p>
                    <div className="skillBar">
                        <div style={{'width':'65%'}} className="skillSubBar"></div>
                    </div>
                </div>

                
            </div>
        </div>
    );
}