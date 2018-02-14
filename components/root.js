import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './navbar';

export default () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          {/*
          */}
          
          <Route exact path="/sam" render={() => 'sam'} />
          <Route exact path="/animals" render={() => 'animals'} />
          <Route exact path="/hank" render={() => 'hank'} />
          <Route render={() => 'default'} />
          <Redirect to="/hank" />
        </Switch>
      </div>
    </Router>
  );
};
