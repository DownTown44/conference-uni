import React from 'react';

const HomePage = () => {



  return (
    <div className="homePage">
      <section className="homePage__welcomeSection">
        <div className="homePage__greeting">
          <h1>Welcome</h1>
          {/* some inspiration, a prize, development, a community, an experience, innovation */}
          <h2>Looking for <span>inspiration</span>?</h2>
          <h2>The possibilities are endless on the <span>BTW</span> conference.</h2>
        </div>
      </section>
    </div>
  )
}

export default HomePage;