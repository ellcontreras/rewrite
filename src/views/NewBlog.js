import React, { Component } from 'react';

class NewBlog extends Component {
    constructor() {
        super();

        this.state = {
            title: "",
            content: ""
        };

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
    }

    handleChangeTitle(e) {
        this.setState({title: e.target.value});
    }

    handleChangeContent(e) {
        this.setState({content: e.target.value});
    }

    render() {
        return (
            <div>
                <h3>Add a new post</h3>
                <div className="form-group">
                    <input type="text" placeholder="my awesome title" 
                        value={this.state.title} onInput={this.handleChangeTitle} />

                    <textarea placeholder="content" value={this.state.content}
                        onInput={this.handleChangeContent}></textarea>
                </div>
            </div>
        )
    }
}

export default NewBlog;
