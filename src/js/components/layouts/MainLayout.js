/**
 * Created by tigra on 26.06.16.
 */
'use strict';

import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
    render: function () {
        return (
            <div className="app">
                <header className="primary-header">
                    <div className="logo">
                        <img src="/img/1287.png" alt="logo"/>
                    </div>
                    <h2>Feci auod potui, faciant meliora potentes</h2>
                </header>

                <div className="container">
                    <aside className="primary-aside">
                        <ul>
                            <li>
                                <Link to="/" activeClassName="active" onlyActiveOnIndex={true}>Home</Link>
                            </li>
                            <li>
                                <Link to="/users" activeClassName="active">Users</Link>
                            </li>
                            <li>
                                <Link to="/widgets" activeClassName="active">Widgets</Link>
                            </li>
                            <li>
                                <Link to="/tutorial/redux" activeClassName="active">Tutorials</Link>
                                <ul className="sub-menu">
                                    <li>
                                        <Link to="/tutorial/redux" activeClassName="active">Redux Tutorial</Link>
                                    </li>
                                    <li>
                                        <Link to="/tutorial/reddit" activeClassName="active">Reddit API</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </aside>

                    <main>
                        {this.props.children}
                    </main>
                </div>

                <footer className="primary-footer">
                    &copy; 2016 All right reserved
                </footer>
            </div>
        );
    }
});

