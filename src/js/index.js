/**
 * @copyright Iterios
 * @author Nick Burdo <n.burdo@iterios.com>
 * @version 2.1.1 23.06.16
 * @since 2.1.1
 */

//import 'babel-core/polyfill';

import '../sass/style.scss';
import '../img/1287.png';


import React from 'react';
import {render} from 'react-dom';
import { Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

import router from './router';
import reducers from './reducers/index';




const loggerMiddleware = createLogger();

let store = createStore(
    reducers,
    applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        loggerMiddleware // neat middleware that logs actions
    )
);


render(
    <Provider store={store}>{router}</Provider>,
    document.getElementById('content')
);

