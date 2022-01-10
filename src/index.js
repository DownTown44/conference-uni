import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from "react-cookie";

import App from './App';

const app = (
  <BrowserRouter>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </BrowserRouter>
)

ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
);
