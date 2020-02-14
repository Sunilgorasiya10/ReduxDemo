/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose } from 'redux';
import reducers from './src/reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(
      logger,
      thunk
    )
  )
);

const AppContainer = () => {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  );
}
AppRegistry.registerComponent(appName, () => AppContainer);
