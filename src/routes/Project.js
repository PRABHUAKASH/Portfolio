import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import HeroImg2 from '../component/HeroImg2';
import Work from '../component/Work';

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS." text="my most recent works" />
      <Work />
      <Footer />
    </div>
  );
};

export default Project;
