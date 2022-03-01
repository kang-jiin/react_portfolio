import React from 'react';

import MyNavbar from 'components/MyNavbar';
import Summary from 'components/Summary';
import AboutMe from 'components/AboutMe';
import Skills from 'components/Skills';
import Career from 'components/Career';

const Home = () => {
  return (
    <div>
      <MyNavbar />
      <Summary />
      <AboutMe />
      <Skills />
      <Career />
    </div>
  );
};

export default Home;
