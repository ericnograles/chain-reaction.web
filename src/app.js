import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import * as common from '../../chain-reaction.common/src';

const store = common.configureStore();
console.log('The API path is ' + API_PATH);

// Images and icons
require('./assets/images/react-favicon.ico');

// Stylesheets
require('./assets/styles/main.css');

// Vendor JS
require('../node_modules/material-design-lite/dist/material.min.js');

// Vendor CSS
require('../node_modules/material-design-lite/dist/material.grey-indigo.min.css');

ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById('app')
);