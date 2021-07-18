import React from 'react';
import { Router as BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from 'components/modules/home';
import Resume from 'components/modules/resume';
import Portfolio from 'components/modules/portfolio';
import Experience from 'components/modules/experience';

import history from 'utils/history';
import * as routes from 'constants/routes';

const Router = () => (
  <BrowserRouter history={history}>
    <Switch>
      <Route exact path={routes.HOME} component={Home}></Route>
      <Route exact path={routes.EXPERIENCE} component={Experience}></Route>
      <Route exact path={routes.PORTFOLIO} component={Portfolio}></Route>
      <Route exact path={routes.RESUME} component={Resume}></Route>
      <Route path="">404</Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
