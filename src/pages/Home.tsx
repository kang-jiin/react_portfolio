import React from 'react';

import MyNavbar from 'components/MyNavbar';
import AboutMe from 'components/AboutMe';

function Home() {
  return (
    <div>
      <MyNavbar />
      <AboutMe />
      <header className="App-header">
        <h1>Hello Home!😀😘</h1>
      </header>
    </div>
  );
}

export default Home;
