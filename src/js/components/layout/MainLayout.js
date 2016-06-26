/**
 * Created by tigra on 26.06.16.
 */
'use strict';

import React from 'react';

const {Link} = require('react-router');

module.exports = React.createClass({
    render: function () {
        return (
            <div className="app">
                <header className="primary-header">
                    HEADER
                </header>

                <aside className="primary-aside">
                    <ul>
                        <li>
                            <Link to="/" activeClassName="active">Home</Link>
                        </li>
                        <li>
                            <Link to="users" activeClassName="active">Users</Link>
                        </li>
                        <li>
                            <Link to="widgets" activeClassName="active">Widgets</Link>
                        </li>
                    </ul>
                </aside>

                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
});
