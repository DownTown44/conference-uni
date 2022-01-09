import React, { useEffect } from 'react';
import './css/style.css';

import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Layout from './hoc/Layout/Layout';
import HomePage from './containers/HomePage';
import Conference from './containers/Conference';
import Contact from './containers/Contact';
import SignUp from './containers/SignUp';

function App() {
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
    <Layout>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/conference" component={Conference} />
        <Route path="/contact" component={Contact} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </Layout>
  );
}

export default App;
