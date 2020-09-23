/**
 * @author Prathima S R
 * @email prathima5raj@yahoo.com
 * @create date 2020-08-29 11:37:12
 * @modify date 2020-08-29  11:37:12
 */
import { combineReducers } from 'redux';

import { addVersions } from './AddVersions';

export default combineReducers({
    addVersions: addVersions
});
