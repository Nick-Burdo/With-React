/**
 * Created by tigra on 16.07.16.
 */
'use strict';

import React from 'react';


const AddTodoForm = props => (
    <div className="todo-add-item">
        <form>
            <input type="text" />
            <button type="submit">
                Add Todo
            </button>
        </form>
    </div>
);

export default AddTodoForm;