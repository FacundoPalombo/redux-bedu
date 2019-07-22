import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk'

const store = createStore(
  reducers , //Todos los reducers
  {},  //Initial state (estado inicial)
  applyMiddleware(reduxThunk)
)

render(
  <Provider store={ store }><App /></Provider>,
  document.getElementById('root')
);