import React from 'react';
import {Link} from 'react-router';

import NavLink from './NavLink';
import Home from './Home'

export default React.createClass({
    render() {
        return (
            <div>
                <h1> React Router Tutorial </h1>

                <img src="/img/ava.gif" alt="" />

                <ul role="nav">
                    <NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/repos">Repos</NavLink>
                </ul>

                <hr />

                {this.props.children || <Home />}
            </div>
        )
    }
})
