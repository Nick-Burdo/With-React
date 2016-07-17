/**
 * Created by tigra on 16.07.16.
 */
'use strict';

import React, { PropTypes } from 'react';

const Todo = ({ makeCompleted, id, completed, text }) => (
    <li className={"todo-list-item" + (completed? ' completed': '')}>
        {text}

        <a href="#"
           className={"complete-link" + (completed? ' hide': '')}
           onClick={makeCompleted.bind(null, id)}
        >
            
        </a>
    </li>
);

Todo.propTypes = {
    makeCompleted: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default Todo
