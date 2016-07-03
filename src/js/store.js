/**
 * Created by tigra on 03.07.16.
 */
'use strict';

import { createStore } from 'redux';
import reducers from './reducers/index';

export default createStore(reducers);
