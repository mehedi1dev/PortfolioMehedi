import React from "react";
import "./CSS/Contact.css";

export const Contact = () => {
  return (
    <div className="contact">
      <div className="title">
        <h1>Contact Me</h1>
        <hr />
      </div>
      <div className="contactSection">
        <div className="contactForm">
          <div>
            <input
              className="inputField"
              type="text"
              placeholder="Name"
              required
            />
          </div>
          <div>
            <input
              className="inputField"
              type="text"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <textarea
              name="msg"
              className="inputFieldArea"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            onClick={() => console.log("Thank You! But this is prototype!")}
          >
            Send
          </button>
        </div>
        <div className="contactInfo ">
          <h3>Email</h3>
          <p>s.mehedi2022@gmail.com</p>
          <hr />
          <h3>Phone</h3>
          <p>+880-xxxx-xxxxxx</p>
          <hr />
          <h3>Location</h3>
          <p>Dhaka, Bangladesh.</p>
          <hr />
          <h3>On the web</h3>
          <div className="socialLink">
            <a
              href="https://www.facebook.com/mehedi.primes/"
              target="_blank"
              rel="noreferrer"
              className="bl"
            >
              Facebook
            </a>
            <a
              href="https://github.com/MehediPrime"
              target="_blank"
              rel="noreferrer"
              className="bl"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/mehediprime"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};
