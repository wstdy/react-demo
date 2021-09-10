import React from 'react';
import ReactDOM from 'react-dom';
import App from './router/index';
import reportWebVitals from './reportWebVitals';
import './static/css/common.less';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
