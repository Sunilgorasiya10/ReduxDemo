import {combineReducers} from 'redux';

import counterReducer from './counterReducer';
import welcomeReducer from './welcomeReducer';

export default combineReducers({
  counter: counterReducer,
  welcome: welcomeReducer
})
