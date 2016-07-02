/**
 * Created by tigra on 27.06.16.
 */
'use strict';

import React from 'react';

var UserList = React.createClass({
    render: function () {
        return (
            <ul className="user-list">
                <li>Dan</li>
                <li>Ryan</li>
                <li>Michael</li>
            </ul>
        );
    }
});

export default UserList;