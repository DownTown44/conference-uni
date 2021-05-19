import React, { useState } from 'react';

import Toolbar from '../../components/Navigation/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer';
import Footer from '../../components/Footer/Footer';

const Layout = (props) => {
  const [open, setOpen] = useState(false);
  const [loginPage, setLoginPage] = useState(false);

  const loginHandler = () => {
    setOpen(!open);
    setLoginPage(!loginPage);
  }

  return (
    <>
      <Toolbar open={open} openLogin={() => setOpen(!open)} openSidedrawer={() => setOpen(!open)}/>
      <SideDrawer open={open} toggleSideDrawer={() => setOpen(!open)} login={loginPage} openLogin={() => loginHandler()}/>
      <main>
        {props.children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;