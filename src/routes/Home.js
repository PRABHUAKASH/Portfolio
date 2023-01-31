import React from 'react';
import Navbar from '../component/Navbar';
import HeroImg from '../component/Heroimg';
import Work from '../component/Work';
import About from '../component/AboutContent';
import Skill from '../component/SkillContent';
import Footer from '../component/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Work />
      <About />
      <Skill />
      <Footer />
    </div>
  );
};

export default Home;
