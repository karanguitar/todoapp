import React, { Component } from 'react';
import Todos from './components/TodoList'
import AddTodo from './components/AddTodo'

class App extends Component {
  
  state={
    tasks: [
      {
        id: 1,
        title: "Clean",
        task: "Clean my room!",
        done: false 
      },
      {
        id: 2,
        title: "Read",
        task: "Read a book about dinosaurs",
        done: false 
      },
      {
        id: 3,
        title: "Buil",
        task: "Build a large triangle",
        done: false 
      },
    ]
  }

  deleteTodo = (id) =>{
    const tasks = this.state.tasks.filter(task =>{
      return task.id !== id
    })

    this.setState({
      tasks
    })
  }

  render() {
      return (
        <div className="App container">
          <AddTodo />
          <Todos tasks={this.state.tasks} deleteTodo={this.deleteTodo}/>
          
        </div>
      );
    }
  }


export default App;
