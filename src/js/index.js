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

require('../sass/style.scss');
require('../img/1287.png');


import React from 'react';
import ReactDOM from 'react-dom';

var { Router, Route, IndexRoute, browserHistory } = require('react-router');

import MainLayout from './components/MainLayout';
import SearchLayout from './components/SearchLayout';
import Home from './components/Home';
import UserList from './components/UserList';
import WidgetList from './components/WidgetList';



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