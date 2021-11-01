import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import Providers from './Providers';

ReactDOM.render(
  <BrowserRouter>
    <Providers>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Providers>
  </BrowserRouter>,
  document.getElementById('root')
);
