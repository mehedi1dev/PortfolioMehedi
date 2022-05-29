import React from "react";
import './CSS/BackToTop.css';
import {FaArrowUp} from 'react-icons/fa'

export const BackToTop = () => {
    return (
        <div id="BackToTop" title="Back to top">
            <a className="top" href="#Home"><FaArrowUp/></a>
        </div>
    );
}