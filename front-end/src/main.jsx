import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';

import { Provider } from 'react-redux';
import { store } from './redux/store.js';

import { Routers } from './router/Router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={Routers} />
    </Provider>
  </React.StrictMode>
);
