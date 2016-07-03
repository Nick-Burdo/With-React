/**
 * @copyright Iterios
 * @author Nick Burdo <n.burdo@iterios.com>
 * @version 2.1.1 23.06.16
 * @since 2.1.1
 */

import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import MainLayout from './components/layouts/MainLayout';
import SearchLayout from './components/layouts/SearchLayout';

import Home from './components/views/Home';
import UserListContainer from './components/containers/UserListContainer';
import WidgetList from './components/views/WidgetList';


export default (
    <Router history={browserHistory}>
        <Route path="/" component={MainLayout}>
            <IndexRoute component={Home}/>
            <Route component={SearchLayout}>
                <Route path="users" component={UserListContainer}/>
                <Route path="widgets" component={WidgetList}/>
            </Route>
        </Route>
    </Router>
)