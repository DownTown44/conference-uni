import React from 'react';
import './css/style.css';

import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import HomePage from './containers/HomePage';
import Conference from './containers/Conference';
import Contact from './containers/Contact';
import SignUp from './containers/SignUp';

function App() {
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
