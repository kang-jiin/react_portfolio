import React from 'react';

import MyNavbar from 'components/home/MyNavbar';
import Summary from 'components/home/Summary';
import AboutMe from 'components/home/AboutMe';
import Skill from 'components/home/Skill';
import Career from 'components/home/Career';
import Project from 'components/home/Project';

const Home = () => {
  return (
    <div>
      <MyNavbar />
      <Summary />
      <AboutMe />
      <Skill />
      <Career />
      <Project />
    </div>
  );
};

export default Home;
