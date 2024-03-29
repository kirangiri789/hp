import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import sidebar from './dashbord';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//mport '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />, document.getElementById("root"));
//ReactDOM.render(<sidebar />, document.getElementById("page-wrap"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
