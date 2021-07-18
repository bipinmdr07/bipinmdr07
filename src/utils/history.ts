import { createBrowserHistory } from 'history';

import config from '../config';

// @ts-ignore
export default createBrowserHistory({ basename: config.basename || '/' });
