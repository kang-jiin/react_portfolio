import React from 'react';

import MyNavbar from 'components/MyNavbar';
import AboutMe from 'components/AboutMe';
import Skills from 'components/Skills';

function Home() {
  return (
    <div>
      <MyNavbar />
      <AboutMe />
      <Skills />
    </div>
  );
}

export default Home;
