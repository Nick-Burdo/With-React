/**
 * Created by tigra on 16.07.16.
 */
'use strict';

import fetch from 'isomorphic-fetch';

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

export function fetchPosts(subreddit) {
    return function (dispatch) {
        dispatch(requestPosts(subreddit));
        return fetch(`http://www.reddit.com/r/${subreddit}.json`)
            .then(response => response.json())
            .then(json => dispatch(receivePosts(subreddit, json)));
    }
}


function shouldFetchPosts(state, subreddit) {
    const posts = state.postsBySubreddit[subreddit];
    if (!posts) {
        return true
    } else if (posts.isFetching) {
        return false
    } else {
        return posts.didInvalidate
    }
}

export function fetchPostsIfNeeded(subreddit) {
    return (dispatch, getState) => {
        if (shouldFetchPosts(getState(), subreddit)) {
            // Dispatch a thunk from thunk!
            return dispatch(fetchPosts(subreddit))
        } else {
            // Let the calling code know there's nothing to wait for.
            return Promise.resolve()
        }
    }
}