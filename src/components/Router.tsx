import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from 'components/modules/home';

import * as routes from 'constants/routes';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path={routes.HOME} component={Home}></Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
