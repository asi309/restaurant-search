import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Dashboard from './pages/Dashboard/';

export default function Routes () {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Dashboard} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}