/**
 * Created by tigra on 02.07.16.
 */
'use strict';

import React from 'react';
import {Link} from 'react-router';

export default function (props) {
    return (
        <ul className="user-list">
            {props.users.map(user => (
                <li key={user.id} className="user-list-item">
                    <Link to={'/users/' + user.id} className="user-list-prop">
                        {user.name}
                    </Link>
                        <span className="user-list-prop">
                            {user.active ? 'Active' : 'Not active'}
                        </span>
                    <button onClick={props.toggleActive.bind(null, user.id)}>
                        Toggle Active
                    </button>
                </li>
            ))}
        </ul>
    );
};

