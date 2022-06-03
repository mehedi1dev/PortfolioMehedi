import React from "react";
import './CSS/Education.css';


export const Education = () => {
    return (
        <div className="education">
            <div className="title">
                <h1 >Education</h1>
                <hr />
            </div>
            <div className="educationSection">
                <div className="educationTypes">
                    <p className="educationYear">2018 - 2022</p>
                    <p className="educationTitle">B.Sc. in Computer Science and Engineering</p>
                    <p className="educationInstitute">Bangladesh University of Business & Technology (BUBT)</p>
                    <p className="educationResult"><span style={{ 'fontWeight': 'bold', 'color': '#000' }}>Result:</span> 3.96 out of 4.00 (Running) </p>
                    <hr />
                </div>
                <div className="educationTypes">
                    <p className="educationYear">2017</p>
                    <p className="educationTitle">H.S.C.</p>
                    <p className="educationInstitute">Maestro Crown College </p>
                    <p className="educationResult"><span style={{ 'fontWeight': 'bold', 'color': '#000' }}>Result:</span> 4.17 out of 5.00 </p>
                    <hr />
                </div>
                <div className="educationTypes">
                    <p className="educationYear">2015</p>
                    <p className="educationTitle">S.S.C.</p>
                    <p className="educationInstitute">Suapur Nannar High School</p>
                    <p className="educationResult"><span style={{ 'fontWeight': 'bold', 'color': '#000' }}>Result:</span> 4.06 out of 5.00</p>
                </div>
        
            </div>
        </div>
    );
}