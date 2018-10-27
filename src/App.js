import React, { Component } from 'react'
import Todos from './components/TodoList'
import AddTodo from './components/AddTodo'
import './style/style.css'

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

  addTodo = (task) =>{
    task.id = Math.random()
    let tasks = [...this.state.tasks, task]

    this.setState({
      tasks
    })
  }

  render() {
      return (
        <div className="App container">
          <AddTodo addTodo={this.addTodo}/>
          <Todos tasks={this.state.tasks} deleteTodo={this.deleteTodo}/>
 
        </div>
      );
    }
  }


export default App;
