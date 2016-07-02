/**
 * Created by tigra on 27.06.16.
 */
'use strict';

import React from 'react';
import 'whatwg-fetch';
import find from "lodash/find"

import UserList from './UserList';


export default React.createClass({
    getInitialState: function () {
        return {
            users: []
        };
    },
    componentDidMount: function () {
        // use fetch for ajax request => https://github.com/github/fetch
        fetch('http://localhost:3001/users')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    users: json
                });
            })
            .catch(ex => {
                console.log('parsing failed', ex)
            });

    },
    render: function () {
        var props = {
            users: this.state.users,
            toggleActive: this.toggleActive
        };

        return (
            <UserList {...props} />
        );
    },
    toggleActive: function (userId) {
        var newState = Object.assign({}, this.state);
        // use lodash.find() function => https://lodash.com/docs#find
        var user = find(newState.users, {id: userId});
        user.active = !user.active;
        this.setState(newState);
    }
});
