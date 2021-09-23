import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from 'app/store';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

/**
 * provide store with in the react components by using Provider from react-redux
 */

ReactDOM.render(
  <React.StrictMode>    
    <Provider store={store}> 
    <App />
    </Provider>   
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
