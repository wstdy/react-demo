import React from 'react';
import ReactDOM from 'react-dom';
import App from './router/index';
import reportWebVitals from './reportWebVitals';
import './static/less/comon.less';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
