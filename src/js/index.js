/**
 * @copyright Iterios
 * @author Nick Burdo <n.burdo@iterios.com>
 * @version 2.1.1 23.06.16
 * @since 2.1.1
 */

import '../sass/style.scss';
import '../img/1287.png';


import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import router from './router';

render(
    <Provider store={store}>{router}</Provider>,
    document.getElementById('content')
);