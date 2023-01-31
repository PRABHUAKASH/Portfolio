import './SkillContent.css';

import React from 'react';
import { SiHtml5, SiCss3 } from 'react-icons/si';
import { TbBrandJavascript } from 'react-icons/tb';
import { SiReact, SiMysql, SiMongodb } from 'react-icons/si';
import { FaBootstrap } from 'react-icons/fa';
import { IoLogoNodejs } from 'react-icons/io';

const SkillContent = () => {
  return (
    <div className="skill">
      <div className="head">
        <h3>Tecnical Skills</h3>
      </div>
      <div className="icons">
        <div className="html">
          <SiHtml5 size="10rem" color="rgb(167, 5, 5)" />
          <br />
          <span>HTML</span>
        </div>
        <div className="css">
          <SiCss3 size="10rem" color="rgb(5, 5, 154)" />
          <br />
          <span>CSS</span>
        </div>
        <div className="js">
          <TbBrandJavascript size="10rem" color="orange" />
          <br />
          <span>Java Script</span>
        </div>
        <div className="react">
          <SiReact size="10rem" />
          <br />
          <span>React</span>
        </div>
      </div>
      <div className="second">
        <div className="bootstrap">
          <FaBootstrap size="10rem" />
          <br />
          <span>Bootstrap</span>
        </div>
        <div className="mysql">
          <SiMysql size="10rem" />
          <br />
          <span>MySQL</span>
        </div>
        <div className="mongodb">
          <SiMongodb size="10rem" />
          <br />
          <span>MongoDB</span>
        </div>
        <div className="nodejs">
          <IoLogoNodejs size="10rem" />
          <br />
          <span>Node JS</span>
        </div>
      </div>
    </div>
   
  );
};

export default SkillContent;
