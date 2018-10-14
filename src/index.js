import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/papercss/dist/paper.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';

import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyASWDbWQtbYDBoND4bkY-Uu98bbJ_OotmE",
    authDomain: "chatapp-23d17.firebaseapp.com",
    databaseURL: "https://chatapp-23d17.firebaseio.com",
    projectId: "chatapp-23d17",
    storageBucket: "chatapp-23d17.appspot.com",
    messagingSenderId: "1036326077937"
});

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        console.log(user);
    } else {
        console.log("There is not an user");
    }
}, error => {
    console.log(error);
});

ReactDOM.render((
<BrowserRouter>
    <App /> 
</BrowserRouter>), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
