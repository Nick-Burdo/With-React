/**
 * Created by tigra on 27.06.16.
 */
'use strict';

import React from 'react';
import filter from "lodash/filter";
import {connect} from 'react-redux';

import store from '../../store';
import {getUsers} from '../../api/user-api';

import UserList from '../views/UserList';


var UserListContainer = React.createClass({
    getInitialState: function () {
        return {
            users: []
        };
    },
    componentDidMount: function () {
        getUsers()
    },
    render: function () {
        var props = {
            users: this.props.users,
            deleteUser: this.deleteUser
        };

        return (
            <UserList {...props} />
        );
    },
    deleteUser: function (userId, e) {
        e.preventDefault();

        // use lodash.filter() function => https://lodash.com/docs#filter
        var users = _.filter(this.state.users, user => user.id != userId);
        var newState = Object.assign({}, this.state, {users: users});
        this.setState(newState);
    }
});

const mapStateToProps = function (store) {
    return {
        users: store.userState.users
    };
};

export default connect(mapStateToProps)(UserListContainer);