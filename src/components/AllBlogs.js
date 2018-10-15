import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import firebase from 'firebase';

class AllBlogs extends Component {
    constructor() {
        super();

        this.state = {
            userUID: '',
            blogs: []
        };
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

    render() {
        return (
            <div className="blog-post">
                { 
                    Object.keys(this.state.blogs).map((key, index) => {
                        let blog = this.state.blogs[key];
                        
                        return <Link className="blog-post__link" to={`/blog/${key}`}><h4 key={key}>{ blog.title }</h4></Link>
                    })
                }
            </div>
        );
    }
}

export default AllBlogs;
