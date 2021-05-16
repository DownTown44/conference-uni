import React from 'react';

import Toolbar from '../../components/Navigation/Toolbar';
import Footer from '../../components/Footer/Footer';

const Layout = (props) => {
  return (
    <>
      <Toolbar />
      <main>
        {props.children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;