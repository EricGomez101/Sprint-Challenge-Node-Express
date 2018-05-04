import React from 'react';
import ReactDOM from 'react-dom';
import classes from './index.css';
import App from './Containers/App';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

export const store = createStore(() => {}, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('root'));
