import './Heroimg.css';

import React from 'react';
import IntroImg from '../assets/intro-bg.jpg';
import { Link } from 'react-router-dom';
import Typical from 'react-typical';
import env from './settings';

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p className="name">HI,I'M AkashPrabhu</p>
        <h1 className="type">
          <Typical
            loop={Infinity}
            steps={[
              'Full Stack web Developer',
              1000,
              'MERN Stack ',
              1000,
              'React JS Dev',
              1000,
              'Node JS Dev',
              1000,
              'Express JS Dev',
              1000,
            ]}
          />
        </h1>
        <div>
          <Link to="/project" className="btn">
            Project
          </Link>
          <a
            href={env.resume}
            target="_blank"
            className="btn btn-light"
            rel="noreferrer noopener"
          >
            resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
