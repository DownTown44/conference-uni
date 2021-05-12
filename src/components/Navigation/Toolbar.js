import React from 'react';

import NavigationItems from './NavigationItems'; 

const Toolbar = (props) => (
  
  <header className="toolbar">
    {/* TODO: Insert logo */}
    <nav className="navigationDesktop">
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;