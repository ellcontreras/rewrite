import React, { Component } from 'react';

import firebase from 'firebase'
import Navbar from '../components/Navbar';
import AllBlogs from '../components/AllBlogs';

class HomeView extends Component {

    constructor() {
        super();

        this.state = {
            posts: []
        };

        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin() {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(res => {
            let { history } = this.props;
            
            alert(`Hello ${res.user.displayName}`);

            history.push({
                pathname: `/`,
            });
        }).catch(error => {
            console.log(error.message);

            alert("There is an error to try to log in");
        });
    }

    renderLoginButton() {
        if (!firebase.auth().currentUser) {
            return <button onClick={this.handleLogin} className="btn-danger">Iniciar Sesión con Google</button>
        } else {
            return <AllBlogs></AllBlogs>
        }
    }

    render() {
        return (
            <div className="text-center">
            <Navbar />
                <div className="row flex-center">
                    <h2>The place where you can say what you think!</h2>
                </div>
                { this.renderLoginButton() }
            </div>
        );
    }
}

export default HomeView;
