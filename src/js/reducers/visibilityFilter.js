/**
 * Created by tigra on 17.07.16.
 */
'use strict';

import { combineReducers } from 'redux';
import {last} from 'lodash';

import * as types from '../actions/action-types';
import {VisibilityFilters} from '../actions/todo-actions';

const {SHOW_ALL} = VisibilityFilters;

const visibilityFilter = function (state = SHOW_ALL, action) {
    switch (action.type) {
        case types.SET_VISIBILITY_FILTER:
            return action.payload;
        default:
            return state;
    }
};

export default visibilityFilter;

