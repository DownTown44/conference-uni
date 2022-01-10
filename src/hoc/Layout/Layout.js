import React, { useEffect, useState } from 'react';

import Toolbar from '../../components/Navigation/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer';
import Footer from '../../components/Footer/Footer';

const Layout = (props) => {
  const [open, setOpen] = useState(false);
  const [loginPage, setLoginPage] = useState(false);

  useEffect(() => {
    if(props.isLoggedIn) {
      setOpen(false);
      setLoginPage(false);
    }
  }, [props.isLoggedIn])

  const loginHandler = (props) => {
    setOpen(!open);
    setLoginPage(!loginPage);
  }

  return (
    <>
      <Toolbar logout={props.logout} open={open} openLogin={() => setOpen(!open)} openSidedrawer={() => setOpen(!open)} isLoggedIn={props.isLoggedIn}/>
      <SideDrawer open={open} toggleSideDrawer={() => setOpen(!open)} login={loginPage} openLogin={() => loginHandler()}/>
      <main>
        {props.children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;