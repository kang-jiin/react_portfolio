import React from 'react';

import MyNavbar from 'components/MyNavbar';
import Summary from 'components/Summary';
import AboutMe from 'components/AboutMe';
import Skills from 'components/Skills';

const Home = () => {
  return (
    <div>
      <MyNavbar />
      <Summary />
      <AboutMe />
      <Skills />
    </div>
  );
};

export default Home;
