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

export function selectSubreddit(subreddit) {
    return {
        type: types.SELECT_SUBREDDIT,
        payload: subreddit
    }
}

export function invalidateSubreddit(subreddit) {
    return {
        type: types.INVALIDATE_SUBREDDIT,
        payload: subreddit
    }
}

export function requestPosts(subreddit) {
    return {
        type: types.REQUEST_POSTS,
        payload: subreddit
    }
}

export function receivePosts(subreddit, json) {
    return {
        type: types.RECEIVE_POSTS,
        payload: {
            subreddit: subreddit,
            posts: json.data.children.map(child => child.data),
            receivedAt: Date.now()
        }
    }
}