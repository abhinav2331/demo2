import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { AUTH_USER } from './actions/types';


const store = createStore(reducers, applyMiddleware(thunk));


const token = localStorage.getItem('token');
// if we have a token, consiger the user to be signed in
if (token) {
    // we need to update application state
    store.dispatch({ type: AUTH_USER });
}



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
