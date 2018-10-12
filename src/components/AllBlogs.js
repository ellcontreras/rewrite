import React, { Component } from 'react';

import firebase from 'firebase';

class AllBlogs extends Component {
    constructor() {
        super();

        this.state = {
            userUID: '',
            blogs: []
        };

        this.renderAll = this.renderAll.bind(this);
    }

    componentWillMount() {
        let refBlogs = firebase.database().ref('rewrite/blogs');
        refBlogs.on('value', snapshot => {
            this.setState({
                blogs: snapshot.val()
            });
        }, error => {
            console.log(error);
        });
    }

    componentWillReceiveProps() {
        if (this.props.userUID) {
            this.setState({userUID: this.props.userUID});

            const refBlogs = firebase.database().ref('rewrite/blogs');
            refBlogs.orderByChild(`${this.state.userUID}`)
            .on('value', snapshot => {
                this.setState({
                    blogs: snapshot.val()
                });
            }, error => {
                console.log(error);
            });
        }
    }

    renderAll() {
        Object.keys(this.state.blogs).map((key, index) => {
            let blog = this.state.blogs[key];
            
            return <h4 key={key}>{blog.title} </h4>
        });
    }

    render() {
        return (
            <div>
                { this.renderAll() }
            </div>
        );
    }
}

export default AllBlogs;
