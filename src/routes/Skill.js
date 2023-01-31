import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import HeroImg2 from '../component/HeroImg2';
import SkillContent from '../component/SkillContent';

const Skill = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="SKILLS." text="MERN Stack " />
      <SkillContent />
      <Footer />
    </div>
  );
};

export default Skill;
