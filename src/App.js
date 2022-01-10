import React, { useEffect } from 'react';
import './css/style.css';

import { useCookies } from "react-cookie";
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Layout from './hoc/Layout/Layout';
import HomePage from './containers/HomePage';
import Conference from './containers/Conference';
import Contact from './containers/Contact';
import AdminView from './containers/AdminView';
import SignUp from './containers/SignUp';

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost/conference-backend/initDB.php'
    })
    .then(res => {
        console.log(res.data.result);
    })
    .catch(err => console.log(err.message));
  }, [])

  return (
    <Layout isLoggedIn={cookies.user ? true : false} logout={() => removeCookie("user")}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/conference" component={Conference} />
        <Route path="/contact" component={Contact} />
        <Route path="/files" component={AdminView} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </Layout>
  );
}

export default App;
