import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './ducks/store';

// import registerServiceWorker from './registerServiceWorker';
import './index.css';


ReactDOM.render(
<Provider store = {store}><Router><App /></Router></Provider>
, document.getElementById('root'));
// registerServiceWorker();

