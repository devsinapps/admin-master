import React from 'react';
import ReactDOM from 'react-dom';
import './Components/style/Minify/main.css';
import Routes from './Routes';
import * as serviceWorker from './serviceWorker';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//MdbReact
import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { createStore } from 'redux'
import {  Provider } from 'react-redux'
//Reducer
import rootReducer from './store/reducer/rootReducer'

const store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={store}>
		<Routes /></Provider>, 
	document.getElementById('root'));

serviceWorker.unregister();
