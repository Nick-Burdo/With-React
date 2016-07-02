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

import '../sass/style.scss';
import '../img/1287.png';


import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import MainLayout from './components/MainLayout';
import SearchLayout from './components/SearchLayout';
import Home from './components/Home';
import UserListContainer from './components/UserListContainer';
import WidgetList from './components/WidgetList';


render(
    <Router history={browserHistory}>
        <Route path="/" component={MainLayout}>
            <IndexRoute component={Home}/>
            <Route component={SearchLayout}>
                <Route path="users" component={UserListContainer}/>
                <Route path="widgets" component={WidgetList}/>
            </Route>
        </Route>
    </Router>,
    document.getElementById('content')
);