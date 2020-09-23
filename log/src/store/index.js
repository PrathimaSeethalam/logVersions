/**
 * @author Prathima S R
 * @email prathima5raj@yahoo.com
 * @create date 2020-08-29 11:37:12
 * @modify date 2020-08-29  11:37:12
 */

import { createStore } from 'redux';

import { devToolsEnhancer } from 'redux-devtools-extension';

import reducers from './reducers';

const store = createStore(
    reducers,
    devToolsEnhancer()
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
);

export default store;
