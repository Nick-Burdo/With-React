/**
 * Created by tigra on 16.07.16.
 */
'use strict';
 
import * as types from './action-types';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export function addTodo(text) {
    return {
        type: types.ADD_TODO,
        payload: text
    }
}

export function toggleTodo(index) {
    return {
        type: types.TOGGLE_TODO,
        payload: index
    }
}

export function setVisibilityFilter(filter) {
    return {
        type: types.SET_VISIBILITY_FILTER,
        payload: filter
    }
}
