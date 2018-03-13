import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App'; 
import Forecast from './Forecast';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/forecast/:day" component={Forecast} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
