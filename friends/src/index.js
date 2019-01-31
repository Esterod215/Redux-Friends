import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'thunk';
import logger from 'logger';
import  rootReducer  from './reducers';
import './index.css';
import App from './App';

const store = createStore(rootReducer, applyMiddleware(thunk,logger));

ReactDOM.render(
<Provider store ={store}>
<App />
</Provider>
, document.getElementById('root'));


