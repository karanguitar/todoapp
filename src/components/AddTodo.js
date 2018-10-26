import React, { Component } from 'react';

class AddTodo extends Component {

    state={
        title: null,
        task: null
    }

    render() {
        return (
            <div>
                <h1 className="center">New Task</h1>
                <div class="row">
                    <form class="col s12">
                    <div class="row">
                        <div class="input-field col s12">
                        <textarea id="title" class="materialize-textarea"></textarea>
                        <label for="textarea1">title</label>
                        </div>
                        <div class="input-field col s12">
                        <textarea id="task" class="materialize-textarea"></textarea>
                        <label for="textarea1">task</label>
                        </div>
                    </div>
                    </form>
                </div>
                <button>Create new task!</button>
            </div>
        );
    }
}

export default AddTodo;
