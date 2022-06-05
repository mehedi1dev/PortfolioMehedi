import React from "react";
import './CSS/BackToTop.css';
import { FaArrowUp, FaSun } from 'react-icons/fa'


export const BackToTop = () => {
    
    const [isLightTheme, setTheme] = React.useState(false)
    
    
    const colorChange = (name, value) => {
        for (var i = 0; i < name.length; i++) {
            name[i].style.color = value;
        }
    }
    const bgColorChange = (name, value) => {
        for (var i = 0; i < name.length; i++) {
            name[i].style.backgroundColor = value;
        }
    }
    const borderColorChange = (name, value) => {
        for (var i = 0; i < name.length; i++) {
            name[i].style.borderColor = value;
        }
    }

    React.useEffect(() => {

        var nav = document.getElementsByTagName('nav');
        var pTag = document.getElementsByTagName('p');
        var h1 = document.getElementsByTagName('h1');
        var h2 = document.getElementsByTagName('h2');
        var h3 = document.getElementsByTagName('h3');
        var a = document.getElementsByTagName('a');

        var bg = document.getElementsByClassName("bg");
        var homeSection = document.getElementsByClassName("homeSection");
        var about = document.getElementsByClassName("about");
        var skill = document.getElementsByClassName("skill");
        var education = document.getElementsByClassName("education");
        var contact = document.getElementsByClassName("contact");
        var inputField = document.getElementsByClassName("inputField");
        var inputFieldArea = document.getElementsByClassName("inputFieldArea");

        if (isLightTheme) {
            // let x = window.matchMedia("(max-width: 1250px)")
            // if (x.matches) {
            //     document.body.style.backgroundColor = `#fff`;
            //     console.log('t')
            // } else {
            //     document.body.style.backgroundColor = `#f7f7f7`;
            //     console.log('t1')
            // }
                
            document.body.style.backgroundColor = `#fff`;
            colorChange(pTag, '#000')
            colorChange(h1, '#000')
            colorChange(h2, '#000')
            colorChange(h3, '#000')
            colorChange(a, '#000')
            bgColorChange(nav, '#fff')
            bgColorChange(bg, '#fff')
            bgColorChange(homeSection, '#fff')
            bgColorChange(about, '#fff')
            bgColorChange(skill, '#fff')
            bgColorChange(education, '#fff')
            bgColorChange(contact, '#fff')
            colorChange(inputField, '#000')
            borderColorChange(inputField, '#000')
            colorChange(inputFieldArea, '#000')
            borderColorChange(inputFieldArea, '#000')

        } else {
            document.body.style.backgroundColor = `#1b252b`
            colorChange(pTag, '#fff')
            colorChange(h1, '#fff')
            colorChange(h2, '#fff')
            colorChange(h3, '#fff')
            colorChange(a, '#fff')
            bgColorChange(nav, '#26343d')
            bgColorChange(bg, '#26343d')
            bgColorChange(homeSection, '#26343d')
            bgColorChange(about, '#26343d')
            bgColorChange(skill, '#26343d')
            bgColorChange(education, '#26343d')
            bgColorChange(contact, '#26343d')
            colorChange(inputField, '#fff')
            borderColorChange(inputField, '#fff')
            colorChange(inputFieldArea, '#fff')
            borderColorChange(inputFieldArea, '#fff')
        }
        
    })
    
    return (
        <div id="BackToTop" > 
            {console.log('test')}
            <a className='top'
                href="#Home"
                title="Back to top"
                >
                <FaArrowUp /></a>
            <button className={isLightTheme 
            ? 'themeChange light'
            : 'themeChange dark'} 
                onClick={() => {
                    setTheme(!isLightTheme)
                }}
                title={isLightTheme?'Dark Theme':'Light theme'}
            >
            <FaSun /></button>
        </div>
    );
}