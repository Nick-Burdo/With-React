/**
 * Created by tigra on 16.07.16.
 */
'use strict';

import React, {PropTypes} from 'react';

import Todo from './Todo';


const TodoList = ({todos, makeCompleted}) => (
    <ul className="todo-list">
        {todos.map(todo => (
            <Todo key={todo.id} {...todo} makeCompleted={makeCompleted} />
        ))}
    </ul>
);

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string,
        completed: PropTypes.bool
    })).isRequired,
    makeCompleted: PropTypes.func.isRequired
};

export default TodoList;