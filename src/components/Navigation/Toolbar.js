import React from 'react';

import NavigationItems from './NavigationItems'; 

const Toolbar = (props) => (
  
  <header className="toolbar">
    {/* TODO: Insert logo */}
    <div className="toolbar__logo">

    </div>
    <nav className="navigationDesktop">
      <NavigationItems />
    </nav>
    {/* TODO: Insert darkmode button */}
  </header>
);

export default Toolbar;