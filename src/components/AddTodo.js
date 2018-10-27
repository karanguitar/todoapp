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

                <div className="row">
                    <form onSubmit={this.handleSubmit} className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                        <textarea value={this.state.title} id="title" className="materialize-textarea" onChange={this.handleChange}></textarea>
                        <label htmlFor="textarea1">Title</label>
                        </div>
                        <div className="input-field col s12">
                        <textarea value={this.state.task} id="task" className="materialize-textarea" onChange={this.handleChange}></textarea>
                        <label htmlFor="textarea1">Task</label>
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
