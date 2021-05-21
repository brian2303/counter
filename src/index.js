import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from "redux"
import { Provider } from 'react-redux'
import App from './App';
import counter from "./Modules/counter"

const store = createStore(counter, { counter: 0 });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);