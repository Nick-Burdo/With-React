/**
 * Created by tigra on 18.07.16.
 */
'use strict';

import { combineReducers } from 'redux';

import * as types from '../actions/action-types';

const initialState = {
    isFetching: false,
    didInvalidate: false,
    items: []
};

function posts(state = initialState, action) {
    switch (action.type) {
        case types.INVALIDATE_SUBREDDIT:
            return Object.assign({}, state, {
                didInvalidate: true
            });
        case types.REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        default:
            return state
    }
}

function postsBySubreddit(state = {}, action) {
    switch (action.type) {
        case types.INVALIDATE_SUBREDDIT:
        case types.REQUEST_POSTS:
            return Object.assign({}, state, {
                [action.payload]: posts(state[action.payload], action)
            });
        case types.RECEIVE_POSTS:
            return Object.assign({}, state, {
                [action.payload.subreddit]: {
                    isFetching: false,
                    didInvalidate: false,
                    items: action.payload.posts,
                    lastUpdated: action.payload.receivedAt
                }
            });
        default:
            return state
    }
}

export default postsBySubreddit
