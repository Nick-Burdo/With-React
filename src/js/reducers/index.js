/**
 * Created by tigra on 03.07.16.
 */
'use strict';

import { combineReducers } from 'redux';

import visibilityFilter from './visibilityFilter';
import todos from './todos';
import selectedSubreddit from './selectedSubreddit';
import postsBySubreddit from './postsBySubreddit';

const reducers = combineReducers({
    visibilityFilter,
    todos,
    selectedSubreddit,
    postsBySubreddit
});



export default reducers;


