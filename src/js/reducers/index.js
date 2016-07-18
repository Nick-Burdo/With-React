/**
 * Created by tigra on 03.07.16.
 */
'use strict';

import { combineReducers } from 'redux';

import visibilityFilter from './visibilityFilter';
import todos from './todos';
import selectedSubedit from './selectedSubedit';
import postsBySubreddit from './postsBySubreddit';

const reducers = combineReducers({
    visibilityFilter,
    todos,
    selectedSubedit,
    postsBySubreddit
});



export default reducers;


