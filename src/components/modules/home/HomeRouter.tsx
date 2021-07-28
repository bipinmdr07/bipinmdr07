import { Route, Switch } from 'react-router-dom';

import * as routes from 'constants/routes';

import Introduction from './Introduction';
import Resume from 'components/modules/resume/Resume';
import Portfolio from 'components/modules/portfolio';
import Experience from 'components/modules/experience';

const HomePageRouter = () => (
  <Switch>
    <Route exact path={routes.RESUME} component={Resume}></Route>
    <Route exact path={routes.PORTFOLIO} component={Portfolio}></Route>
    <Route exact path={routes.EXPERIENCE} component={Experience}></Route>

    <Route exact path={routes.HOME} component={Introduction}></Route>
    <Route path="/">404</Route>
  </Switch>
);

export default HomePageRouter;
