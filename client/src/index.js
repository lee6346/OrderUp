import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import fontIcons from './assets/font-awsome-icons';
import fontAwesome from '@fortawesome/fontawesome';
import { TOKEN_AUTH } from './auth/actions/types';
import App from './App';
import reducers, { logger } from './configReducers';
fontAwesome.library.add(...fontIcons);

const createStoreWithMiddleware = applyMiddleware(reduxThunk, logger)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('orderUpToken');
if (token) {
  store.dispatch({ type: TOKEN_AUTH });
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
