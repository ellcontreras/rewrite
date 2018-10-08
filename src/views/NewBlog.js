import React, { Component } from 'react';

import firebase from 'firebase';

class NewBlog extends Component {
    constructor() {
        super();

        this.state = {
            title: "",
            content: "",
            error: ""
        };

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeContent = this.handleChangeContent.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleChangeTitle(e) {
        this.setState({title: e.target.value});
    }

    handleChangeContent(e) {
        this.setState({content: e.target.value});
    }

    handleAdd() {
        const ref = firebase.database().ref('/rewrite/blogs');

        ref.push().set({
            title: this.state.title,
            content: this.state.content
        }).then(res => {
            let {history} = this.props;
            history.push({
                pathname: `/${ref.key}`,
            });
        }).catch(error => {
            this.setState({error: error.message});
        });
    }

    displayError() {
        if (this.state.error) {
            return (
                <div className="alert alert-danger">
                    { this.state.error }
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-4 col"></div>
                    <div className="col-4 col">
                        <h3>Add a new post</h3>
                        { this.displayError }
                        <div className="form-group">
                            <input type="text" placeholder="my awesome title" 
                                value={this.state.title} onChange={this.handleChangeTitle} />

                            <textarea placeholder="content" value={this.state.content}
                                onChange={this.handleChangeContent}></textarea>

                            <button onClick={this.handleAdd}>Add</button>
                        </div>
                    </div>
                    <div className="col-4 col"></div>
                </div>
            </div>
        )
    }
}

export default NewBlog;
