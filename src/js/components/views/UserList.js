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

                    <a href="#"
                       className="user-list-delete-btn"
                       onClick={props.deleteUser.bind(null, user.id)}>
                        x
                    </a>
                </li>
            ))}
        </ul>
    );
};

