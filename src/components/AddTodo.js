import React, { Component } from 'react';

class AddTodo extends Component {

    state={
        title: '',
        task: ''
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.id]: event.target.value 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTodo(this.state)
        this.setState({
            title: '',
            task: ''
        })
    }

    render() {
        return (
            <div>
                <h1 className="center">New Task</h1>

                <div class="row">
                    <form onSubmit={this.handleSubmit} class="col s12">
                    <div class="row">
                        <div class="input-field col s12">
                        <textarea value={this.state.title} id="title" class="materialize-textarea" onChange={this.handleChange}></textarea>
                        <label for="textarea1">Title</label>
                        </div>
                        <div class="input-field col s12">
                        <textarea value={this.state.task} id="task" class="materialize-textarea" onChange={this.handleChange}></textarea>
                        <label for="textarea1">Task</label>
                        </div>
                    </div>
                    </form>
                </div>
                <button className="btn" onClick={this.handleSubmit}>Create new task!</button>
            </div>
        );
    }
}

export default AddTodo;
