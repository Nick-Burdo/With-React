/**
 * @copyright Iterios
 * @author Nick Burdo <n.burdo@iterios.com>
 * @version 2.1.1 23.06.16
 * @since 2.1.1
 */

//var Router = window.ReactRouter.Router;
//var Route = window.ReactRouter.Route;
//var IndexRoute = window.ReactRouter.IndexRoute;
//var Link = window.ReactRouter.Link;
//var browserHistory = window.ReactRouter.browserHistory;

import React from 'react';
import ReactDOM from 'react-dom';

var { Router, Route, IndexRoute, browserHistory } = require('react-router');

import MainLayout from './components/layout-main';
import SearchLayout from './components/layout-search';
import Home from './components/page-home';
import UserList from './components/page-user';
import WidgetList from './components/page-widget';



ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={MainLayout}>
            <IndexRoute component={Home}/>
            <Route component={SearchLayout}>
                <Route path="users" component={UserList}/>
                <Route path="widgets" component={WidgetList}/>
            </Route>
        </Route>
    </Router>,
    document.getElementById('content'));