import React, { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";

import './CSS/Contact.css';

const FORMSPARK_FORM_ID = "BzpjCsfI";

let emailCheck=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

export const Contact = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();

    const [response, setResponse] = useState(null)

    const [submit] = useFormspark({
        formId: FORMSPARK_FORM_ID,
      });
    
      const onSubmit = async (e) => {
          e.preventDefault();

          if (name && email && message) {
              if (emailCheck.test(email)) {
                  const submissionMessage = `Name: ${name};\n  Email: ${email};\n  Message: ${message}`
                
                  await submit({ submissionMessage });
                
                  setResponse("Message sent successfully!");
              } else {
                setResponse('Wrong Email')
              }
          } else {
              setResponse('Please, provide all the information!')
          }
      };
    
    
    return (
        <div className="contact">
            <div className="title">
                <h1 >Contact Me</h1>
                <hr />
            </div>
            <div className="contactSection">
                
                <div className="contactForm">
                    {
                        response
                            ? <div className={response==='Message sent successfully!'?'responseMessage bg-teal':'responseMessage bg-danger'}>{response}</div>
                            : null
                    }
                    <div>
                        <input className="inputField" type="text" placeholder="Name" onChange={event => setName(event.target.value)} required/>

                    </div>
                    <div>
                        <input className="inputField" type="text" placeholder="Email" onChange={event => setEmail(event.target.value)} required/>
                        
                    </div>
                    <div>
                        <textarea name="msg" className="inputFieldArea" placeholder="Message" onChange={event => setMessage(event.target.value)} required></textarea>
                        
                    </div>
                    <button type="submit" onClick={onSubmit}>Send</button>
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
                        <a href="https://www.facebook.com/mehedi.primes/" target='_blank' rel="noreferrer" className="bl">Facebook</a>
                        <a href="https://github.com/MehediPrime" target='_blank' rel="noreferrer" className="bl">Github</a>
                        <a href="https://www.linkedin.com/in/mehediprime" rel="noreferrer" target='_blank'>LinkedIn</a>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    );
}