import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { AdminApp } from './AdminApp';
import { store } from './store';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <HashRouter>
        <AdminApp />
      </HashRouter>
    </Provider>
  </React.StrictMode>
)
