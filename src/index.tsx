import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import axios from "axios";

import mockAxios from './api/axios/MockAxios';
import store from './redux/store';

import App from './containers/App';

import './assets/sass/style.scss';

mockAxios(axios);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
