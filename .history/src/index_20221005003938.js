import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'react-loading-skeleton/dist/skeleton.css'
import 'react-notifications/lib/notifications.css';
import { BrowserRouter,HashRouter as Route } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Route>
      <Provider store={store}>
         <App />
      </Provider>
   </Route>
);
