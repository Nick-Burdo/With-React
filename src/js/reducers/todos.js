/**
 * Created by tigra on 17.07.16.
 */
'use strict';

import { combineReducers } from 'redux';
import {last} from 'lodash';

import * as types from '../actions/action-types';

const initialState = [
    {
        id: 1,
        text: 'Todo # 1 text',
        completed: false
    },
    {
        id: 2,
        text: 'Todo # 2 text',
        completed: true
    },
    {
        id: 3,
        text: 'Todo # 3 text',
        completed: false
    },
    {
        id: 4,
        text: 'Todo # 4 text',
        completed: false
    },
    {
        id: 5,
        text: 'Todo # 5 text',
        completed: false
    }
];


//const initialState = [];

const todos = function (state = initialState, action) {
    let newState = [...state];
    switch (action.type) {
        case types.ADD_TODO:
            let id = 1;
            newState.map(item => {
                if (item.id >= id) {
                    id = item.id + 1;
                }
            });
            newState.push({
                id: id,
                text: action.payload,
                completed: false
            });
            return newState;
        case types.TOGGLE_TODO:
            newState = newState.map((todo) => {
                if (todo.id === action.payload) {
                    todo.completed = !todo.completetd;
                }
                return todo;
            });
            return newState;
        default:
            return state;
    }
};

export default todos;

