import React from 'react';
import { Router as BrowserRouter, Switch, Route } from 'react-router-dom';

import history from 'utils/history';

import * as routes from 'constants/routes';

import Home from './home';
import Resume from './resume';
import Portfolio from './portfolio';

const Router = () => {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path={routes.RESUME} component={Resume} />
        <Route exact path={routes.PORTFOLIO} component={Portfolio} />

        <Route path={routes.HOME} component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
