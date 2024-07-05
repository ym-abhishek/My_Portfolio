import "./contact.css";
import React from "react";

export default function Contact() {
  return (
    <>
      <div className="contact-con">
        <div className="contact-form">
          <h1>Contact</h1>
          <form>
            <input type="text" placeholder="Name*" />
            <input type="tel" placeholder="Phone*" />
            <input type="email" placeholder="email*" />
            <textarea type="text" placeholder="Message" />
          </form>
          <button type="submit">Submit</button>
          <div className="foot_icons">
            <a href="https://www.facebook.com/profile.php?id=100077524812323&mibextid=JRoKGi" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook" />
            </a>
            <a href="https://www.instagram.com/_abhi_ram12?igsh=MTZ1aHFzY2I5emVqaA==" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-x-twitter" />
            </a>
            <a href="mailto:ymabhi14@outlook.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-envelope" />
            </a>
            <a href="https://github.com/ym-abhishek" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github" />
            </a>
            <a href="https://www.linkedin.com/in/ymabhishek" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin-in" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

