/**
 * Created by tigra on 16.07.16.
 */
'use strict';

import React from 'react';

import TodoFooterLinkContainer from '../containers/TodoFooterLinkContainer';


const TodoFooter = props => (
    <p className="todo-footer">
        Show:
        {" "}
        <TodoFooterLinkContainer filter="SHOW_ALL">
            All
        </TodoFooterLinkContainer>
        {", "}
        <TodoFooterLinkContainer filter="SHOW_ACTIVE">
            Active
        </TodoFooterLinkContainer>
        {", "}
        <TodoFooterLinkContainer filter="SHOW_COMPLETED">
            Completed
        </TodoFooterLinkContainer>
    </p>
);

export default TodoFooter;