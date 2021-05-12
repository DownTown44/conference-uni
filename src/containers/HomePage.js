import React from 'react';

import Toolbar from '../components/Navigation/Toolbar';

const HomePage = () => {
  return (
    <div className="homePage">
      <section className="homePage__welcomeSection">
        <div className="homePage__greeting">
          <h1>Welcome</h1>
          <h2>Looking for some <span>inspiration</span>?</h2>
        </div>
      </section>
    </div>
  )
}

export default HomePage;