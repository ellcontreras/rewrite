import React, { Component } from 'react';
import firebase from 'firebase';

class Blog extends Component {
    constructor() {
        super();


        this.state = {
            title: "",
            content: ""
        };
    }

    componentWillMount() {
        const { history } = this.props;

        const blogRef = firebase.database().ref("/rewrite/blogs");
        blogRef(`/${history.param.id}`).on('value', snapshot => {
            this.setState({
                title: snapshot.val().title,
                content: snapshot.val().content
            });
        });
    }

    render() {
        return (
            <div className="content">
                <h1>{ this.state.title }</h1>
                { this.state.content }
            </div>
        );
    }
}

export default Blog;
