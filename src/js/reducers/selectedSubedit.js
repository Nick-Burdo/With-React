/**
 * Created by tigra on 18.07.16.
 */
'use strict';

import { combineReducers } from 'redux';

import * as types from '../actions/action-types';


function selectedSubedit(state = 'reactjs', action) {
    switch (action.type) {
        case types.SELECT_SUBREDDIT:
            return action.payload;
        default:
            return state
    }
}


export default selectedSubedit
