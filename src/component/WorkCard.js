import './WorkCard.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="image" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <a href={props.view} target="_blank" className="btn">
            View
          </a>
          <a href={props.source} target="_blank" className="btn">
            Source
          </a>
        </div>
      </div>
    </div>
    // <div className="work-container">
    //   <h1 className="project-heading">Projects</h1>
    //   <div className="project-container">
    //     <div className="project-card">
    //       <img src={pro1} alt="image" />
    //       <h2 className="project-title">Amazona Ecommerce website</h2>
    //       <div className="pro-details">
    //         <p>
    //           This is Ecommerce Shooping website build with ReactJs ,
    //           NodeJs,MongoDB,Mongoose
    //         </p>
    //         <div className="pro-btns">
    //           <NavLink to="url.com" className="btn">
    //             View
    //           </NavLink>
    //           <NavLink to="url.com" className="btn">
    //             Source
    //           </NavLink>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default WorkCard;
