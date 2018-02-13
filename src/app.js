import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import { render, Miss } from 'hops-react';

import { Home } from './home';

import CounterContainer from './home/CounterContainer';

import extension from './unstated-extension';

const App = () => (
  <div>
    <nav>
      <Link to="/">Home</Link>&nbsp;
    </nav>
    <Switch>
      <Route exact path="/" component={Home} />
      <Miss />
    </Switch>
  </div>
);

export default render(<App />, {
  extensions: [extension()]
});
