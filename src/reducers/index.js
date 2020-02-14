import {combineReducers} from 'redux';

import counterReducer from './counterReducer';
import welcomeReducer from './welcomeReducer';
import asyncReducer from './asyncReducer';

export default combineReducers({
  counter: counterReducer,
  welcome: welcomeReducer,
  todoData: asyncReducer
})
