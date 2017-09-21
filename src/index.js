import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import Root from './Components/Root/Root'

/**
 * REDUX
 */
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import RootReducer from './Reducers';
import { fetchMusic, fetchScene } from './Actions';
/*
 * Utils
 */
import FirebaseUtil from './Utils/InitializeFirebase';
/*
 * Styles
 */
import './index.css';

let store;
if (process.env.NODE_ENV === 'production'){
  store = createStore(
    RootReducer,
    applyMiddleware(
      thunkMiddleware // lets us dispatch() functions
    )
  );
} else {
  store = createStore(
    RootReducer,
    applyMiddleware(
      thunkMiddleware,
      createLogger() //middleware that logs actions
    )
  );
}


FirebaseUtil.init();

// store.dispatch(getNavigation());
store.dispatch(fetchMusic());
store.dispatch(fetchScene('TRAIN_STATION'));

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root'));
registerServiceWorker();
