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
                    <p className="educationYear">Year - Year</p>
                    <p className="educationTitle">Degree</p>
                    <p className="educationInstitute">University Name</p>
                    <p className="educationResult"><span style={{ 'fontWeight': 'bold', 'color': '#000' }}>Result:</span> 3.96 out of 4.00 (Running) </p>
                    <hr />
                </div>
                <div className="educationTypes">
                <p className="educationYear">Year - Year</p>
                    <p className="educationTitle">Degree</p>
                    <p className="educationInstitute">University Name</p>
                    <p className="educationResult"><span style={{ 'fontWeight': 'bold', 'color': '#000' }}>Result:</span> 3.92 out of 4.00 </p>
                    <hr />
                </div>
                <div className="educationTypes">
                <p className="educationYear">Year - Year</p>
                    <p className="educationTitle">Degree</p>
                    <p className="educationInstitute">College Name</p>
                    <p className="educationResult"><span style={{ 'fontWeight': 'bold', 'color': '#000' }}>Result:</span> 4.17 out of 5.00 </p>
                </div>
        
            </div>
        </div>
    );
}