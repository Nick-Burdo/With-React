/**
 * Created by tigra on 03.07.16.
 */
'use strict';

import { combineReducers } from 'redux';

// Reducers
import userReducer from './userReducer';
//import widgetReducer from './widget-reducer';
//import searchLayoutReducer from './search-layout-reducer';

// Combine Reducers
export default combineReducers({
    userState: userReducer
    //widgetState: widgetReducer,
    //searchLayoutState: searchLayoutReducer
});


