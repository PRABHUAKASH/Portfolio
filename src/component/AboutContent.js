import './AboutContent.css';
import { Link } from 'react-router-dom';
import React from 'react';
import React1 from '../assets/react1.jpg';
import React2 from '../assets/react4.jpg';

const AboutContent = () => {
  return (
    <div>
      <h1 className="title">About Me</h1>
      <div className="about">
        <div className="left">
          <h1>Who Am I?</h1>
          <p>
            {' '}
            Hello Everyone , I am AKASHPRABHU from Theni I Graduated in
            Mechanical Engineering from Pavai College Of Technology at the year
            of 2020 . then I completed one year Graduate Trainee in ZF Wabco
            India pvt.Ltd Company . I'm Interested in coding so I quit my job
            then started to learn coding in GUVI now I'm a Full Stack Web
            Developer
          </p>
          <Link to="/contact">
            <button className="btn">contact</button>
          </Link>
        </div>
        <div className="right">
          <div className="img-container">
            <div className="img-stack top">
              <img src={React1} className="img" alt="true" />
            </div>
            <div className="img-stack bottom">
              <img src={React2} className="img" alt="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
