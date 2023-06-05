import "../styles/ContactForm.css";

import React from 'react'

function ContactForm() {
  return (
    <div className="form">
      <form action="https://formsubmit.co/f25689bdd5c4cc611301e237d5bc77eb" method="POST">
        {/* Honeypot */}
        <input type="text" name="_honey" style={{display: "none"}} />

        {/* Disable Captcha */}
        <input type="hidden" name="_captcha" value={false} />

        <label htmlFor="firstName">Your Name</label>
        <input type="text" name="name" id="firstName" required></input>
        <label htmlFor="email">Email</label>
        <input type="emailInfo" name="email" id="emailInfo" required></input>
        <label htmlFor="subject">Subject</label>
        <input type="text" name="subject" id="subject" required></input>
        <label htmlFor="message">Message</label>
        <textarea rows="6" name="message" id="message" placeholder="Type your message here" required/>
          <button type="submit" className="btn" >
            Submit
          </button>
      </form>
    </div>
  )
}

export default ContactForm