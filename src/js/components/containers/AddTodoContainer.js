/**
 * Created by tigra on 17.07.16.
 */
'use strict';

import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions/todo-actions';

let AddTodoContainer = ({ dispatch }) => {
    let input;

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                  return
                }
                dispatch(addTodo(input.value));
                input.value = ''
              }}>
                <input ref={node => {
                  input = node
                }}/>
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    )
};
AddTodoContainer = connect()(AddTodoContainer);

export default AddTodoContainer;
