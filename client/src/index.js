import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import axios from 'axios';
import fontIcons from './assets/font-awsome-icons';
import fontAwesome from '@fortawesome/fontawesome';
import { TOKEN_AUTHENTICATE } from './constants/action-types';
import App from './App';
import reducers from './reducers';
import { logger } from './utils/middlewares';
fontAwesome.library.add(...fontIcons);

const createStoreWithMiddleware = applyMiddleware(reduxThunk, logger)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('orderUpToken');
if (token) {
  store.dispatch({ type: TOKEN_AUTHENTICATE });
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
