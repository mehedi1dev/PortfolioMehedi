import React, {useState} from "react";
import './CSS/Contact.css';
import { FaFacebook } from 'react-icons/fa'

let emailCheck=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

export const Contact = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    
    
    return (
        <div className="contact">
            <div className="title">
                <h1 >Contact Me</h1>
                <hr />
            </div>
            <div className="contactSection">
                <div className="contactForm">
                    <div>
                        <input className="inputField" type="text" placeholder="Name" onChange={event => setName(event.target.value)} required/>
                        <span className="inputTitle">Name</span>
                    </div>
                    <div>
                        <input className="inputField" type="text" placeholder="Email" onChange={event => setName(event.target.value)} required/>
                        <span className="inputTitle">Email</span>
                    </div>
                    <div>
                        <textarea name="msg" className="inputFieldArea" placeholder="Message" required></textarea>
                        <span className="inputTitleArea">Message</span>
                    </div>
                    <button>Send</button>
                </div>
                <div className="contactInfo ">
                    <h3>Email</h3>
                    <p>s.mehedi2022@gmail.com</p>
                    <hr />
                    <h3>Phone</h3>
                    <p>+8801981788997</p>
                    <hr />
                    <h3>Location</h3>
                    <p>Dhaka, Bangladesh.</p>
                    <hr />
                    <h3>On the web</h3>
                    <div className="socialLink">
                        <a href="facebook.com" target='_blank' className="bl">Facebook</a>
                        <a href="github.com" target='_blank' className="bl">Github</a>
                        <a href="github.com" target='_blank'>LinkedIn</a>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    );
}