import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyle from './styles/global';

import App from './pages/Home';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
