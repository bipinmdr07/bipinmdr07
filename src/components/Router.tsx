import { Router as BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from 'components/modules/home';

import history from 'utils/history';
import * as routes from 'constants/routes';

const Router = () => (
  <BrowserRouter history={history}>
    <Switch>
      <Route path={routes.HOME} component={Home}></Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
