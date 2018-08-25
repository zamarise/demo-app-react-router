import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" render={props => <Home {...props} />} />
      <Route path="/home" component={Home} />
      <Route path="/home/2" component={Home} />
    </Switch>
  </BrowserRouter>
);
