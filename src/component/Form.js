import './Form.css';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  return (
    <div className="form">
      <form
        action="https://formspree.io/f/xnqyqkjd"
        method="POST"
        target="_blank"
      >
        <label>Your Name</label>
        <input type="text" name="user_name"></input>
        <label>Email</label>
        <input type="email" name="user_email"></input>
        {/* <label>Subject</label>
        <input type="text"></input> */}
        <label>Message</label>
        <textarea
          rows="6"
          placeholder="Type Your Message Here"
          name="message"
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
