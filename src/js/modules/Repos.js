/**
 * Created by tigra on 27.06.16.
 */
'use strict';

import React from 'react';
import {browserHistory} from 'react-router';

import NavLink from './NavLink';

export default React.createClass({
    handleSubmit: function (e) {
        e.preventDefault();
        const userName = e.target.user.value;
        const repo = e.target.repo.value;
        const path = `/repos/${userName}/${repo}`;

        console.log(path);

        browserHistory.push(path);
    },
    render: function () {
        return (
            <div>
                <h2> Repos </h2>

                <ul>
                    <NavLink to="/repos/reactjs/react-router">React Router</NavLink>
                    <NavLink to="/repos/facebook/react">React</NavLink>
                    <li>
                        <form onSubmit={this.handleSubmit}>
                            <input name="user" placeholder="userName" />
                            <input name="repo" placeholder="repo" />
                            <button type="submit">Go</button>
                        </form>

                    </li>
                </ul>

                <hr />

                {this.props.children}
            </div>
        );
    }
});

