/**
 * Created by tigra on 16.07.16.
 */
'use strict';

import React from 'react';
import { connect } from 'react-redux'

import {toggleTodo} from '../../actions/todo-actions';
import TodoList from '../views/TodoList';


//const TodoListContainer = React.createClass({
//    getInitialState: function () {
//        return {};
//    },
//    componentDidMount: function () {
//
//    },
//    render: function () {
//        var props = {
//            todosIndex: todos.index,
//            todosData: todos.data,
//            makeCompleted: this.makeCompleted
//        };
//        return (
//            <TodoList {...props} />
//        );
//    },
//    makeCompleted: function (id, e) {
//        e.preventDefault();
//
//        console.log('make complete todo #', id);
//    }
//});

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
    }
};

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        makeCompleted: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}

const TodoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default TodoListContainer;


 
