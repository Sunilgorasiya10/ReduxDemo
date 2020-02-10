/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import logger from 'redux-logger'

const store = createStore(
  reducers,
  applyMiddleware(logger)
);

const AppContainer = () => {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  );
}
AppRegistry.registerComponent(appName, () => AppContainer);
