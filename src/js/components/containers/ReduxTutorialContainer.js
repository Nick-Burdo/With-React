/**
 * Created by tigra on 14.07.16.
 */
'use strict';

import React from 'react';

import AddTodoForm from '../views/AddTodoForm';
import TodoListContainer from '../containers/TodoListContainer';
import TodoFooter from '../views/TodoFooter';

export default React.createClass({
    getInitialState: function () {
        return {};
    },
    componentDidMount: function () {

    },
    render: function () {
        return (
            <div className="redux-tutorial">
                <h3>Redux tutorial</h3>

                <AddTodoForm />

                <TodoListContainer />

                <TodoFooter />
            </div>
        );
    }
});

