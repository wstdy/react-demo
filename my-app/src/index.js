import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route } from 'react-router-dom'

import './static/index.less';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path='/' component={App}></Route>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
