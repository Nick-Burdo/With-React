/**
 * Created by tigra on 03.07.16.
 */
'use strict';

import { combineReducers } from 'redux';

import visibilityFilter from './visibilityFilter';
import todos from './todos';

const reducers = combineReducers({
    visibilityFilter,
    todos
});



export default reducers;


