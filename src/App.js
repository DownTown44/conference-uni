import React from 'react';
import './css/style.css';

import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import HomePage from './containers/HomePage';
import SignUp from './containers/SignUp';
import Contact from './containers/Contact';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Layout>
  );
}

export default App;
