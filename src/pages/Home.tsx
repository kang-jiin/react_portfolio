import React from 'react';

import MyNavbar from 'components/MyNavbar';
import Summary from 'components/Summary';
import AboutMe from 'components/AboutMe';
import Skill from 'components/Skill';
import Career from 'components/Career';
import Project from 'components/Project';

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
