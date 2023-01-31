import './WorkCard.css';

import WorkCard from './WorkCard';
import WorkCardData from './WorkCardData';

import React from 'react';

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {WorkCardData.map((val, ind) => {
          return (
            <WorkCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              source={val.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;

// {/* <div className="project-card">
// <img src={pro1} alt="image" />
// <h2 className="project-title">Amazona Ecommerce website</h2>
// <div className="pro-details">
//   <p>
//     This is Ecommerce Shooping website build with ReactJs ,
//     NodeJs,MongoDB,Mongoose
//   </p>
//   <div className="pro-btns">
//     <NavLink to="url.com" className="btn">
//       View
//     </NavLink>
//     <NavLink to="url.com" className="btn">
//       Source
//     </NavLink>
//   </div>
// </div>
// </div> */}
